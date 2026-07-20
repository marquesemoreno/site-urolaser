
import React from 'react';
import { useSeoEffect } from '@/hooks/useSeoEffect';

const AmpLeadCapture = () => {
  useSeoEffect({
    title: "Garanta sua Landing Page Grátis | Fórum de Negócios 2025 | TIVDC",
    description: "Oferta exclusiva de landing page gratuita para participantes do Fórum de Negócios 2025. Promovido pela TIVDC, empresa de TI."
  });

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header Banner */}
      <div className="bg-blue-900 py-3 text-center">
        <p className="text-sm md:text-base">Fórum de Negócios 2025</p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-md mx-auto bg-[#1a1a1c] rounded-lg p-6 shadow-lg">
          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Garanta sua Landing Page Grátis
            </h1>
            <h2 className="text-sm md:text-base text-gray-300">
              Oferta exclusiva para participantes do Fórum de Negócios 2025
            </h2>
          </div>

          {/* Form Section - AMP compatible */}
          <form 
            method="POST"
            action-xhr="https://example.com/form-submit"
            target="_top"
            className="mb-6"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 bg-[#252527] border border-gray-600 rounded-md text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-[#252527] border border-gray-600 rounded-md text-white"
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  className="w-full px-3 py-2 bg-[#252527] border border-gray-600 rounded-md text-white"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
              >
                Quero minha Landing Page Grátis
              </button>
            </div>
            
            <div submit-success>
              {/* Using a div instead of template to avoid type errors in React */}
              <div className="text-green-500 text-center mt-4">
                Obrigado! Entraremos em contato em breve.
              </div>
            </div>
            
            <div submit-error>
              {/* Using a div instead of template to avoid type errors in React */}
              <div className="text-red-500 text-center mt-4">
                Ocorreu um erro. Tente novamente ou entre em contato por WhatsApp.
              </div>
            </div>
          </form>

          {/* Contact Links */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a 
              href="https://wa.me/5577999311841?text=Ol%C3%A1!%20Estou%20no%20F%C3%B3rum%20de%20Neg%C3%B3cios%202025%20e%20quero%20garantir%20minha%20landing%20page%20gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white p-3 rounded text-sm hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
            
            <a 
              href="https://www.instagram.com/ti.vdc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#252527] text-white p-3 rounded text-sm hover:bg-[#303035] transition-colors border border-gray-600"
            >
              Instagram
            </a>
            
            <a 
              href="https://g.co/kgs/pMhYvUs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#252527] text-white p-3 rounded text-sm hover:bg-[#303035] transition-colors border border-gray-600"
            >
              Google Maps
            </a>
            
            <a 
              href="https://tivdc.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#252527] text-white p-3 rounded text-sm hover:bg-[#303035] transition-colors border border-gray-600"
            >
              Site TIVDC
            </a>
          </div>
          
          <p className="text-xs text-gray-400 text-center">
            Promoção exclusiva para participantes do Fórum de Negócios 2025 promovido pelo Sebrae.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900/30 py-4 text-center text-gray-300 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="font-bold mb-1 text-sm">TIVDC - Soluções em TI</p>
          <p className="text-xs mb-1">suporte.tivdc@gmail.com | (77) 99931-1841</p>
          <p className="text-xs opacity-75">Fórum de Negócios 2025 - "Atitudes que Geram Excelência em Resultados"</p>
        </div>
      </footer>
    </div>
  );
};

export default AmpLeadCapture;
