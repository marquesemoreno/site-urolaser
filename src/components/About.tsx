import React from "react";
import { Microscope, HeartHandshake, GraduationCap, Award } from "lucide-react";

const values = [
  { icon: <Microscope className="w-7 h-7" />, title: "Tecnologia a laser", text: "Tratamentos minimamente invasivos para maior conforto e recuperação rápida." },
  { icon: <HeartHandshake className="w-7 h-7" />, title: "Acolhimento", text: "Atendimento humanizado, respeitoso e sigiloso em todas as especialidades." },
  { icon: <GraduationCap className="w-7 h-7" />, title: "Formação internacional", text: "Experiência com observership no Memorial Sloan Kettering (New York, EUA)." },
  { icon: <Award className="w-7 h-7" />, title: "Excelência", text: "Residência em Urologia pelo Hospital Federal de Ipanema (RJ)." },
];

const About = () => {
  return (
    <section id="sobre" className="relative overflow-hidden px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="container mx-auto relative">
        {/* Título Fraunces, sem eyebrow */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground tracking-tight font-display">
          Sobre a Urolaser
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl font-light leading-relaxed">
          A Urolaser — Especialidades Médicas reúne profissionais de diferentes áreas da saúde para oferecer
          um atendimento completo, humanizado e com tecnologia a laser para maior conforto e recuperação.
        </p>

        <div className="flex flex-col md:flex-row gap-10 mt-12 items-stretch">
          <div className="flex-1">
            <div className="relative h-full p-10 rounded-2xl border border-primary/30 bg-white shadow-sm overflow-hidden">
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
                <HeartHandshake className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground tracking-tight font-display">Nossa missão</h3>
              <p className="text-foreground/75 font-light leading-relaxed">
                "Cuidar da sua saúde com precisão, tecnologia e acolhimento — unindo especialidades médicas
                em um só lugar para um atendimento completo e humanizado."
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative h-full p-10 rounded-2xl border border-border bg-white shadow-sm">
              <h3 className="text-2xl font-semibold mb-8 text-foreground tracking-tight font-display">Nossos diferenciais</h3>
              <div className="space-y-7">
                {values.map((value, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted">
                      <span className="text-primary">{value.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 font-display">{value.title}</h4>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
