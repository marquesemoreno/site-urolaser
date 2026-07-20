import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSeoEffect } from "@/hooks/useSeoEffect";
import {
  Headphones, ChartBar, Globe, Server, Shield, Folder, Cloud,
  Ticket, Bot, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const allServices = [
  {
    title: "Suporte e Helpdesk",
    icon: <Headphones className="w-6 h-6" />,
    items: [
      "Suporte remoto e presencial para computadores, redes e impressoras",
      "Gestão de chamados (SLA)",
      "Backup e recuperação de dados"
    ]
  },
  {
    title: "Suporte com SLA e GLPI",
    icon: <Ticket className="w-6 h-6" />,
    items: [
      "Gestão de chamados com SLA",
      "Painel de tickets",
      "Relatórios de atendimento"
    ]
  },
  {
    title: "Dashboards e Monitoramento",
    icon: <ChartBar className="w-6 h-6" />,
    items: [
      "Criação de dashboards personalizados (Faturamento, Vendas, Financeiro)",
      "Monitoramento de KPIs com integração a planilhas, ERPs, CRMs",
      "Decisões mais rápidas e assertivas"
    ]
  },
  {
    title: "Automação e IA no WhatsApp",
    icon: <Bot className="w-6 h-6" />,
    items: [
      "Chatbot inteligente",
      "Integração Evolution API + n8n",
      "Atendimento 24/7 automatizado"
    ]
  },
  {
    title: "Presença Digital",
    icon: <Globe className="w-6 h-6" />,
    items: [
      "Perfil no Google Meu Negócio",
      "Sites institucionais e landing pages",
      "SEO básico e anúncios locais"
    ]
  },
  {
    title: "Infraestrutura de TI",
    icon: <Server className="w-6 h-6" />,
    items: [
      "Montagem de redes cabeadas e Wi-Fi",
      "Configuração de servidores Windows/Linux",
      "Monitoramento de redes e servidores"
    ]
  },
  {
    title: "Segurança da Informação",
    icon: <Shield className="w-6 h-6" />,
    items: [
      "Firewalls e antivírus corporativo",
      "Gestão de backup e recuperação de desastres",
      "Treinamento de segurança para usuários"
    ]
  },
  {
    title: "Consultoria e Projetos",
    icon: <Folder className="w-6 h-6" />,
    items: [
      "Expansão ou modernização de infraestrutura",
      "Migração para nuvem (Microsoft 365, Google Workspace)",
      "Virtualização de servidores (VMware, Proxmox)"
    ]
  },
  {
    title: "Cloud e Serviços Online",
    icon: <Cloud className="w-6 h-6" />,
    items: [
      "Gestão de e-mails profissionais",
      "Armazenamento em nuvem",
      "Chatbots para WhatsApp, redes sociais e sites"
    ]
  }
];

const ServicesPage = () => {
  useSeoEffect({
    title: "Serviços de TI — TIVDC",
    description: "Suporte, automação com IA, dashboards, infraestrutura e segurança da informação para empresas em Vitória da Conquista e região."
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero da página */}
      <section className="relative overflow-hidden pt-32 pb-20 px-8 md:px-16 lg:px-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        </div>
        <div className="container mx-auto text-center">
          <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-300 mb-6">
            Nossos Serviços
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extra-bold text-white leading-tight tracking-tight mb-6">
            Tecnologia que <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">resolve de verdade</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-medium">
            Do helpdesk ao atendimento com IA no WhatsApp. Soluções completas
            para sua empresa trabalhar com mais segurança, produtividade e tranquilidade.
          </p>
        </div>
      </section>

      {/* Grid de serviços */}
      <section className="px-8 md:px-16 lg:px-24 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 flex flex-col h-full animate-fade-in"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-[0_0_18px_rgba(139,92,246,0.5)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-6 text-white tracking-tight">
                  {service.title}
                </h3>
                <ul className="space-y-3 text-white/80 flex-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-400 min-w-4 mt-1">•</span>
                      <span className="text-sm font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 lg:px-24 py-20">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-16 text-center">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extra-bold text-white mb-4">
              Pronto para levar sua TI ao <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">próximo nível</span>?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto font-medium">
              Fale com a gente e receba um diagnóstico sem compromisso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5577999708403"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(139,92,246,0.45)] transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
              >
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                Ver contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
