import React, { useState } from "react";
import { MessageSquare, Mail, Phone, MapPin, Send, Instagram, Clock } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="relative overflow-hidden container-padding">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-cyan-600/15 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="text-center">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200 mb-4">
            Fale com a gente
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            Agende sua <span className="text-cyan-300">consulta</span>
          </h2>
          <p className="text-xl text-white/80 mb-16 max-w-3xl mx-auto font-medium">
            Tire dúvidas ou marque seu atendimento. Atendimento particular, com acolhimento e tecnologia a laser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <div className="relative">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <Send className="h-5 w-5 text-cyan-300" />
                ENVIE UMA MENSAGEM
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <fluent-text-field
                  name="name"
                  value={formData.name}
                  onInput={handleChange}
                  placeholder="Seu nome"
                  appearance="filled"
                  style={{ width: "100%" }}
                >
                  NOME COMPLETO
                </fluent-text-field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <fluent-text-field
                    name="email"
                    type="email"
                    value={formData.email}
                    onInput={handleChange}
                    placeholder="voce@email.com"
                    appearance="filled"
                    style={{ width: "100%" }}
                  >
                    E-MAIL
                  </fluent-text-field>

                  <fluent-text-field
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onInput={handleChange}
                    placeholder="(77) 99999-9999"
                    appearance="filled"
                    style={{ width: "100%" }}
                  >
                    TELEFONE
                  </fluent-text-field>
                </div>

                <fluent-text-area
                  name="message"
                  value={formData.message}
                  onInput={handleChange}
                  placeholder="Como podemos ajudar?"
                  appearance="filled"
                  style={{ width: "100%", minHeight: "120px" }}
                >
                  MENSAGEM
                </fluent-text-area>

                <fluent-button
                  type="submit"
                  appearance="accent"
                  style={{ width: "100%", marginTop: "8px" }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <Send style={{ width: "16px", height: "16px" }} />
                    {sent ? "MENSAGEM ENVIADA!" : "ENVIAR MENSAGEM"}
                  </span>
                </fluent-button>
              </form>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">INFORMAÇÕES DE CONTATO</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.45)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">ENDEREÇO</h4>
                    <p className="text-white/80">Av. Otávio Santos, 395, Sala 202 — Recreio, Vitória da Conquista/BA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 shadow-[0_0_16px_rgba(139,92,246,0.45)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">E-MAIL</h4>
                    <a href="mailto:urolaservca@gmail.com" className="text-white/80 hover:text-white transition-colors">
                      urolaservca@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.45)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">TELEFONE</h4>
                    <a href="tel:7734277267" className="text-white/80 hover:text-white transition-colors">
                      (77) 3427-7267 · (77) 99925-7550
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 shadow-[0_0_16px_rgba(139,92,246,0.45)]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">HORÁRIO</h4>
                    <p className="text-white/80">Seg a Sex: 07h–12h e 14h–18h · Sábado: 07h–12h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.45)]">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">INSTAGRAM</h4>
                    <a href="https://www.instagram.com/urolaser.vca" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                      @urolaser.vca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5577999257550"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:from-emerald-500 hover:to-green-400 hover:shadow-[0_0_45px_rgba(16,185,129,0.7)]"
            >
              <MessageSquare className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              AGENDAR NO WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
