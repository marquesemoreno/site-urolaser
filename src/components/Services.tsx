import React from "react";
import {
  Stethoscope, Flower2, Activity, HeartPulse, Brain, Apple, Check,
} from "lucide-react";

const featured = [
  { title: "Urologia", icon: <Stethoscope className="w-7 h-7" />, items: [
    "Diagnóstico e tratamento do sistema urinário masculino e feminino",
    "Saúde do aparelho reprodutor masculino",
    "Acompanhamento especializado e humanizado",
  ] },
  { title: "Ginecologia", icon: <Flower2 className="w-7 h-7" />, items: [
    "Saúde da mulher em todas as fases da vida",
    "Acompanhamento preventivo especializado",
    "Planejamento e cuidado contínuo",
  ] },
  { title: "Proctologia", icon: <Activity className="w-7 h-7" />, items: [
    "Prevenção e tratamento de reto e cólon",
    "Tecnologia e discrição no atendimento",
    "Procedimentos minimamente invasivos",
  ] },
];

const secondary = [
  { title: "Endocrinologia", icon: <HeartPulse className="w-5 h-5" />, text: "Hormônios, tireoide, diabetes e metabólico com acompanhamento individualizado." },
  { title: "Psicologia", icon: <Brain className="w-5 h-5" />, text: "Apoio ao bem-estar emocional e mental, com acolhimento humanizado." },
  { title: "Nutrição", icon: <Apple className="w-5 h-5" />, text: "Plano alimentar personalizado para sua saúde e qualidade de vida." },
  { title: "Urologia Infantil", icon: <Stethoscope className="w-5 h-5" />, text: "Cuidado especializado da saúde urinária de crianças e adolescentes." },
  { title: "Andrologia", icon: <Activity className="w-5 h-5" />, text: "Saúde masculina reprodutiva e hormonal com avaliação especializada." },
  { title: "Clínica Médica", icon: <Activity className="w-5 h-5" />, text: "Avaliação clínica ampla como porta de entrada para sua saúde." },
];

const Services = () => {
  return (
    <section id="especialidades" className="relative overflow-hidden px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="container mx-auto relative">
        {/* Título Fraunces, sem eyebrow */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground tracking-tight font-display">
          Nossas especialidades
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl font-light leading-relaxed">
          Uma equipe multidisciplinar para cuidar de você em todas as frentes da saúde,
          com tecnologia a laser e atendimento humanizado.
        </p>

        {/* 3 destaques — Urologia em verde de marca */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {featured.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border bg-white transition-all duration-300 hover:shadow-md ${
                service.title === "Urologia" ? "border-primary/40 shadow-sm" : "border-border"
              }`}
              style={{ animationDelay: `${0.06 * index}s` }}
            >
              <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl border ${
                service.title === "Urologia" ? "border-primary/40 bg-primary/10" : "border-border bg-muted"
              }`}>
                <span className={service.title === "Urologia" ? "text-primary" : "text-foreground/70"}>{service.icon}</span>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-foreground tracking-tight font-display">
                {service.title}
              </h3>

              <ul className="space-y-3 flex-1">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-0.5 inline-flex items-center justify-center w-5 h-5 shrink-0 rounded-full ${
                      service.title === "Urologia" ? "bg-primary/15 text-primary" : "bg-muted text-foreground/60"
                    }`}>
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-sm font-light text-foreground/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 6 secundários — sólidos, sem numbered */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {secondary.map((s, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:border-primary/30"
            >
              <span className="text-primary/80">{s.icon}</span>
              <div className="flex-1">
                <h4 className="font-display font-semibold text-foreground text-[15px] tracking-tight mb-1.5">{s.title}</h4>
                <p className="text-[13px] text-muted-foreground font-light leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
