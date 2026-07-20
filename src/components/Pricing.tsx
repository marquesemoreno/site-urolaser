import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plano Particular",
    price: "Consulte",
    description: "Atendimento humanizado, sem plano de saúde, com tecnologia a laser.",
    features: [
      "Consulta com o Dr. Alan Pascoal (Urologia)",
      "Agendamento flexível pelo WhatsApp",
      "Acompanhamento pós-consulta",
      "Laudos e exames detalhados",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="relative overflow-hidden px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground tracking-tight font-display">
          Atendimento particular
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl font-light">
          Cuidado especializado com agendamento direto, sem burocracia de planos de saúde.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl bg-white overflow-hidden shadow-sm hover:border-primary/40 transition-all duration-300"
            >
              <div className="p-6 border-b border-border">
                <h3 className="text-foreground text-2xl font-semibold tracking-tight font-display">{plan.name}</h3>
                <p className="text-muted-foreground text-sm font-light mt-1">{plan.description}</p>
              </div>
              <div className="p-6">
                <p className="text-xl font-semibold text-foreground">{plan.price}</p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 shrink-0 rounded-full bg-primary/10 text-primary">
                        <Check className="w-3 h-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
