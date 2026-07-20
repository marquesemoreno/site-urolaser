
import React, { useEffect } from 'react';
import { useSeoEffect } from '@/hooks/useSeoEffect';

// Import individual component HTML files
import headHtml from './amp/components/head.html?raw';
import schemaHtml from './amp/components/schema.html?raw';
import headerHtml from './amp/components/header.html?raw';
import mainContentHtml from './amp/components/main-content.html?raw';
import formHtml from './amp/components/form.html?raw';
import quickLinksHtml from './amp/components/quick-links.html?raw';
import footerHtml from './amp/components/footer.html?raw';

// Import CSS files
import baseCss from './amp/styles/base.css?raw';
import headerCss from './amp/styles/header.css?raw';
import contentCss from './amp/styles/content.css?raw';
import benefitsCss from './amp/styles/benefits.css?raw';
import formCss from './amp/styles/form.css?raw';
import linksCss from './amp/styles/links.css?raw';
import footerCss from './amp/styles/footer.css?raw';

// Import main AMP template
import ampTemplateHtml from './amp/AmpSupportPage.html?raw';

const AmpSupportPage: React.FC = () => {
  useSeoEffect({
    title: "Suporte de TI para Empresas | Consultoria Gratuita | TIVDC",
    description: "Garanta segurança, performance e suporte completo em TI. Fale com a TIVDC e turbine seu negócio. Consultoria gratuita."
  });

  useEffect(() => {
    // Build the complete AMP HTML by replacing template variables
    let finalAmpHtml = ampTemplateHtml;
    
    // Replace component placeholders
    finalAmpHtml = finalAmpHtml
      .replace('{{> head}}', headHtml)
      .replace('{{> schema}}', schemaHtml)
      .replace('{{> header}}', headerHtml)
      .replace('{{> main-content}}', mainContentHtml)
      .replace('{{> form}}', formHtml)
      .replace('{{> quick-links}}', quickLinksHtml)
      .replace('{{> footer}}', footerHtml);
    
    // Replace CSS placeholders
    finalAmpHtml = finalAmpHtml
      .replace('{{> base.css}}', baseCss)
      .replace('{{> header.css}}', headerCss)
      .replace('{{> content.css}}', contentCss)
      .replace('{{> benefits.css}}', benefitsCss)
      .replace('{{> form.css}}', formCss)
      .replace('{{> links.css}}', linksCss)
      .replace('{{> footer.css}}', footerCss);
    
    // Inject the compiled AMP HTML into the container
    if (document.getElementById('amp-container')) {
      const ampContainer = document.getElementById('amp-container');
      if (ampContainer) {
        ampContainer.innerHTML = finalAmpHtml;
      }
    }
    
    // Add robots meta tag for SEO
    const robotsMetaTag = document.createElement('meta');
    robotsMetaTag.name = 'robots';
    robotsMetaTag.content = 'index, follow';
    document.head.appendChild(robotsMetaTag);
    
    return () => {
      // Clean up when component unmounts
      if (document.head.contains(robotsMetaTag)) {
        document.head.removeChild(robotsMetaTag);
      }
    };
  }, []);

  return (
    <div id="amp-container">
      {/* The AMP HTML will be injected here */}
      <noscript>
        <p>Para visualizar esta página corretamente, ative o JavaScript no seu navegador.</p>
      </noscript>
    </div>
  );
};

export default AmpSupportPage;
