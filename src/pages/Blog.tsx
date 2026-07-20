
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeoEffect } from "@/hooks/useSeoEffect";
import BlogHeader from "@/components/blog/BlogHeader";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts, categories } from "@/types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const Blog = () => {
  // Use SEO hook for optimizing title and description
  useSeoEffect({
    title: "Blog TIVDC — Dicas, Tendências e Soluções em Tecnologia",
    description: "Acompanhe nossas dicas, notícias, tendências e conteúdos exclusivos sobre suporte técnico, segurança, automação e muito mais."
  });

  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const secondPost = blogPosts[1]; // Automação post

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog TIVDC — Dicas, Tendências e Soluções em Tecnologia</title>
        <meta name="description" content="Acompanhe nossas dicas, notícias, tendências e conteúdos exclusivos sobre suporte técnico, segurança, automação e muito mais." />
        <link rel="canonical" href="https://www.tivdc.com.br/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="TIVDC" />
        <meta property="og:title" content="Blog TIVDC — Dicas, Tendências e Soluções em Tecnologia" />
        <meta property="og:description" content="Suporte de TI, segurança e automação em Vitória da Conquista. Conteúdos exclusivos para empresas." />
        <meta property="og:url" content="https://www.tivdc.com.br/blog" />
        <meta property="og:image" content="https://www.tivdc.com.br/blog/multas-lgpd-ultrapassam-milhoes.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      
      <main className="relative flex-1 pt-28 pb-12">
        {/* Textura de rede discreta e estática (consistência com a home) */}
        <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        {/* Blog Header */}
        <BlogHeader />
        
        {/* Blog Content */}
        <div className="container px-8 md:px-16 lg:px-24 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full md:w-3/4">
              {/* Featured Post */}
              <FeaturedPost post={featured} />
              
              {/* Second Post */}
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-6">Artigos Recentes</h2>
                <Card className="bg-background-light border-white/10 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img 
                        src={secondPost.imageSrc} 
                        alt={secondPost.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="mb-3">
                        <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full">
                          {secondPost.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                        <Link to={`/blog/${secondPost.slug}`} className="hover:text-primary transition-colors">
                          {secondPost.title}
                        </Link>
                      </h3>
                      <p className="text-white/70 mb-4 line-clamp-3">
                        {secondPost.summary}
                      </p>
                      <Link 
                        to={`/blog/${secondPost.slug}`} 
                        className="text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        Leia mais →
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <BlogSidebar categories={categories} />
            </div>
          </div>
        </div>

        {/* CTA final discreto (consistente com a identidade de rede) */}
        <div className="container px-8 md:px-16 lg:px-24 py-12">
          <div className="net-divider mb-10" />
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
            <h2 className="font-display text-2xl font-bold text-white">
              Fale com a TIVDC
            </h2>
            <p className="text-sm text-white/70">
              Tire dúvidas sobre TI, segurança e automação para sua empresa em Vitória da Conquista.
            </p>
            <a
              href="https://wa.me/5577999708403"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center"
            >
              <fluent-button
                appearance="accent"
                style={{ height: "48px", padding: "0 24px", borderRadius: "9999px", fontSize: "14px", fontWeight: "600" }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <MessageSquare style={{ width: "16px", height: "16px" }} />
                  FALAR NO WHATSAPP
                </span>
              </fluent-button>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
