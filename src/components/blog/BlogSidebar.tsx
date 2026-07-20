import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogSidebarProps {
  categories: string[];
}

const BlogSidebar = ({ categories }: BlogSidebarProps) => {
  return (
    <Card className="bg-white border-border">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">Categorias</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link to="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <FileText className="h-4 w-4 mr-2" />
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BlogSidebar;
