
import React from "react";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface SlideProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl?: string;
}

const Slide: React.FC<SlideProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageUrl,
}) => {
  return (
    <div className="min-h-[500px] md:min-h-[600px] flex items-center">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-lg font-medium">
              {subtitle}
            </p>
            
            <div className="flex pt-4">
              <a 
                href={buttonLink} 
                className="group px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 flex items-center justify-center text-sm font-bold"
              >
                {buttonText}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {imageUrl && (
            <div className="hidden lg:block">
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <img
                  src={imageUrl}
                  alt="Imagem ilustrativa"
                  className="rounded-2xl object-cover w-full h-[500px] opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const HeroCarousel: React.FC = () => {
  const slides = [
    {
      title: "📢 Faça seu site e aumente sua presença digital",
      subtitle: "Ganhe uma landing page gratuita ao assinar um dos nossos planos de suporte e comece a atrair mais clientes com sua marca online.",
      buttonText: "QUERO MEU SITE GRÁTIS",
      buttonLink: "#contact",
      imageUrl: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "⚙️ Automatize tarefas e tenha controle total da sua operação",
      subtitle: "Transforme planilhas e dados soltos em dashboards inteligentes e tome decisões baseadas em indicadores de performance (KPIs).",
      buttonText: "VEJA COMO FUNCIONA",
      buttonLink: "#services",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "🔧 Problemas com rede e sistema?",
      subtitle: "Oferecemos suporte técnico completo para redes, computadores, impressoras e sistemas — remoto ou presencial, com SLA.",
      buttonText: "CONHEÇA NOSSOS PLANOS",
      buttonLink: "#pricing",
      imageUrl: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "🤖 Automação e IA no WhatsApp",
      subtitle: "Chatbots inteligentes (Evolution API + n8n) para atendimento 24/7, qualificação de leads e menos chamados manuais.",
      buttonText: "CONHEÇA A SOLUÇÃO",
      buttonLink: "#services",
      imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex items-center pt-16 bg-background overflow-hidden">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Slide {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 lg:left-8" />
        <CarouselNext className="right-4 lg:right-8" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
