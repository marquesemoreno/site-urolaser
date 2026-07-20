
import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BlogPostShareButtonsProps {
  title: string;
  summary: string;
  url: string;
}

const BlogPostShareButtons: React.FC<BlogPostShareButtonsProps> = ({ title, summary, url }) => {
  const { toast } = useToast();
  
  const shareOnSocialMedia = (platform: string, shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: "Link copiado!",
        description: "O link do artigo foi copiado para a área de transferência.",
      });
    });
  };

  return (
    <div className="mt-12 pt-6 border-t border-white/10">
      <h3 className="text-lg font-semibold mb-4">Compartilhe este artigo</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => shareOnSocialMedia('facebook', `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)}
          aria-label="Compartilhar no Facebook"
        >
          <Facebook className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => shareOnSocialMedia('twitter', `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`)}
          aria-label="Compartilhar no Twitter"
        >
          <Twitter className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => shareOnSocialMedia('linkedin', `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`)}
          aria-label="Compartilhar no LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${summary}\n\nSaiba mais: ${url}`)}`)}
          aria-label="Compartilhar por Email"
        >
          <Mail className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
          aria-label="Copiar link"
        >
          <LinkIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default BlogPostShareButtons;
