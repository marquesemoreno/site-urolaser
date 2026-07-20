
import React from 'react';
import { Link as LinkIcon, Smartphone } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-12">
      <a 
        href="https://tivdc.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-blue-800 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors border border-white/10"
      >
        <LinkIcon size={18} />
        Visite nosso site
      </a>
      
      <a 
        href="https://www.instagram.com/ti.vdc/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-blue-800 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors border border-white/10"
      >
        <LinkIcon size={18} />
        Instagram
      </a>
      
      <a 
        href="https://g.co/kgs/pMhYvUs"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-blue-800 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors border border-white/10"
      >
        <LinkIcon size={18} />
        Google Meu Negócio
      </a>
      
      <a 
        href="https://wa.me/5577999311841?text=Ol%C3%A1!%20Estou%20no%20F%C3%B3rum%20de%20Neg%C3%B3cios%202025%20e%20quero%20garantir%20minha%20landing%20page%20gratuita."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors"
      >
        <Smartphone size={18} />
        Fale no WhatsApp
      </a>
    </div>
  );
};

export default ActionButtons;
