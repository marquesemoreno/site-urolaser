import React from "react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { BlogPost } from "@/types/blog";
import BlogPostShareButtons from "./BlogPostShareButtons";

interface BlogPostMainContentProps {
  post: BlogPost;
  shareUrl: string;
}

const BlogPostMainContent: React.FC<BlogPostMainContentProps> = ({ post, shareUrl }) => {
  return (
    <article>
      <div className="mb-6 overflow-hidden rounded-lg">
        <AspectRatio ratio={16 / 9}>
          <img src={post.imageSrc} alt={post.title} className="object-cover w-full h-full" />
        </AspectRatio>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium mr-3">
            {post.category}
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight text-foreground">{post.title}</h1>
        {post.datePublished && (
          <p className="text-muted-foreground text-sm">
            Publicado em {new Date(post.datePublished).toLocaleDateString("pt-BR")}
          </p>
        )}
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        {post.content ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">{post.summary}</p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Este artigo está disponível na página específica:{" "}
              <Link to={`/blog/${post.slug}`} className="text-primary hover:underline">
                {post.title}
              </Link>
            </p>
          </>
        )}
      </div>

      <BlogPostShareButtons title={post.title} summary={post.summary} url={shareUrl} />
    </article>
  );
};

export default BlogPostMainContent;
