
import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
}

export const useSeoEffect = ({ title, description }: SeoProps) => {
  useEffect(() => {
    // Update the title and description for SEO
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [title, description]);
};
