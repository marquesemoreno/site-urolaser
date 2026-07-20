import React from "react";
import { Instagram, MapPin, Phone, Mail, Activity, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-background px-6 md:px-12 lg:px-24 pt-16 pb-10">
      {/* Ambient gradient + glow discreto (paleta ciano/violeta) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Clínica */}
          <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md sm:items-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 ring-2 ring-cyan-400/40 shadow-[0_0_18px_rgba(34,211,238,0.45)]">
                <Activity className="h-6 w-6 text-white" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">URO<span className="text-cyan-300">LASER</span></h2>
                <p className="text-sm text-white/70">Especialidades Médicas</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed text-center sm:text-left">
              Urologia avançada, ginecologia, proctologia e muito mais — com tecnologia a laser e atendimento humanizado.
            </p>
          </div>

          {/* Coluna 2: Endereço */}
          <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md sm:items-start">
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.45)]">
                <MapPin className="w-4 h-4" />
              </span>
              ONDE ESTAMOS
            </h3>
            <p className="text-white/70 text-sm leading-relaxed text-center sm:text-left">
              Av. Otávio Santos, 395, Sala 202 — Centro Médico Dr. Altamirando da Costa Lima, 2º andar — Recreio
              <strong className="text-white block mt-1">Vitória da Conquista — BA</strong>
            </p>
          </div>

          {/* Coluna 3: Contato */}
          <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md sm:items-start">
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15 text-violet-300 shadow-[0_0_14px_rgba(139,92,246,0.45)]">
                <Phone className="w-4 h-4" />
              </span>
              CONTATO
            </h3>
            <div className="flex flex-col gap-3 text-center sm:text-left">
              <a
                href="https://wa.me/5577999257550"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 justify-center sm:justify-start"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                (77) 99925-7550
              </a>
              <a
                href="tel:7734277267"
                className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 justify-center sm:justify-start"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                (77) 3427-7267
              </a>
              <a
                href="mailto:urolaservca@gmail.com"
                className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 justify-center sm:justify-start"
              >
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                urolaservca@gmail.com
              </a>
            </div>
          </div>

          {/* Coluna 4: Redes e Links */}
          <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md sm:items-start">
            <h3 className="text-base font-semibold mb-4 text-white">REDES SOCIAIS</h3>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.instagram.com/urolaser.vca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Urolaser"
                className="group bg-white/5 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-violet-500 p-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.6)]"
              >
                <Instagram className="w-5 h-5 text-white/80 group-hover:text-white" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Urolaser+Especialidades+Médicas+Vitória+da+Conquista+BA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Localização no Google Maps"
                className="group bg-white/5 hover:bg-gradient-to-br hover:from-violet-600 hover:to-cyan-500 p-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_18px_rgba(139,92,246,0.6)]"
              >
                <MapPin className="w-5 h-5 text-white/80 group-hover:text-white" />
              </a>
            </div>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <Link
                to="/politica-de-privacidade"
                className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 justify-center sm:justify-start"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Política de Privacidade
              </Link>
              <Link
                to="/politica-de-cookies"
                className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 justify-center sm:justify-start"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Separador e Copyright */}
        <div className="relative mt-12 pt-6">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-light text-center md:text-left">
              © {currentYear} Urolaser — Especialidades Médicas. Todos os direitos reservados.
            </p>
            <p className="text-white/40 text-xs font-light text-center md:text-right">
              Atendimento particular · Vitória da Conquista — BA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
