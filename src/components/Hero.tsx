import React from "react";
import { MessageCircle, Stethoscope, ShieldCheck, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Fundo limpo (sem pontos de rede) — foco no conteúdo */}

      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-20 pb-28 relative">
        <div className="flex flex-col space-y-8 max-w-3xl">
          {/* Badge de acolhimento — petróleo pontual */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Urologia Avançada · Vitória da Conquista, BA
          </span>

          {/* Título em Montserrat (sans geométrica) — marca, sem gradiente */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight font-display">
            Cuidado especializado em{" "}
            <span className="text-primary">urologia</span>, com a{" "}
            <span className="font-medium">tecnologia a laser</span> que você merece.
          </h1>

          {/* Subtítulo — Montserrat, neutro e sóbrio (info clínica) */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-body leading-relaxed">
            Atendimento humanizado pelo <strong className="font-semibold text-foreground">Dr. Alan Pascoal</strong> e equipe multidisciplinar.
            Diagnóstico preciso, tratamentos minimamente invasivos e recuperação com conforto.
          </p>

          <div className="flex pt-2">
            <a
              href="https://wa.me/5577999257550"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </div>

          {/* Selos de credencial — tipografia NEUTRA e sóbria (restrição do cliente) */}
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 credential">
              <Stethoscope className="h-4 w-4 text-primary" /> CRM-BA 27945
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 credential">
              <ShieldCheck className="h-4 w-4 text-secondary" /> Formação internacional
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 credential">
              <Sparkles className="h-4 w-4 text-primary" /> Tecnologia a laser
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
