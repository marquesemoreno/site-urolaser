
import React from 'react';
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900/30 py-8 text-center text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-4">
        <img src="/logo.png" alt="TIVDC" className="h-16 w-16 rounded-full mx-auto mb-3 object-contain" />
        <h2 className="text-xl font-bold mb-2 text-white">TIVDC</h2>
        <p className="mb-2">Soluções em Suporte de TI</p>
        
        <div className="mt-4 mb-4">
          <a href="mailto:suporte@tivdc.com.br" className="block mb-1 hover:text-white transition-colors">
            suporte@tivdc.com.br
          </a>
          <a href="https://wa.me/5577999708403" className="block hover:text-white transition-colors">
            (77) 99970-8403
          </a>
        </div>
        
        <div className="flex justify-center gap-4 my-4">
          <a 
            href="https://www.instagram.com/ti.vdc" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Google Meu Negócio"
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 text-sm opacity-75">
          <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">
            Política de Privacidade
          </Link>
          <Link to="/politica-de-cookies" className="hover:text-white transition-colors">
            Política de Cookies
          </Link>
        </div>
        
        <p className="mt-4 text-xs opacity-75">© {currentYear} TIVDC - Soluções em Suporte de TI.</p>
      </div>
    </footer>
  );
};

export default LandingFooter;
