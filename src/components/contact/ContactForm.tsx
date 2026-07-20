
import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "../ui/button";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // In a real application, you would send this data to your backend
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
    
    // Show success message
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="bg-card p-8 rounded-lg border border-white/10">
      <h3 className="text-2xl font-bold mb-6 text-white">ENVIE UMA MENSAGEM</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-1">
            NOME COMPLETO
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-md focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-colors text-white font-medium"
            required
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-1">
            EMPRESA
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-md focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-colors text-white"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              E-MAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-md focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-colors text-white"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              TELEFONE
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-md focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-colors text-white"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-1">
            MENSAGEM
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-md focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-colors resize-none text-white font-medium"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="flex items-center justify-center gap-2 w-full text-sm font-semibold bg-primary hover:bg-primary/90 text-blue-400 px-4 py-3 rounded-md transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          ENVIAR MENSAGEM
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
