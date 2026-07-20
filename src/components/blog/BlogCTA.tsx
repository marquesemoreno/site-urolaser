
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface BlogCTAProps {
  text: string;
  link: string;
  icon?: boolean;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
}

const BlogCTA: React.FC<BlogCTAProps> = ({ 
  text, 
  link, 
  icon = true, 
  variant = "default" 
}) => {
  return (
    <div className="flex justify-center my-8">
      <Button asChild variant={variant} size="lg" className="text-white font-medium">
        <Link to={link} className="flex items-center">
          {text} {icon && <MessageSquare className="ml-2 h-4 w-4" />}
        </Link>
      </Button>
    </div>
  );
};

export default BlogCTA;
