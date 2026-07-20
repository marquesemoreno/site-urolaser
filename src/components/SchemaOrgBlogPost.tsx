
import React from 'react';
import { Helmet } from 'react-helmet';

interface SchemaOrgBlogPostProps {
  url: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  imageUrl: string;
  authorName: string;
  faq?: { question: string; answer: string }[];
}

const SchemaOrgBlogPost: React.FC<SchemaOrgBlogPostProps> = ({
  url,
  title,
  description,
  datePublished,
  dateModified,
  imageUrl,
  authorName,
  faq
}) => {
  const schemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "headline": title,
      "description": description,
      "image": [imageUrl],
      "author": {
        "@type": "Organization",
        "name": authorName,
        "url": "https://www.tivdc.com.br"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TIVDC",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tivdc.com.br/logo-tivdc.png"
        }
      },
      "datePublished": datePublished,
      "dateModified": dateModified,
      "inLanguage": "pt-BR"
    }
  ];

  if (faq && faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
      </script>
    </Helmet>
  );
};

export default SchemaOrgBlogPost;
