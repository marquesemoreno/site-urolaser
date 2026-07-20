
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSeoEffect } from '@/hooks/useSeoEffect';
import { Cookie, Shield, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SchemaOrgCookies from '@/components/SchemaOrgCookies';

const CookiesPolicy = () => {
  useSeoEffect({
    title: "Política de Cookies - Urolaser",
    description: "Entenda como a Urolaser utiliza cookies para melhorar sua experiência e proteger sua privacidade, conforme a LGPD e o guia da ANPD."
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Política de Cookies - Urolaser</title>
        <meta name="description" content="Entenda como a Urolaser utiliza cookies para melhorar sua experiência e proteger sua privacidade, conforme a LGPD e o guia da ANPD." />
        <meta name="keywords" content="cookies, LGPD, proteção de dados, Urolaser, , navegação segura" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urolaser.tivdc.com.br/politica-de-cookies" />
        <meta property="og:title" content="Política de Cookies - Urolaser" />
        <meta property="og:description" content="Entenda como a Urolaser utiliza cookies para melhorar sua experiência e proteger sua privacidade, conforme a LGPD e o guia da ANPD." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://urolaser.tivdc.com.br/politica-de-cookies" />
        <meta name="twitter:title" content="Política de Cookies - Urolaser" />
        <meta name="twitter:description" content="Entenda como a Urolaser utiliza cookies para melhorar sua experiência e proteger sua privacidade, conforme a LGPD e o guia da ANPD." />
      </Helmet>
      
      <SchemaOrgCookies 
        url="https://urolaser.tivdc.com.br/politica-de-cookies"
        title="Política de Cookies - Urolaser"
        description="Entenda como a Urolaser utiliza cookies para melhorar sua experiência e proteger sua privacidade, conforme a LGPD e o guia da ANPD."
        datePublished="2025-04-30"
        dateModified="2025-04-30"
        organizationName="Urolaser"
        organizationUrl="https://urolaser.tivdc.com.br"
      />
      
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Política de Cookies</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Atualizada em conformidade com a LGPD (Lei nº 13.709/2018) e o Guia da ANPD
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead mb-8">
              A Urolaser utiliza cookies e tecnologias similares para melhorar sua experiência em nosso site e garantir a segurança das operações. 
              Esta política explica como utilizamos essas tecnologias e como você pode gerenciar suas preferências.
            </p>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">O que são Cookies?</h2>
              <p className="mb-4">
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo ao visitar sites. 
                Eles servem para lembrar preferências, melhorar o desempenho e personalizar sua experiência.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Tipos de Cookies que Utilizamos</h2>
              
              <h3 className="text-xl font-semibold mb-2">Cookies Necessários</h3>
              <p className="mb-4">
                Essenciais para o funcionamento do site e não podem ser desativados em nossos sistemas.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Cookies Analíticos</h3>
              <p className="mb-4">
                Nos ajudam a entender como os visitantes usam o site, permitindo melhorias na navegação e nos conteúdos (ex.: Google Analytics).
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Cookies de Marketing e Terceiros</h3>
              <p className="mb-4">
                Podem ser usados para personalizar anúncios ou integrar funcionalidades de terceiros (ex.: redes sociais, mapas).
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Como Gerenciar Seus Cookies?</h2>
              <p className="mb-4">
                Você pode gerenciar suas preferências de cookies a qualquer momento:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Através do banner de cookies em nosso site.</li>
                <li>Alterando as configurações no seu navegador.</li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Mais informações</h2>
              <p className="mb-2">
                Para saber mais sobre como protegemos seus dados, acesse nossa{' '}
                <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </Link>.
              </p>
              <p className="mb-4">
                Em caso de dúvidas, entre em contato pelo e-mail: <a href="mailto:urolaservca@gmail.com" className="text-primary hover:underline">urolaservca@gmail.com</a>
              </p>
              <p>Última atualização: 30/04/2025</p>
            </section>
            
            <div className="flex items-center gap-2 mt-12 p-6 bg-secondary/20 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
              <p className="font-medium">Na Urolaser, valorizamos sua privacidade e buscamos transparência em todas as nossas práticas.</p>
            </div>
            
            <div className="flex justify-between items-center mt-12">
              <Link to="/" className="text-primary hover:underline flex items-center">
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Página Inicial
              </Link>
              <Link to="/politica-de-privacidade" className="text-primary hover:underline flex items-center">
                Política de Privacidade
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
