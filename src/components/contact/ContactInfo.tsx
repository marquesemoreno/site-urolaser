
import React from "react";
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import SocialMediaLinks from "./SocialMediaLinks";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-white">INFORMAÇÕES DE CONTATO</h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="service-icon">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">ENDEREÇO</h4>
              <p className="text-white/80">Vitória da Conquista, Bahia</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="service-icon">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">E-MAIL</h4>
              <a href="mailto:suporte@tivdc.com.br" className="text-white hover:text-white/80 hover:underline">
                suporte@tivdc.com.br
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="service-icon">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">TELEFONE</h4>
              <a href="tel:+5577999708403" className="text-white hover:text-white/80 hover:underline">
                (77) 99970-8403
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="service-icon">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">WHATSAPP</h4>
              <a 
                href="https://wa.me/5577999708403" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                FALAR NO WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default ContactInfo;
