
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  company: z.string().min(1, { message: "Nome da empresa é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" })
});

const LeadCaptureForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: ""
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // In a real app, you might want to log this data or send it to an API
    console.log(data);
    // Redirect to WhatsApp with pre-filled message
    window.open("https://wa.me/5577999311841?text=Ol%C3%A1!%20Estou%20no%20F%C3%B3rum%20de%20Neg%C3%B3cios%202025%20e%20quero%20garantir%20minha%20landing%20page%20gratuita.", "_blank");
  };

  return (
    <div className="bg-blue-900/20 border border-white/10 rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Garanta sua Landing Page Gratuita</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-200">Nome completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" className="bg-blue-900/20 border-white/10 text-white placeholder:text-gray-400" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-200">Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da sua empresa" className="bg-blue-900/20 border-white/10 text-white placeholder:text-gray-400" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-200">E-mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="seu@email.com" className="bg-blue-900/20 border-white/10 text-white placeholder:text-gray-400" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-200">Telefone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(00) 00000-0000" className="bg-blue-900/20 border-white/10 text-white placeholder:text-gray-400" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full py-6 text-lg bg-green-600 hover:bg-green-700"
          >
            Quero minha página grátis
          </Button>
        </form>
      </Form>
      
      <p className="mt-3 text-sm text-gray-400 text-center">
        Ao clicar, você será redirecionado ao WhatsApp para finalizar seu cadastro.
      </p>
    </div>
  );
};

export default LeadCaptureForm;
