import React from "react";
import { Activity, Sparkles, ShieldCheck, HeartPulse } from "lucide-react";

const treatments = [
  { title: "Litotrípsia a laser", desc: "Fragmentação de cálculos renais e uretrais sem cirurgia aberta, com recuperação rápida." },
  { title: "Vaporizaço a laser (BPH)", desc: "Tratamento da hiperplasia prostática benigna com precisão e menor sangramento." },
  { title: "Cirurgia robótica", desc: "Procedimentos minimamente invasivos com visão ampliada e alta precisão." },
  { title: "Tratamento da incontinência", desc: "Soluções personalizadas para controle e qualidade de vida." },
  { title: "Saúde sexual masculina", desc: "Avaliação e tratamento de disfunção erétil e saúde andrológica." },
  { title: "Prevenção oncológica", desc: "Acompanhamento e rastreio do câncer de próstata, bexiga e rim." },
];

const Treatments = () => {
  return (
    <section id="tratamentos" className="relative overflow-hidden px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="container mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground tracking-tight font-display">
          Tratamentos especializados
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl font-light leading-relaxed">
          Tecnologia a laser e protocolos modernos para tratamentos
          preciso e com o menor desconforto possível.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              style={{ animationDelay: `${0.06 * i}s` }}
            >
              <span className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Activity className="w-6 h-6" />
              </span>
              <h3 className="text-xl font-semibold mb-2 text-foreground tracking-tight font-display">
                {t.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
