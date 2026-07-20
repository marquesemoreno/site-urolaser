import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Treatments from '@/components/Treatments';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Urolaser — Urologia Avançada em Vitória da Conquista | Dr. Alan Pascoal</title>
        <meta name="description" content="Urologia avançada com tecnologia a laser em Vitória da Conquista. Atendimento humanizado pelo Dr. Alan e equipe multidisciplinar. Agende sua consulta." />
        <link rel="canonical" href="https://urolaser.tivdc.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Urolaser" />
        <meta property="og:title" content="Urolaser — Urologia Avançada em Vitória da Conquista" />
        <meta property="og:description" content="Cuidado especializado com tecnologia a laser e formação internacional. Agende sua consulta com o Dr. Alan." />
        <meta property="og:url" content="https://urolaser.tivdc.com.br/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Urolaser — Urologia Avançada em Vitória da Conquista" />
        <meta name="twitter:description" content="Cuidado especializado com tecnologia a laser e formação internacional." />
      </Helmet>
      <Navbar />
      <Hero />

      <About />
      <Services />
      <Treatments />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
