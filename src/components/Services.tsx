import React from "react";
import {
  Stethoscope, Flower2, Activity, HeartPulse, Brain, Apple, Check
} from "lucide-react";

const featured = [
  {
    title: "Urologia",
    icon: <Stethoscope className="w-7 h-7" />,
    items: [
      "Diagnóstico e tratamento do sistema urinário masculino e feminino",
      "Saúde do aparelho reprodutor masculino",
      "Acompanhamento especializado e humanizado"
    ]
  },
  {
    title: "Ginecologia",
    icon: <Flower2 className="w-7 h-7" />,
    items: [
      "Saúde da mulher em todas as fases da vida",
      "Acompanhamento preventivo especializado",
      "Planejamento e cuidado contínuo"
    ]
  },
  {
    title: "Proctologia",
    icon: <Activity className="w-7 h-7" />,
    items: [
      "Prevenção e tratamento de reto e cólon",
      "Tecnologia e discrição no atendimento",
      "Procedimentos minimamente invasivos"
    ]
  }
];

const secondary = [
  { title: "Endocrinologia", icon: <HeartPulse className="w-5 h-5" />,
    text: "Hormônios, tireoide, diabetes e metabólico com acompanhamento individualizado." },
  { title: "Psicologia", icon: <Brain className="w-5 h-5" />,
    text: "Apoio ao bem-estar emocional e mental, presencial e com acolhimento humanizado." },
  { title: "Nutrição", icon: <Apple className="w-5 h-5" />,
    text: "Plano alimentar personalizado para sua saúde e qualidade de vida." },
  { title: "Urologia Infantil", icon: <Stethoscope className="w-5 h-5" />,
    text: "Cuidado especializado da saúde urinária de crianças e adolescentes." },
  { title: "Andrologia", icon: <Activity className="w-5 h-5" />,
    text: "Saúde masculina reprodutiva e hormonal com avaliação especializada." },
  { title: "Clínica Médica", icon: <Activity className="w-5 h-5" />,
    text: "Avaliação clínica ampla como porta de entrada para sua saúde." }
];

const Services = () => {
  return (
    <section id="especialidades" className="relative overflow-hidden px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-50" aria-hidden="true" />

      <div className="container mx-auto relative">
        <div className="inline-block mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
            Cuidado completo
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight font-display">
          NOSSAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400">ESPECIALIDADES</span>
        </h2>
        <p className="text-xl text-white/70 mb-16 max-w-3xl font-light leading-relaxed">
          Uma equipe multidisciplinar para cuidar de você em todas as frentes da saúde,
          com tecnologia a laser e atendimento humanizado.
        </p>

        {/* 3 destaques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {featured.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-cyan-400/30 bg-white/[0.06] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in"
              style={{ animationDelay: `${0.06 * index}s` }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-500">
                <span className="text-cyan-200">{service.icon}</span>
              </div>

              <h3 className="relative text-2xl font-semibold mb-6 text-white tracking-tight font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-violet-300 transition-all duration-300">
                {service.title}
              </h3>

              <ul className="relative space-y-3 flex-1">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 shrink-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 text-cyan-200">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-sm font-light text-white/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 6 secundários */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {secondary.map((s, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <span className="font-display text-2xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-cyan-400/70 to-violet-400/70 group-hover:from-cyan-300 group-hover:to-violet-300 transition-all duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-cyan-300/80">{s.icon}</span>
                  <h4 className="font-display font-semibold text-white text-[15px] tracking-tight">{s.title}</h4>
                </div>
                <p className="text-[13px] text-white/65 font-light leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
