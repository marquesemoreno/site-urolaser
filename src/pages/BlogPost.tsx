import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/types/blog";
import { useSeoEffect } from "@/hooks/useSeoEffect";
import BlogPostMainContent from "@/components/blog/BlogPostMainContent";
import BlogPostSidebar from "@/components/blog/BlogPostSidebar";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://urolaser.tivdc.com.br/blog/${slug}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="relative flex-1 pt-28 pb-12">
        <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <div className="container px-8 md:px-16 lg:px-24 mb-8">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o Blog
          </Link>
        </div>

        <div className="container px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4">
              <BlogPostMainContent post={post} shareUrl={shareUrl} />
              {post.faq && post.faq.length > 0 && (
                <section className="mt-10 rounded-lg border border-border bg-white p-6" aria-label="Perguntas frequentes">
                  <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">Perguntas Frequentes</h2>
                  <div className="space-y-4">
                    {post.faq.map((f, i) => (
                      <div key={i} className="border-b border-border pb-4 last:border-0 last:pb-0">
                        <h3 className="font-semibold text-foreground mb-1">{f.question}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="w-full md:w-1/4">
              <BlogPostSidebar category={post.category} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
