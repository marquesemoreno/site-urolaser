import React from "react";
import { MessageCircle, Stethoscope, Sparkles, ShieldCheck } from "lucide-react";
import NetworkMesh from "@/components/visual/NetworkMesh";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden font-display">
      {/* Assinatura visual: topologia sutil (tom ciano/violeta — saúde + tecnologia) */}
      <NetworkMesh />

      {/* Overlay para legibilidade (paleta ciano/violeta) */}
      <div
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{
          background:
            "linear-gradient(to right, rgba(8,18,24,0.93) 0%, rgba(10,16,30,0.80) 45%, rgba(10,20,32,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-20">
        <div className="flex flex-col space-y-10 max-w-3xl animate-slide-up">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Urologia Avançada · Vitória da Conquista, BA
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Cuidado especializado em{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #22d3ee, #8b5cf6)" }}
            >
              urologia com tecnologia a laser
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-xl font-body font-medium">
            Atendimento humanizado pelo Dr. Alan Pascoal e equipe multidisciplinar.
            Diagnóstico preciso, tratamentos minimamente invasivos e recuperação com conforto.
          </p>

          <div className="flex pt-2">
            <a
              href="https://wa.me/5577999257550"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <fluent-button
                appearance="accent"
                style={{ height: "52px", padding: "0 32px", borderRadius: "9999px", fontSize: "14px", fontWeight: "700" }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  Agendar pelo WhatsApp
                  <MessageCircle style={{ width: "16px", height: "16px" }} />
                </span>
              </fluent-button>
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-white/80">
            <span className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 backdrop-blur-md">
              <Stethoscope className="h-4 w-4 text-cyan-300" /> CRM-BA 27945
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-400/5 px-3 py-2 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-violet-300" /> Formação internacional
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-emerald-300" /> Tecnologia a laser
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
