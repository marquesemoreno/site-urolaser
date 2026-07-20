
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
      {/* Featured Image */}
      <div className="mb-6 overflow-hidden rounded-lg">
        <AspectRatio ratio={16 / 9}>
          <img
            src={post.imageSrc}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>

      {/* Post Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full mr-3">
            {post.category}
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">{post.title}</h1>
        {post.datePublished && (
          <p className="text-white/50 text-sm">
            Publicado em {new Date(post.datePublished).toLocaleDateString("pt-BR")}
          </p>
        )}
      </div>

      {/* Post Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {post.content ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {post.summary}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Este artigo está disponível na página específica:{" "}
              <Link to={`/blog/${post.slug}`} className="text-white hover:underline">
                {post.title}
              </Link>
            </p>
          </>
        )}
      </div>

      {/* Social Sharing */}
      <BlogPostShareButtons title={post.title} summary={post.summary} url={shareUrl} />
    </article>
  );
};

export default BlogPostMainContent;
