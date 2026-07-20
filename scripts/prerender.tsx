// Prerender SSR: gera HTML estático por rota em dist/<rota>/index.html
// Desbloqueia SEO/GEO (crawlers sem JS leem o conteúdo + title/description/OG por rota).
// Roda APÓS o `vite build` (client). Usa react-dom/server + StaticRouter.

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import React from "react";

// Importa as rotas puras (sem BrowserRouter)
import AppRoutes from "../src/AppRoutes";

const OG_IMAGE = "https://urolaser.tivdc.com.br/og-urolaser.png";
const SITE_URL = "https://urolaser.tivdc.com.br";
const HOME_OG = "https://urolaser.tivdc.com.br/og-urolaser.png";

type MetaEntry = {
  title: string;
  description: string;
  ogImage?: string;
  locale?: string;
};

// Metas das rotas estáticas (espelho do useSeoEffect/Helmet de cada página).
const STATIC_META: Record<string, MetaEntry> = {
  "/": {
    title: "Urolaser — Urologia Avançada em Vitória da Conquista | Dr. Alan Pascoal",
    description:
      "Urologia avançada com tecnologia a laser em Vitória da Conquista - BA. Atendimento humanizado com o Dr. Alan Pascoal e equipe multidisciplinar. Agende sua consulta.",
    ogImage: HOME_OG,
    locale: "pt_BR",
  },
  "/politica-de-privacidade": {
    title: "Política de Privacidade - Urolaser",
    description:
      "Política de privacidade da Urolaser em conformidade com a LGPD para proteção dos seus dados.",
    locale: "pt_BR",
  },
  "/politica-de-cookies": {
    title: "Política de Cookies - Urolaser",
    description:
      "Entenda como a Urolaser utiliza cookies para melhorar sua experiência, conforme a LGPD.",
    locale: "pt_BR",
  },
};

const META: Record<string, MetaEntry> = { ...STATIC_META };

const routes = Object.keys(META);

const distDir = resolve("dist");

// --- JSON-LD (GEO / rich snippets) ---
const LOCAL_BUSINESS_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://urolaser.tivdc.com.br/#organization",
  name: "Urolaser — Especialidades Médicas",
  alternateName: "Urolaser VCA",
  url: "https://urolaser.tivdc.com.br",
  image: HOME_OG,
  description:
    "Urologia avançada com tecnologia a laser e equipe multidisciplinar em Vitória da Conquista - BA. Atendimento humanizado com o Dr. Alan Pascoal.",
  telephone: "+55-77-3427-7267",
  email: "urolaservca@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "BRL",
  medicalSpecialty: ["Urology", "Gynecologic", "Proctologic", "Endocrine"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Otávio Santos, 395, Sala 202 — Recreio",
    addressLocality: "Vitória da Conquista",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Vitória da Conquista" },
    { "@type": "State", name: "Bahia" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "12:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-77-99925-7550",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/urolaser.vca",
  ],
};

function prerenderRoute(route: string): string {
  return renderToString(
    React.createElement(StaticRouter, { location: route }, React.createElement(AppRoutes))
  );
}

function setOrAddMeta(html: string, attr: string, content: string): string {
  const re = new RegExp(
    `<meta[^>]+${attr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^>]*>`,
    "i"
  );
  const tag = `<meta ${attr} content="${content}" />`;
  if (re.test(html)) {
    return html.replace(re, tag);
  }
  return html.replace("</head>", `  ${tag}\n</head>`);
}

function injectMeta(html: string, route: string, meta: MetaEntry): string {
  const ogImage = meta.ogImage || OG_IMAGE;
  const canonical = `${SITE_URL}${route === "/" ? "" : route}`;
  let out = html;

  // <title>
  if (/<title>/i.test(out)) {
    out = out.replace(/<title>[^<]*<\/title>/i, `<title>${meta.title}</title>`);
  } else {
    out = out.replace("</head>", `<title>${meta.title}</title></head>`);
  }

  // <meta name="description">
  out = setOrAddMeta(out, 'name="description"', meta.description);

  // Open Graph
  out = setOrAddMeta(out, 'property="og:type"', "website");
  out = setOrAddMeta(out, 'property="og:locale"', meta.locale || "pt_BR");
  out = setOrAddMeta(out, 'property="og:site_name"', "TIVDC");
  out = setOrAddMeta(out, 'property="og:title"', meta.title);
  out = setOrAddMeta(out, 'property="og:description"', meta.description);
  out = setOrAddMeta(out, 'property="og:image"', ogImage);
  out = setOrAddMeta(out, 'property="og:url"', canonical);

  // Twitter
  out = setOrAddMeta(out, 'name="twitter:card"', "summary_large_image");
  out = setOrAddMeta(out, 'name="twitter:title"', meta.title);
  out = setOrAddMeta(out, 'name="twitter:description"', meta.description);
  out = setOrAddMeta(out, 'name="twitter:image"', ogImage);

  // Canonical (é <link>, não <meta>)
  const canonRe = /<link[^>]+rel=["']canonical["'][^>]*>/i;
  const canonTag = `<link rel="canonical" href="${canonical}" />`;
  if (canonRe.test(out)) {
    out = out.replace(canonRe, canonTag);
  } else {
    out = out.replace("</head>", `  ${canonTag}\n</head>`);
  }

  // JSON-LD (GEO / rich snippets)
  // LocalBusiness enriquecido no HTML estático (crawler sem JS lê). O componente
  // SchemaOrgOrganization (Helmet) não é capturado pelo prerender, então injetamos aqui.
  const ldScripts: string[] = [];
  if (route === "/") {
    ldScripts.push(JSON.stringify(LOCAL_BUSINESS_LD));
  }
  if (ldScripts.length > 0) {
    const block = ldScripts
      .map((s) => `  <script type="application/ld+json">${s}</script>`)
      .join("\n");
    out = out.replace("</head>", `${block}\n</head>`);
  }

  return out;
}

function main() {
  if (!existsSync(resolve(distDir, "index.html"))) {
    console.error("ERRO: rode `vite build` antes do prerender.");
    process.exit(1);
  }

  const template = readFileSync(resolve(distDir, "index.html"), "utf-8");

  for (const route of routes) {
    const meta = META[route];
    const appHtml = prerenderRoute(route);
    let fullHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );
    fullHtml = injectMeta(fullHtml, route, meta);

    const outPath =
      route === "/"
        ? resolve(distDir, "index.html")
        : resolve(distDir, route.slice(1), "index.html");

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, fullHtml, "utf-8");
    console.log(`prerendered: ${route} -> ${outPath}`);
  }

  console.log(`Prerender concluído (${routes.length} rotas).`);
}

main();
