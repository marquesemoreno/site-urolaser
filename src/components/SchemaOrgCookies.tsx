
import React from 'react';
import { Helmet } from 'react-helmet';

interface SchemaOrgCookiesProps {
  url: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  organizationName: string;
  organizationUrl: string;
}

const SchemaOrgCookies: React.FC<SchemaOrgCookiesProps> = ({
  url,
  title,
  description,
  datePublished,
  dateModified,
  organizationName,
  organizationUrl
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "mainEntity": {
      "@type": "WebContent",
      "name": title,
      "description": description,
      "datePublished": datePublished,
      "dateModified": dateModified,
      "publisher": {
        "@type": "Organization",
        "name": organizationName,
        "url": organizationUrl
      },
      "isPartOf": {
        "@type": "WebSite",
        "name": organizationName,
        "url": organizationUrl
      },
      "contentLocation": {
        "@type": "Country",
        "name": "Brazil"
      }
    },
    "about": {
      "@type": "Thing",
      "name": "Cookie Policy",
      "description": "Information about how cookies are used on the website"
    },
    "specialty": "Data Protection",
    "keywords": "cookies, LGPD, proteção de dados, Urolaser, , navegação segura",
    "inLanguage": "pt-BR"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaOrgCookies;
