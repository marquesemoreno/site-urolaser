
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSeoEffect } from '@/hooks/useSeoEffect';
import { Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  useSeoEffect({
    title: "Política de Privacidade - Urolaser",
    description: "Política de privacidade atualizada em conformidade com a LGPD e com as Políticas de Desenvolvedores da Meta Platforms para proteção de dados."
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Política de Privacidade</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Atualizada em conformidade com a LGPD (Lei nº 13.709/2018) e com as Políticas de Desenvolvedores da Meta Platforms
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead mb-8">
              Na Urolaser, a privacidade e a segurança dos seus dados são prioridade. Esta Política de Privacidade explica de forma clara como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a LGPD e com as exigências da Meta Platforms para aplicativos, APIs e integrações (incluindo Facebook, Instagram e WhatsApp Business API).
              Ao utilizar nossos serviços ou acessar nossos canais digitais, você concorda com os termos desta política.
            </p>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">1. Quais Dados Coletamos</h2>
              
              <h3 className="text-xl font-semibold mb-2">Dados Pessoais</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Nome, e-mail, telefone, endereço</li>
                <li>Cargo, empresa, setor</li>
                <li>IP, logs de acesso, tipo de dispositivo</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2">Dados Técnicos e Operacionais</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Logs de sistemas, redes, backups, status de servidores</li>
                <li>Imagens e vídeos de câmeras de segurança (em nuvem ou monitoramento remoto)</li>
                <li>Histórico de chamados e atendimentos</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2">Dados de Integrações com Plataformas da Meta</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Identificadores de conta (ex.: número de telefone do WhatsApp, ID do Messenger, Instagram username)</li>
                <li>Mensagens trocadas via integrações autorizadas (somente conteúdo necessário para atendimento, nunca armazenado além do prazo técnico)</li>
                <li>Dados analíticos e métricas fornecidas pela Meta, quando aplicável</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2">Dados de Pagamento</h3>
              <ul className="list-disc pl-6">
                <li>Razão Social, CNPJ, dados bancários (para faturamento)</li>
                <li>Não armazenamos dados de cartões de crédito. Utilizamos plataformas seguras como PagSeguro, Mercado Pago e instituições bancárias.</li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">2. Como Utilizamos Seus Dados</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-gray-800 p-3 text-left">Finalidade</th>
                      <th className="border border-gray-800 p-3 text-left">Base Legal (LGPD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-800 p-3">Prestação de serviços de TI, suporte, monitoramento, instalações</td>
                      <td className="border border-gray-800 p-3">Execução de contrato</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-800 p-3">Cobrança, faturamento e obrigações fiscais</td>
                      <td className="border border-gray-800 p-3">Obrigação legal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-800 p-3">Envio de comunicações, mensagens automatizadas e notificações via WhatsApp/Facebook/Instagram</td>
                      <td className="border border-gray-800 p-3">Consentimento (opcional)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-800 p-3">Melhoria de serviços, segurança e atendimento</td>
                      <td className="border border-gray-800 p-3">Legítimo interesse</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-800 p-3">Cumprimento de exigências judiciais ou legais</td>
                      <td className="border border-gray-800 p-3">Obrigação legal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. Compartilhamento de Dados</h2>
              <p className="mb-4">Seus dados nunca serão vendidos ou alugados.</p>
              <p className="mb-4">Podemos compartilhar apenas com:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Parceiros técnicos confiáveis (Microsoft, Google Cloud, Meta Platforms) para operação e integração de serviços;</li>
                <li>Autoridades públicas, mediante obrigação legal;</li>
                <li>Empresas do grupo, para fins administrativos internos.</li>
              </ul>
              <p>As integrações com plataformas da Meta seguem as Políticas de Desenvolvedores da Meta, e nenhum dado é compartilhado além do estritamente necessário para execução dos serviços.</p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">4. Armazenamento e Segurança dos Dados</h2>
              <ul className="list-disc pl-6">
                <li>Ambientes seguros em nuvem, com criptografia e controles de acesso;</li>
                <li>Backups protegidos conforme políticas de retenção (de 30 a 365 dias, conforme contratado);</li>
                <li>Exclusão segura dos dados após encerramento do contrato, salvo obrigações legais específicas;</li>
                <li>Mensagens e dados obtidos via APIs da Meta são retidos apenas enquanto necessários para o atendimento e depois são descartados.</li>
              </ul>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">5. Direitos do Titular de Dados</h2>
              <p className="mb-4">Você pode solicitar a qualquer momento:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Acesso e confirmação de dados tratados;</li>
                <li>Correção ou atualização de informações;</li>
                <li>Portabilidade dos dados;</li>
                <li>Exclusão de dados (quando aplicável);</li>
                <li>Revogação do consentimento.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2">Como exercer seus direitos:</h3>
              <p>Envie um e-mail para: <a href="mailto:urolaservca@gmail.com" className="text-primary hover:underline">urolaservca@gmail.com</a></p>
              <p>Assunto: "LGPD - Solicitação de Dados"</p>
              <p>Prazo de resposta: até 15 dias úteis.</p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">6. Cookies e Tecnologias Semelhantes</h2>
              <p className="mb-4">Nosso site utiliza cookies para:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Melhorar sua experiência de navegação;</li>
                <li>Coletar estatísticas (Google Analytics, Meta Pixel).</li>
              </ul>
              <p>Você pode gerenciar as permissões de cookies diretamente em seu navegador.</p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">7. Exclusão de Dados via Aplicativos da Meta</h2>
              <p className="mb-4">
                Se você usou um aplicativo, integração ou chatbot da Urolaser via Facebook, Instagram ou WhatsApp, e deseja excluir seus dados, envie uma solicitação para:
              </p>
              <p className="mb-2">📧 <a href="mailto:urolaservca@gmail.com" className="text-primary hover:underline">urolaservca@gmail.com</a></p>
              <p className="mb-4">Assunto: "Exclusão de Dados – Aplicativo Meta"</p>
              <p>Seu pedido será atendido conforme as regras da Meta Platforms e da LGPD.</p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">8. Atualizações desta Política</h2>
              <p>Esta política poderá ser atualizada a qualquer momento e estará sempre disponível em:</p>
              <p>🔗 <a href="https://urolaser.tivdc.com.br/politica-de-privacidade" className="text-primary hover:underline">https://urolaser.tivdc.com.br/politica-de-privacidade</a></p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
              <p>Encarregado de Dados (DPO): Lucas Marques Moreno</p>
              <p>📞 <a href="tel:+5577999708403" className="text-primary hover:underline">(77) 99970-8403</a></p>
              <p>🌐 <a href="https://urolaser.tivdc.com.br" className="text-primary hover:underline">https://urolaser.tivdc.com.br</a></p>
              <p className="mt-4"><strong>Última atualização: 11/11/2025</strong></p>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Anexo: Serviços da Urolaser e Tratamento de Dados</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-gray-800 p-3 text-left">Serviço</th>
                      <th className="border border-gray-800 p-3 text-left">Dados Tratados</th>
                      <th className="border border-gray-800 p-3 text-left">Proteção Aplicada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-800 p-3">Suporte e Helpdesk</td>
                      <td className="border border-gray-800 p-3">Contato, logs de sistema</td>
                      <td className="border border-gray-800 p-3">Criptografia, acesso restrito</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-800 p-3">Infraestrutura de TI</td>
                      <td className="border border-gray-800 p-3">Dados de rede, servidores</td>
                      <td className="border border-gray-800 p-3">Firewalls, monitoramento</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-800 p-3">Backup em Nuvem</td>
                      <td className="border border-gray-800 p-3">Arquivos empresariais</td>
                      <td className="border border-gray-800 p-3">Criptografia end-to-end</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-800 p-3">Chatbots e Integrações Meta</td>
                      <td className="border border-gray-800 p-3">Mensagens, identificadores</td>
                      <td className="border border-gray-800 p-3">Retenção mínima e exclusão automática</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <div className="flex items-center gap-2 mt-12 p-6 bg-secondary/20 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
              <p className="font-medium">Na Urolaser, protegemos seus dados com o mesmo cuidado e eficiência com que cuidamos da sua TI.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
