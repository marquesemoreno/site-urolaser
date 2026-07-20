
import React from 'react';
import { Check } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <div className="bg-blue-900/30 rounded-xl p-8 mb-12 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">Benefícios do <span className="text-gradient">Marketing Digital</span> com a TIVDC</h2>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex items-start">
          <Check className="text-green-400 mr-3 flex-shrink-0" />
          <span className="text-gray-300">Página moderna, rápida e responsiva</span>
        </div>
        <div className="flex items-start">
          <Check className="text-green-400 mr-3 flex-shrink-0" />
          <span className="text-gray-300">Ideal para atrair clientes online</span>
        </div>
        <div className="flex items-start">
          <Check className="text-green-400 mr-3 flex-shrink-0" />
          <span className="text-gray-300">Entrega ágil e personalizada</span>
        </div>
        <div className="flex items-start">
          <Check className="text-green-400 mr-3 flex-shrink-0" />
          <span className="text-gray-300">Suporte técnico de TI especializado</span>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
