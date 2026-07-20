// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs"
import { resolve } from "path"
import { blogPosts } from "../src/types/blog.ts"

const BASE_URL = "https://tivdc.com.br"

interface SitemapEntry {
  path: string
  lastmod?: string
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority: string
}

const today = new Date().toISOString().split("T")[0]

const entries: SitemapEntry[] = [
  { path: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
  { path: "/blog", lastmod: today, changefreq: "weekly", priority: "0.8" },
  { path: "/banco-de-horas", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { path: "/forum-negocios-landing-gratis", lastmod: today, changefreq: "monthly", priority: "0.6" },
  { path: "/politica-de-privacidade", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { path: "/politica-de-cookies", lastmod: today, changefreq: "yearly", priority: "0.3" },
  // Posts de blog (dinâmico)
  ...blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    lastmod: p.dateModified || today,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
]

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length} entries)`)
