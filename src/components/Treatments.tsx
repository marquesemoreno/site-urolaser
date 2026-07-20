import React from "react";
import { Check } from "lucide-react";

const treatments = [
  {
    title: "Próstata",
    text: "Hiperplasia benigna (HBP), câncer de próstata e acompanhamento de PSA com tecnologia a laser."
  },
  {
    title: "Cálculo Renal",
    text: "Diagnóstico e tratamento de pedras nos rins e vias urinárias, com opções minimamente invasivas."
  },
  {
    title: "Saúde do Homem",
    text: "Disfunção erétil e androgenização — avaliação e tratamento especializado da saúde masculina."
  },
  {
    title: "Infecções Urinárias",
    text: "Investigação e tratamento de infecções de repetição em homens e mulheres."
  },
  {
    title: "Vasectomia",
    text: "Planejamento reprodutivo com procedimento seguro, ambulatorial e de recuperação rápida."
  },
  {
    title: "Estética Íntima",
    text: "Procedimentos a laser para conforto e qualidade de vida com discrição e tecnologia."
  }
];

const Treatments = () => {
  return (
    <section id="tratamentos" className="relative overflow-hidden px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-50" aria-hidden="true" />

      <div className="container mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight font-display">
          TRATAMENTOS ESPECIALIZADOS
        </h2>
        <p className="text-xl text-white/70 mb-16 max-w-3xl font-light leading-relaxed">
          Urologia avançada com tecnologia a laser e acompanhamento humanizado,
          das doenças mais comuns aos tratamentos de alta complexidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 animate-fade-in"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.07] to-violet-500/[0.07] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-4">
                <span className="mt-1 inline-flex items-center justify-center w-7 h-7 shrink-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 text-cyan-200">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white tracking-tight font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-violet-300 transition-all duration-300">
                    {t.title}
                  </h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
