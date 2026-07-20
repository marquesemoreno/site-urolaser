import React from "react";
import { Microscope, HeartHandshake, GraduationCap, Award } from "lucide-react";

const values = [
  {
    icon: <Microscope className="w-7 h-7" />,
    title: "TECNOLOGIA A LASER",
    text: "Tratamentos minimamente invasivos para maior conforto e recuperação rápida."
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "ACOLHIMENTO",
    text: "Atendimento humanizado, respeitoso e sigiloso em todas as especialidades."
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "FORMAÇÃO INTERNACIONAL",
    text: "Experiência com observership no Memorial Sloan Kettering (New York, EUA)."
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "EXCELÊNCIA",
    text: "Residência em Urologia pelo Hospital Federal de Ipanema (RJ)."
  }
];

const About = () => {
  return (
    <section id="sobre" className="relative overflow-hidden px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{ background: "linear-gradient(180deg, rgba(8,18,24,0.85) 0%, rgba(14,10,30,0.80) 100%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto relative">
        <div className="inline-block mb-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
            Quem somos
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight font-display">
          SOBRE A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400">UROLASER</span>
        </h2>
        <p className="text-xl text-white/70 mb-16 max-w-3xl font-light leading-relaxed">
          A Urolaser — Especialidades Médicas reúne profissionais de diferentes áreas da saúde para oferecer
          um atendimento completo, humanizado e com tecnologia a laser para maior conforto e recuperação.
        </p>

        <div className="flex flex-col md:flex-row gap-10 mt-12 items-stretch">
          <div className="flex-1">
            <div className="group relative h-full p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                <HeartHandshake className="w-7 h-7 text-white" />
              </div>

              <h3 className="relative text-2xl font-semibold mb-6 text-white tracking-tight font-display">NOSSA MISSÃO</h3>
              <p className="relative text-white/75 font-light leading-relaxed">
                "Cuidar da sua saúde com precisão, tecnologia e acolhimento — unindo especialidades médicas
                em um só lugar para um atendimento completo e humanizado."
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="group relative h-full p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-500/20">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="relative text-2xl font-semibold mb-8 text-white tracking-tight font-display">NOSSOS DIFERENCIAIS</h3>
              <div className="relative space-y-7">
                {values.map((value, i) => (
                  <div key={i} className="flex items-start gap-5 group/value">
                    <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 shadow-md shadow-cyan-500/20 group-hover/value:scale-110 group-hover/value:shadow-violet-500/40 transition-all duration-300">
                      <span className="text-white">{value.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover/value:text-transparent group-hover/value:bg-clip-text group-hover/value:bg-gradient-to-r group-hover/value:from-cyan-300 group-hover/value:to-violet-300 transition-all duration-300 font-display">
                        {value.title}
                      </h4>
                      <p className="text-sm text-white/70 font-light leading-relaxed">{value.text}</p>
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
