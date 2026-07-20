import React from "react";
import { Instagram, MapPin, Phone, Mail, Activity, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-muted/40 px-6 md:px-12 lg:px-24 pt-16 pb-28 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Clínica */}
          <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-6 sm:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-urolaser.png"
                alt="Urolaser — Especialidades Médicas"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed text-center sm:text-left">
              Urologia avançada, ginecologia, proctologia e muito mais — com tecnologia a laser e atendimento humanizado.
            </p>
          </div>

          {/* Coluna 2: Endereço */}
          <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-6 sm:items-start">
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2 text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="w-4 h-4" />
              </span>
              ONDE ESTAMOS
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed text-center sm:text-left">
              Av. Otávio Santos, 395, Sala 202 — Centro Médico Dr. Altamirando da Costa Lima, 2º andar — Recreio
              <strong className="text-foreground block mt-1">Vitória da Conquista — BA</strong>
            </p>
          </div>

          {/* Coluna 3: Contato */}
          <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-6 sm:items-start">
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2 text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Phone className="w-4 h-4" />
              </span>
              CONTATO
            </h3>
            <div className="flex flex-col gap-3 text-center sm:text-left">
              <a href="https://wa.me/5577999257550" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="w-3.5 h-3.5 text-primary" /> (77) 99925-7550
              </a>
              <a href="tel:7734277267" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="w-3.5 h-3.5 text-secondary" /> (77) 3427-7267
              </a>
              <a href="mailto:urolaservca@gmail.com" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="w-3.5 h-3.5 text-primary" /> urolaservca@gmail.com
              </a>
            </div>
          </div>

          {/* Coluna 4: Redes e Links */}
          <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-6 sm:items-start">
            <h3 className="text-base font-semibold mb-4 text-foreground">REDES SOCIAIS</h3>
            <div className="flex items-center gap-3 mb-6">
              <a href="https://www.instagram.com/urolaser.vca" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Urolaser" className="bg-muted hover:bg-primary hover:text-primary-foreground p-2.5 rounded-full transition-all duration-300">
                <Instagram className="w-5 h-5 text-foreground/70" />
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Urolaser+Especialidades+Médicas+Vitória+da+Conquista+BA" target="_blank" rel="noopener noreferrer" aria-label="Localização no Google Maps" className="bg-muted hover:bg-primary hover:text-primary-foreground p-2.5 rounded-full transition-all duration-300">
                <MapPin className="w-5 h-5 text-foreground/70" />
              </a>
            </div>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <Link to="/politica-de-privacidade" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 flex items-center gap-1.5 justify-center sm:justify-start">
                <ExternalLink className="w-3.5 h-3.5" /> Política de Privacidade
              </Link>
              <Link to="/politica-de-cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 flex items-center gap-1.5 justify-center sm:justify-start">
                <ExternalLink className="w-3.5 h-3.5" /> Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Separador e Copyright */}
        <div className="relative mt-12 pt-6">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm font-light text-center md:text-left">
              © {currentYear} Urolaser — Especialidades Médicas. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground/70 text-xs font-light text-center md:text-right">
              Atendimento particular · Vitória da Conquista — BA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
