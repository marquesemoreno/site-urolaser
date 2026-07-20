import React from "react";

const BlogHeader = () => {
  return (
    <div className="relative overflow-hidden bg-background-light py-12 md:py-16">
      {/* Textura de rede discreta e estática (coerente com a home) */}
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-0 opacity-50" aria-hidden="true" />

      <div className="container px-8 md:px-16 lg:px-24 relative">
        <h1 className="section-title text-center mb-6 font-display">
          Blog TIVDC — Dicas, Tendências e Soluções em Tecnologia
        </h1>
        <p className="font-body text-white/80 text-lg md:text-xl text-center max-w-4xl mx-auto">
          Acompanhe nossas dicas, notícias, tendências e conteúdos exclusivos sobre suporte técnico,
          segurança da informação, automação, presença digital, redes, dashboards e muito mais.
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;
