import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quanto custa o suporte técnico para empresas?",
    answer:
      "Oferecemos planos a partir de R$400/mês para até 5 máquinas, com suporte remoto e presencial focado em produtividade.",
  },
  {
    question: "Vocês atendem clínicas e laboratórios?",
    answer:
      "Sim, somos especialistas em TI para o setor de saúde, garantindo suporte seguro e conformidade com as normas da LGPD.",
  },
  {
    question: "Como funciona o suporte remoto?",
    answer:
      "Acessamos seu computador remotamente de forma segura para resolver problemas sem a necessidade de deslocamento.",
  },
  {
    question: "Vocês oferecem automação e atendimento com IA?",
    answer:
      "Sim! Integramos chatbots no WhatsApp (Evolution API + n8n) para atendimento 24/7 automatizado, qualificação de leads e redução de chamados manuais.",
  },
  {
    question: "Vocês criam sites para empresas?",
    answer:
      "Sim, criamos sites profissionais ou landing pages. Inclusive oferecemos um site grátis na assinatura de alguns planos de suporte.",
  },
  {
    question: "Qual o tempo de resposta para chamados?",
    answer:
      "Nosso SLA garante resposta em até 2 horas para chamados críticos, minimizando o tempo parado da sua operação.",
  },
];

// Em SSR/prerender (typeof window === undefined) renderizamos as respostas
// direto no HTML (visíveis pros crawlers). No browser, o accordion interativo.
const FAQSSR: React.FC = () => (
  <div className="max-w-3xl mx-auto space-y-6">
    {faqData.map((item, index) => (
      <div key={index} className="border-b border-white/10 pb-6">
        <h3 className="text-left text-white py-2 text-base md:text-lg font-semibold">
          {item.question}
        </h3>
        <p className="text-white/80 text-base leading-relaxed">{item.answer}</p>
      </div>
    ))}
  </div>
);

const FAQ: React.FC = () => {
  const isSSR = typeof window === "undefined";

  return (
    <section id="faq" className="bg-background-light">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="text-center mb-12">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre nossos serviços de TI
          </p>
        </div>

        {isSSR ? (
          <FAQSSR />
        ) : (
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline py-5 text-base md:text-lg font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
