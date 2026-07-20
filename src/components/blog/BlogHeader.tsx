import React from "react";

const BlogHeader = () => {
  return (
    <div className="relative overflow-hidden bg-muted/40 py-12 md:py-16 border-b border-border">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-0 opacity-40" aria-hidden="true" />

      <div className="container px-8 md:px-16 lg:px-24 relative">
        <h1 className="section-title text-center mb-6 text-foreground font-display">
          Blog Urolaser — Saúde, prevenção e bem-estar
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl text-center max-w-4xl mx-auto">
          Acompanhe nossas dicas, notícias e conteúdos exclusivos sobre urologia,
          saúde masculina, prevenção e qualidade de vida.
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;
