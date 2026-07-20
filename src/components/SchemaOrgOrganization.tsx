
import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaOrgOrganization = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.tivdc.com.br/#organization",
    "name": "TIVDC - Soluções em TI",
    "alternateName": "TIVDC - Suporte de TI para Empresas",
    "url": "https://www.tivdc.com.br",
    "logo": "https://www.tivdc.com.br/logo-tivdc.png",
    "image": "https://www.tivdc.com.br/og-tivdc.png",
    "description": "Suporte de TI, automação com IA, dashboards e segurança da informação em Vitória da Conquista - BA. Atendimento remoto e presencial para clínicas, laboratórios e PMEs.",
    "telephone": "+55-77-99970-8403",
    "email": "suporte@tivdc.com.br",
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vitória da Conquista",
      "addressRegion": "BA",
      "addressCountry": "BR",
      "postalCode": "45000-000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -14.8560,
      "longitude": -40.8414
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Vitória da Conquista"
      },
      {
        "@type": "State",
        "name": "Bahia"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+55-77-99970-8403",
        "contactType": "customer service",
        "areaServed": "BR",
        "availableLanguage": ["Portuguese"]
      }
    ],
    "sameAs": [
      "https://www.instagram.com/ti.vdc",
      "https://www.facebook.com/tivdc",
      "https://www.linkedin.com/company/tivdc"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de TI",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Suporte de TI e Helpdesk" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automação e IA no WhatsApp" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Segurança da Informação" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dashboards e Monitoramento" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Infraestrutura de TI" } }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaOrgOrganization;
