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
  useSeoEffect({
    title: "Blog Urolaser — Saúde, prevenção e bem-estar",
    description: "Acompanhe nossas dicas, notícias e conteúdos exclusivos sobre urologia, saúde masculina e qualidade de vida."
  });

  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const secondPost = blogPosts[1];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog Urolaser — Saúde, prevenção e bem-estar</title>
        <meta name="description" content="Acompanhe nossas dicas, notícias e conteúdos exclusivos sobre urologia, saúde masculina e qualidade de vida." />
        <link rel="canonical" href="https://urolaser.tivdc.com.br/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Urolaser" />
        <meta property="og:title" content="Blog Urolaser — Saúde, prevenção e bem-estar" />
        <meta property="og:description" content="Urologia, saúde masculina e prevenção em Vitória da Conquista." />
        <meta property="og:url" content="https://urolaser.tivdc.com.br/blog" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />

      <main className="relative flex-1 pt-28 pb-12">
        <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <BlogHeader />

        <div className="container px-8 md:px-16 lg:px-24 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4">
              <FeaturedPost post={featured} />

              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-6 text-foreground">Artigos Recentes</h2>
                <Card className="bg-white border-border overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img src={secondPost.imageSrc} alt={secondPost.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="mb-3">
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                          {secondPost.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-foreground">
                        <Link to={`/blog/${secondPost.slug}`} className="hover:text-primary transition-colors">
                          {secondPost.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{secondPost.summary}</p>
                      <Link to={`/blog/${secondPost.slug}`} className="text-primary hover:text-primary/80 transition-colors font-medium">
                        Leia mais →
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>

            <div className="w-full md:w-1/4">
              <BlogSidebar categories={categories} />
            </div>
          </div>
        </div>

        <div className="container px-8 md:px-16 lg:px-24 py-12">
          <div className="net-divider mb-10" />
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-white p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Fale com a Urolaser
            </h2>
            <p className="text-sm text-muted-foreground">
              Tire dúvidas sobre saúde, prevenção e nossos tratamentos em Vitória da Conquista.
            </p>
            <a href="https://wa.me/5577999257550" target="_blank" rel="noopener noreferrer" className="btn-brand">
              <MessageSquare className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
