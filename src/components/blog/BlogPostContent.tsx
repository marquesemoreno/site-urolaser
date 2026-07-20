
import React, { ReactNode } from "react";

interface BlogPostContentProps {
  children: ReactNode;
  title?: string;
  titleLink?: string;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ children, title, titleLink }) => {
  return (
    <div className="container px-8 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {title && titleLink && (
            <h1 className="text-3xl md:text-4xl font-bold mb-8 hover:text-primary/80 transition-colors">
              <a href={titleLink}>{title}</a>
            </h1>
          )}
          <article className="prose prose-invert max-w-none prose-p:mb-8 prose-li:mb-3 prose-headings:mt-12 prose-headings:mb-6">
            {children}
          </article>
        </div>
        
        {/* Sidebar (optional) */}
        <div className="w-full md:w-1/4">
          {/* Add sidebar content here if needed */}
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
