import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeoEffect } from "@/hooks/useSeoEffect";
import { Stethoscope, Flower2, Activity, HeartPulse, Brain, Apple } from "lucide-react";

const allServices = [
  { title: "Urologia", icon: <Stethoscope className="w-6 h-6" />, items: ["Diagnóstico e tratamento do sistema urinário masculino e feminino", "Saúde do aparelho reprodutor masculino", "Acompanhamento especializado e humanizado"] },
  { title: "Ginecologia", icon: <Flower2 className="w-6 h-6" />, items: ["Saúde da mulher em todas as fases da vida", "Acompanhamento preventivo especializado", "Planejamento e cuidado contínuo"] },
  { title: "Proctologia", icon: <Activity className="w-6 h-6" />, items: ["Prevenção e tratamento de reto e cólon", "Tecnologia e discrição no atendimento", "Procedimentos minimamente invasivos"] },
  { title: "Endocrinologia", icon: <HeartPulse className="w-6 h-6" />, items: ["Hormônios, tireoide, diabetes e metabólico", "Acompanhamento individualizado", "Cuidado preventivo"] },
  { title: "Psicologia", icon: <Brain className="w-6 h-6" />, items: ["Apoio ao bem-estar emocional e mental", "Atendimento presencial e humanizado", "Acompanhamento contínuo"] },
  { title: "Nutrição", icon: <Apple className="w-6 h-6" />, items: ["Plano alimentar personalizado", "Para sua saúde e qualidade de vida", "Acompanhamento de resultados"] },
];

const ServicesPage = () => {
  useSeoEffect({
    title: "Especialidades — Urolaser",
    description: "Urologia, ginecologia, proctologia, endocrinologia, psicologia e nutrição. Atendimento humanizado em Vitória da Conquista."
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-20 px-8 md:px-16 lg:px-24">
        <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <div className="container mx-auto text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium text-primary mb-6">
            Nossas Especialidades
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight mb-6 font-display">
            Cuidado completo em <span className="text-primary">saúde</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Uma equipe multidisciplinar para cuidar de você em todas as frentes,
            com tecnologia a laser e atendimento humanizado.
          </p>
        </div>
      </section>

      <section className="px-8 md:px-16 lg:px-24 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl border border-border bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col h-full"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-foreground tracking-tight font-display">
                  {service.title}
                </h3>
                <ul className="space-y-3 text-foreground/80 flex-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary min-w-4 mt-1">•</span>
                      <span className="text-sm font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
