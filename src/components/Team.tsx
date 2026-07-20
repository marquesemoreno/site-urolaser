import React from "react";
import { BadgeCheck } from "lucide-react";

const lead = {
  name: "Dr. Alan Pascoal",
  role: "Urologista · Diretor Técnico Médico",
  crm: "CRM-BA 27945 · RQE 12941 / 13027",
  bio: "Residência em Urologia pelo Hospital Federal do Andaraí (RJ) e observership em videolaparoscopia e cirurgia robótica no Memorial Sloan Kettering, New York (EUA).",
  photo: "/equipe/dr-alan-pascoal.jpg",
};

const team = [
  { name: "Dr. Danilo Andrade", role: "Urologista e Andrologista", crm: "CRM 25125 · RQE 21889", photo: "/equipe/dr-danilo-andrade.jpg" },
  { name: "Dra. Dayana Feitoza", role: "Ginecologista", crm: "CRM-BA 37364 · CRM-MG 58600", photo: "/equipe/dra-dayana-feitoza.jpg" },
  { name: "Dra. Indira Baqueiro", role: "Coloproctologista", crm: "CRM-BA 22127", photo: "/equipe/dra-indira-baqueiro.jpg" },
  { name: "Dra. Maryse Vanessa", role: "Endocrinologista", crm: "CRM-BA 27032", photo: "/equipe/dra-maryse-vanessa.jpg" },
  { name: "Ione Freitas", role: "Psicóloga · Neuropsicóloga", crm: "CRP 03/11725", photo: "/equipe/ione-freitas.jpg" },
  { name: "Dra. Thamiris Carvalho", role: "Clínica Geral · Emagrecimento e Obesidade", crm: "CRM 49159", photo: "/equipe/dra-thamiris-carvalho.jpg" },
];

const Team = () => {
  return (
    <section id="equipe" className="relative overflow-hidden px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="container mx-auto relative">
        {/* Título em Fraunces, sem eyebrow uppercase */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground tracking-tight font-display">
          Nossa equipe
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl font-light leading-relaxed">
          Profissionais experientes e humanizados, prontos para cuidar da sua saúde com excelência e tecnologia.
        </p>

        {/* Líder em destaque — Dr. Alan (essencial) */}
        <div className="relative rounded-3xl border border-primary/30 bg-white overflow-hidden shadow-sm max-w-4xl mx-auto mb-14">
          <div className="relative flex flex-col sm:flex-row items-stretch">
            <div className="sm:w-64 shrink-0">
              <img
                src={lead.photo}
                alt={`${lead.name} — ${lead.role}`}
                className="w-full h-64 sm:h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-semibold text-foreground tracking-tight font-display">{lead.name}</h3>
                <BadgeCheck className="w-5 h-5 text-primary" />
              </div>
              <p className="text-primary font-medium mb-1">{lead.role}</p>
              {/* Credencial: tipografia NEUTRA e sóbria */}
              <p className="credential mb-4">{lead.crm}</p>
              <p className="text-foreground/75 font-light leading-relaxed text-sm">{lead.bio}</p>
            </div>
          </div>
        </div>

        {/* Grid secundário — fotos sólidas, sem hover-zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  className="w-full h-72 object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="font-display font-semibold text-foreground text-lg tracking-tight mb-1">{m.name}</h4>
                <p className="text-primary/90 text-sm font-medium mb-1">{m.role}</p>
                {/* Credencial sóbria */}
                <p className="credential text-xs">{m.crm}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
