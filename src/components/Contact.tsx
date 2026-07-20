import React, { useState } from "react";
import { MessageSquare, Mail, Phone, MapPin, Send, Instagram, Clock } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="relative overflow-hidden py-20 pb-28">
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="container mx-auto">
        <div className="text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium text-primary mb-4">
            Fale com a gente
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground tracking-tight font-display">
            Agende sua <span className="text-primary">consulta</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light">
            Tire dúvidas ou marque seu atendimento. Atendimento particular, com acolhimento e tecnologia a laser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário — campos HTML nativos mais altos (restrição de layout) */}
          <div className="relative rounded-3xl border border-border bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2 font-display">
              <Send className="h-5 w-5 text-primary" /> Envie uma mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nome completo</label>
                <input
                  id="name" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                  <input
                    id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                    placeholder="voce@email.com"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
                  <input
                    id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                    placeholder="(77) 99999-9999"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary min-h-[120px]"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send className="h-4 w-4" /> {sent ? "Mensagem enviada!" : "Enviar mensagem"}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground font-display">Informações de contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">Av. Otávio Santos, 395, Sala 202 — Recreio, Vitória da Conquista/BA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary"><Mail className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">E-mail</h4>
                    <a href="mailto:urolaservca@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">urolaservca@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Phone className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Telefone</h4>
                    <a href="tel:7734277267" className="text-muted-foreground hover:text-primary transition-colors">(77) 3427-7267 · (77) 99925-7550</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary"><Clock className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Horário</h4>
                    <p className="text-muted-foreground">Seg a Sex: 07h–12h e 14h–18h · Sábado: 07h–12h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Instagram className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Instagram</h4>
                    <a href="https://www.instagram.com/urolaser.vca" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">@urolaser.vca</a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5577999257550"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand mt-10 w-full"
            >
              <MessageSquare className="h-5 w-5" /> Agendar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
