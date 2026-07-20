
import React from "react";
import { ArrowRight } from "lucide-react";

const tiers = [
  {
    label: "Até 5 máquinas",
    value: "R$ 400",
    sub: "Valor fixo (inclui até 4h presencial/mês)",
  },
  {
    label: "Até 10 máquinas",
    value: "R$ 70 / máq.",
    sub: "Por máquina (inclui até 8h presencial/mês)",
  },
  {
    label: "Até 20 máquinas",
    value: "R$ 60 / máq.",
    sub: "Por máquina (inclui até 12h presencial/mês)",
  },
  {
    label: "Mais de 20 máquinas",
    value: "Consultar",
    sub: "Entre em contato para uma proposta personalizada",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-background px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white tracking-tight">
            PLANOS E PREÇOS
          </h2>
          <p className="text-xl text-white/80 font-light">
            Escolha o pacote ideal para sua empresa. Suporte especializado, presencial e remoto, sob medida.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-background-light/50 hover:bg-background-light hover:border-white/20 transition-all duration-300 shadow-xl">
            <div className="p-8 md:p-12 border-b border-white/10 text-center">
              <h3 className="text-white text-2xl md:text-3xl font-light mb-3 tracking-tight">
                PLANO HÍBRIDO
              </h3>
              <p className="text-white/70 text-sm md:text-base font-light">
                Ideal para empresas que precisam de suporte remoto e presencial
              </p>
            </div>

            <div className="p-6 md:p-12">
              <ul className="divide-y divide-white/10">
                {tiers.map((t) => (
                  <li
                    key={t.label}
                    className="group py-5 md:py-6 px-2 md:px-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:px-4 md:hover:px-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-6">
                      <span className="font-light text-white text-base md:text-lg">
                        {t.label}
                      </span>
                      <span className="text-xl md:text-2xl font-light text-white whitespace-nowrap">
                        {t.value}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 font-light mt-2">
                      {t.sub}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center"
                >
                  <fluent-button
                    appearance="accent"
                    style={{ height: "52px", padding: "0 40px", borderRadius: "9999px", fontSize: "14px", fontWeight: "700" }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      SOLICITAR PROPOSTA
                      <ArrowRight style={{ width: "20px", height: "20px" }} />
                    </span>
                  </fluent-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
