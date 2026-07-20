import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";

interface BlogPostGridProps {
  posts: BlogPost[];
}

const BlogPostGrid = ({ posts }: BlogPostGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="bg-white border-border overflow-hidden h-full">
          <div className="overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img
                src={post.imageSrc}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </AspectRatio>
          </div>
          <CardHeader>
            <div className="flex items-center mb-2">
              <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
            </div>
            <CardTitle className="text-xl text-foreground">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground line-clamp-3">
              {post.summary}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link to={`/blog/${post.slug}`} className="text-primary hover:text-primary/80 flex items-center font-medium">
              Leia mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogPostGrid;
