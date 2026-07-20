import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Activity } from "lucide-react";

const navLinks = [
  { label: "INÍCIO", to: "/" },
  { label: "ESPECIALIDADES", to: "/#especialidades" },
  { label: "TRATAMENTOS", to: "/#tratamentos" },
  { label: "EQUIPE", to: "/#equipe" },
  { label: "SOBRE", to: "/#sobre" },
  { label: "CONTATO", to: "/#contato" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderLink = (link: { label: string; to?: string; href?: string }, onClick?: () => void) => (
    <Link to={link.to ?? link.href ?? "/"} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200" onClick={onClick}>
      {link.label}
    </Link>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 font-display ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo oficial Urolaser (wordmark petróleo #016179, fundo transparente) */}
            <img
              src="/logo-urolaser.png"
              alt="Urolaser — Especialidades Médicas"
              className="h-12 w-auto transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>{renderLink(link)}</React.Fragment>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-foreground focus:outline-none rounded-lg p-2 border border-border bg-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden absolute left-0 right-0 bg-white border-b border-border transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          } top-full`}
        >
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <React.Fragment key={link.label}>{renderLink(link, () => setIsMenuOpen(false))}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
