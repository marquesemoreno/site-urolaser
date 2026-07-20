
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/types/blog";

interface BlogPostSidebarProps {
  category: string;
}

const BlogPostSidebar: React.FC<BlogPostSidebarProps> = ({ category }) => {
  // Find related posts with the same category
  const relatedPosts = blogPosts.filter(post => post.category === category).slice(0, 3);
  
  return (
    <div className="space-y-6">
      <Card className="bg-background-light border-white/10 sticky top-28">
        <CardContent className="pt-6">
          <h3 className="font-display text-xl font-semibold mb-4 text-white">Informações</h3>
          <div className="space-y-4">
            <p className="text-sm text-white/90">
              Este é um artigo sobre {category.toLowerCase()}, abordando as melhores práticas 
              e soluções para empresas de todos os portes.
            </p>
            <p className="text-sm text-white/90">
              Para mais informações, entre em contato conosco.
            </p>
          </div>
        </CardContent>
      </Card>
      
      {relatedPosts.length > 1 && (
        <Card className="bg-background-light border-white/10">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Artigos Relacionados</h3>
            <div className="space-y-4">
              {relatedPosts.map(post => (
                <div key={post.id} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="hover:text-primary transition-colors"
                  >
                    <h4 className="font-medium mb-1 line-clamp-2">{post.title}</h4>
                  </Link>
                  <p className="text-xs text-white/80">{post.category}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BlogPostSidebar;
