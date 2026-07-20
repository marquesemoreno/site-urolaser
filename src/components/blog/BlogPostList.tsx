
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";

interface BlogPostListProps {
  posts: BlogPost[];
}

const BlogPostList = ({ posts }: BlogPostListProps) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="bg-background-light border-white/10 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <AspectRatio ratio={16 / 9} className="h-full">
                <img 
                  src={post.imageSrc} 
                  alt={post.title} 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center mb-2">
                <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-white/70 mb-4 line-clamp-2">
                {post.summary}
              </p>
              <Link to={`/blog/${post.slug}`} className="text-white hover:text-white/80 flex items-center">
                Leia mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogPostList;
