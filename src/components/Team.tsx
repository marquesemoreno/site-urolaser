import React from "react";
import { BadgeCheck } from "lucide-react";

const lead = {
  name: "Dr. Alan Pascoal",
  role: "Urologista · Diretor Técnico Médico",
  crm: "CRM-BA 27945 · RQE 12941 / 13027",
  bio: "Residência em Urologia pelo Hospital Federal de Ipanema (RJ) e observership em videolaparoscopia e cirurgia robótica no Memorial Sloan Kettering, New York (EUA).",
  photo: "/equipe/dr-alan-pascoal.jpg",
};

const team = [
  {
    name: "Dr. Danilo Andrade",
    role: "Urologista e Andrologista",
    crm: "CRM 25125 · RQE 21889",
    photo: "/equipe/dr-danilo-andrade.jpg",
  },
  {
    name: "Dra. Dayana Feitoza",
    role: "Ginecologista",
    crm: "CRM-BA 37364 · CRM-MG 58600",
    photo: "/equipe/dra-dayana-feitoza.jpg",
  },
  {
    name: "Dra. Indira Baqueiro",
    role: "Coloproctologista",
    crm: "CRM-BA 22127",
    photo: "/equipe/dra-indira-baqueiro.jpg",
  },
  {
    name: "Dra. Maryse Vanessa",
    role: "Endocrinologista",
    crm: "CRM-BA 27032",
    photo: "/equipe/dra-maryse-vanessa.jpg",
  },
  {
    name: "Ione Freitas",
    role: "Psicóloga · Neuropsicóloga",
    crm: "CRP 03/11725",
    photo: "/equipe/ione-freitas.jpg",
  },
  {
    name: "Dra. Thamiris Carvalho",
    role: "Clínica Geral · Emagrecimento e Obesidade",
    crm: "CRM 49159",
    photo: "/equipe/dra-thamiris-carvalho.jpg",
  },
];

const Team = () => {
  return (
    <section id="equipe" className="relative overflow-hidden px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-50" aria-hidden="true" />

      <div className="container mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight font-display">
          NOSSA EQUIPE
        </h2>
        <p className="text-xl text-white/70 mb-16 max-w-3xl font-light leading-relaxed">
          Profissionais experientes e humanizados, prontos para cuidar da sua saúde com excelência e tecnologia.
        </p>

        {/* Líder em destaque */}
        <div className="group relative rounded-3xl border border-cyan-400/30 bg-white/[0.05] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/20 max-w-4xl mx-auto mb-14">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex flex-col sm:flex-row items-stretch">
            <div className="sm:w-64 shrink-0 overflow-hidden">
              <img
                src={lead.photo}
                alt={`${lead.name} — ${lead.role}`}
                className="w-full h-64 sm:h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-bold text-white tracking-tight font-display">{lead.name}</h3>
                <BadgeCheck className="w-5 h-5 text-cyan-300" />
              </div>
              <p className="text-cyan-200 font-semibold mb-1">{lead.role}</p>
              <p className="text-white/60 text-sm mb-4">{lead.crm}</p>
              <p className="text-white/75 font-light leading-relaxed text-sm">{lead.bio}</p>
            </div>
          </div>
        </div>

        {/* Grid da equipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="overflow-hidden">
                <img
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  className="w-full h-72 object-cover object-top"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h4 className="font-display font-semibold text-white text-lg tracking-tight mb-1">{m.name}</h4>
                <p className="text-cyan-200/90 text-sm font-medium mb-1">{m.role}</p>
                <p className="text-white/50 text-xs">{m.crm}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
