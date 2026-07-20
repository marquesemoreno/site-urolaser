
import React from "react";

interface BlogPostHeaderProps {
  title: string;
  description: string;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-background-light py-12 md:py-16">
      <div className="container px-8 md:px-16 lg:px-24">
        <h1 className="section-title text-center mb-6">
          {title}
        </h1>
        <p className="text-white/80 text-lg md:text-xl text-center max-w-4xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogPostHeader;
