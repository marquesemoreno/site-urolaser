
import React from 'react';
import { useSeoEffect } from '@/hooks/useSeoEffect';
import { Button } from '@/components/ui/button';
import { Check, Clock, Shield, Zap, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BancoHorasLanding = () => {
  useSeoEffect({
    title: "Banco de Horas TI | Suporte Técnico por Hora - TIVDC",
    description: "Suporte de TI profissional com pagamento por hora. Sem contratos fixos, pague apenas pelo que usar. Oferta de lançamento para empresas de Vitória da Conquista."
  });

  const scrollToPlans = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = "https://wa.me/5577999708403?text=Olá! Tenho interesse no Banco de Horas de TI.";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#0055A5]">TIVDC</Link>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#0055A5] hover:bg-[#004080] text-white font-medium">
              <Phone className="w-4 h-4 mr-2" />
              Falar com Especialista
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0055A5] to-[#003366] text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Suporte de TI Profissional: Agora com modelo de pagamento por hora.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Chega de contratos fixos caros. Pague apenas pelo que usar com nosso novo <strong>Banco de Horas</strong>. Oferta de lançamento exclusiva para empresas de Vitória da Conquista e região.
          </p>
          <Button 
            onClick={scrollToPlans}
            size="lg"
            className="bg-white text-[#0055A5] hover:bg-gray-100 font-semibold text-lg px-8 py-6"
          >
            Ver Planos Promocionais
          </Button>
        </div>
      </section>

      {/* Por que por Hora? */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#333333]">
            Por que pagar por hora?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#0055A5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#0055A5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#333333]">Transparência Total</h3>
              <p className="text-[#666666]">
                Você sabe exatamente quanto está pagando e pelo que. Relatórios detalhados de cada atendimento.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#0055A5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#0055A5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#333333]">Economia Real</h3>
              <p className="text-[#666666]">
                Pague apenas pelas horas que usar. Sem desperdício de dinheiro em contratos mensais subutilizados.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#0055A5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#0055A5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#333333]">Sem Fidelidade</h3>
              <p className="text-[#666666]">
                Liberdade total. Sem multas, sem contratos longos. Use quando precisar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Oportunidade */}
      <section className="py-12 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-4">
              🚀 Oportunidade Única
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Estamos validando nosso novo modelo de atendimento
            </h2>
            <p className="text-lg text-white/90">
              Por tempo limitado, estamos oferecendo <strong>valores promocionais</strong> para os primeiros <strong>10 novos clientes</strong>. Garanta sua vaga!
            </p>
          </div>
        </div>
      </section>

      {/* Tabela de Preços */}
      <section id="planos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#333333]">
            Escolha seu Plano
          </h2>
          <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto">
            Planos flexíveis para atender às necessidades da sua empresa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card Avulso */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#0055A5]/30 hover:-translate-y-1">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#333333] mb-2">Hora Avulsa</h3>
                <p className="text-[#666666] text-sm">Ideal para emergências</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#333333]">R$ 150</span>
                <span className="text-[#666666]">/hora</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#666666]">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Atendimento sob demanda
                </li>
                <li className="flex items-center text-[#666666]">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Suporte remoto ou presencial
                </li>
                <li className="flex items-center text-[#666666]">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Sem compromisso
                </li>
              </ul>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full border-[#0055A5] text-[#0055A5] hover:bg-[#0055A5] hover:text-white">
                  Contratar
                </Button>
              </a>
            </div>

            {/* Card Bronze - Destaque */}
            <div className="bg-[#0055A5] text-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  ⭐ MAIS POPULAR
                </span>
              </div>
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold mb-2">Combo 5 Horas</h3>
                <p className="text-blue-200 text-sm">Pacote Bronze</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-blue-300 line-through text-lg mb-1">R$ 750</div>
                <span className="text-4xl font-bold">R$ 600</span>
                <span className="text-blue-200">/mês</span>
                <div className="text-sm text-blue-200 mt-2">(R$ 120/hora)</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-blue-100">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  5 horas de suporte técnico
                </li>
                <li className="flex items-center text-blue-100">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Prioridade no atendimento
                </li>
                <li className="flex items-center text-blue-100">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Relatório mensal detalhado
                </li>
                <li className="flex items-center text-blue-100">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Economia de 20%
                </li>
              </ul>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-white text-[#0055A5] hover:bg-gray-100 font-semibold">
                  Quero Este Plano
                </Button>
              </a>
            </div>

            {/* Card Prata */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#0055A5]/30 hover:-translate-y-1 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  💎 MELHOR VALOR
                </span>
              </div>
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold text-[#333333] mb-2">Combo 10 Horas</h3>
                <p className="text-[#666666] text-sm">Pacote Prata</p>
              </div>
              <div className="text-center mb-6">
                <div className="text-[#666666] line-through text-lg mb-1">R$ 1.500</div>
                <span className="text-4xl font-bold text-[#333333]">R$ 1.000</span>
                <span className="text-[#666666]">/mês</span>
                <div className="text-sm text-[#666666] mt-2">(R$ 100/hora)</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-[#666666]">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  10 horas de suporte técnico
                </li>
                <li className="flex items-center text-[#666666]">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Atendimento prioritário VIP
                </li>
                <li className="flex items-center text-[#666666]">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Consultoria técnica inclusa
                </li>
                <li className="flex items-center text-[#666666]">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  Economia de 33%
                </li>
              </ul>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full border-[#0055A5] text-[#0055A5] hover:bg-[#0055A5] hover:text-white">
                  Contratar
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focado em Clínicas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#0055A5]/10 text-[#0055A5] px-4 py-1 rounded-full text-sm font-medium mb-4">
              🏥 Especialização
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#333333]">
              Focado em Clínicas e Consultórios
            </h2>
            <p className="text-lg text-[#666666] mb-8 leading-relaxed">
              Entendemos que sua <strong>recepção não pode parar</strong>. Problemas com sistemas de prontuário, 
              impressoras térmicas, redes Wi-Fi ou computadores lentos impactam diretamente o atendimento 
              aos seus pacientes e a produtividade da sua equipe.
            </p>
            <p className="text-lg text-[#666666] leading-relaxed">
              Nossa equipe é <strong>especializada no segmento de saúde</strong>, com experiência em softwares 
              como Clinic Cloud, iClinic, Doctoralia e outros sistemas médicos. Atendimento ágil, 
              humanizado e que entende a urgência do seu dia a dia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#333333]">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-[#333333] hover:no-underline">
                  O que acontece se eu não usar todas as horas do mês?
                </AccordionTrigger>
                <AccordionContent className="text-[#666666]">
                  As horas não utilizadas no mês podem ser acumuladas para o mês seguinte, desde que 
                  o pacote esteja ativo. Você tem até 60 dias para utilizar as horas acumuladas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-gray-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-[#333333] hover:no-underline">
                  Como as horas são contabilizadas?
                </AccordionTrigger>
                <AccordionContent className="text-[#666666]">
                  O tempo é contabilizado a partir do início do atendimento até sua conclusão. 
                  Enviamos um relatório detalhado mensalmente com todos os chamados, tempo gasto 
                  e descrição das atividades realizadas. Total transparência.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-gray-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-[#333333] hover:no-underline">
                  Vocês atendem presencialmente?
                </AccordionTrigger>
                <AccordionContent className="text-[#666666]">
                  Sim! Atendemos presencialmente em Vitória da Conquista e região. Para atendimentos 
                  presenciais, o deslocamento é incluso para clientes dos pacotes Bronze e Prata. 
                  Para hora avulsa, pode haver cobrança adicional de deslocamento dependendo da localização.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-gray-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-[#333333] hover:no-underline">
                  Qual o horário de atendimento?
                </AccordionTrigger>
                <AccordionContent className="text-[#666666]">
                  Nosso horário comercial é de segunda a sexta, das 8h às 18h. Para emergências 
                  fora do horário, clientes dos pacotes têm acesso a um canal de suporte prioritário 
                  via WhatsApp.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-[#0055A5] to-[#003366] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para ter suporte de TI sem dor de cabeça?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Fale com nossa equipe e garanta seu lugar entre os 10 primeiros clientes com preços promocionais.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-6">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">TIVDC</h3>
                <p className="text-sm text-gray-400">
                  Soluções em Suporte de TI para empresas que valorizam qualidade e transparência.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Contato</h4>
                <div className="space-y-2">
                  <a href="mailto:suporte.tivdc@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    suporte.tivdc@gmail.com
                  </a>
                  <a href="https://wa.me/5577999708403" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    (77) 99970-8403
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
                <div className="flex justify-center md:justify-start gap-4">
                  <a 
                    href="https://instagram.com/tivdc.ti" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
                <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/politica-de-cookies" className="hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </div>
              <p>© {new Date().getFullYear()} TIVDC - Soluções em Suporte de TI. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BancoHorasLanding;
