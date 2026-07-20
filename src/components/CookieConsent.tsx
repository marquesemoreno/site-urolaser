import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        const savedPreferences = JSON.parse(cookieConsent);
        setCookiePreferences(savedPreferences);
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    saveCookiePreferences(allAccepted);
    toast({
      title: "Preferências de cookies salvas",
      description: "Você aceitou todos os cookies."
    });
  };

  const handleRejectNonEssential = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    saveCookiePreferences(onlyNecessary);
    toast({
      title: "Preferências de cookies salvas",
      description: "Apenas cookies necessários serão utilizados."
    });
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(cookiePreferences);
    toast({
      title: "Preferências de cookies salvas",
      description: "Suas preferências de cookies foram atualizadas."
    });
  };

  const saveCookiePreferences = (preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
    applyConsentSettings(preferences);
  };

  const applyConsentSettings = (settings) => {
    if (settings.analytics) console.log('Analytics cookies enabled');
    if (settings.marketing) console.log('Marketing cookies enabled');
  };

  const togglePreferencesView = () => setShowPreferences(!showPreferences);

  if (!showBanner) return null;

  return (
    <div className="pointer-events-none sticky bottom-0 left-0 right-0 z-40 p-4 md:p-6">
      <div className="container mx-auto max-w-4xl pointer-events-auto">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-border bg-white p-5 shadow-lg">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <p className="text-sm md:text-base text-foreground/85">
                Usamos cookies para melhorar sua experiência. Cookies necessários são essenciais; os demais
                são opcionais. Ao clicar em <span className="font-semibold text-foreground">“Aceitar”</span>, você
                consente com o uso conforme nossa{' '}
                <Link to="/politica-de-cookies" className="font-semibold text-primary hover:underline">
                  Política de Cookies
                </Link>. Você pode revogar a qualquer momento.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <Button variant="outline" size="sm" onClick={handleRejectNonEssential} className="border-border bg-white text-foreground hover:bg-muted w-full md:w-auto">
                Recusar
              </Button>
              <Button size="sm" onClick={togglePreferencesView} className="border border-border bg-white text-foreground hover:bg-muted w-full md:w-auto">
                <Settings className="mr-2 h-4 w-4" /> Preferências
              </Button>
              <Button size="sm" onClick={handleAcceptAll} className="btn-brand w-full md:w-auto">
                Aceitar
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative rounded-2xl border border-border bg-white p-6 shadow-lg">
            <button className="absolute right-3 top-3 p-1 text-muted-foreground hover:text-foreground" onClick={() => setShowPreferences(false)} aria-label="Fechar preferências de cookies">
              <X className="h-5 w-5" />
            </button>

            <div className="pt-2">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Configurar preferências de cookies</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Escolha quais tipos de cookies deseja aceitar. A escolha é válida por 180 dias e pode ser
                revogada a qualquer momento em nossa{' '}
                <Link to="/politica-de-cookies" className="font-semibold text-primary hover:underline">Política de Cookies</Link>.
              </p>

              <div className="mb-4 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-border bg-muted/50 p-3">
                  <div>
                    <p className="font-medium text-foreground">Cookies Necessários</p>
                    <p className="text-xs text-muted-foreground">Essenciais para a navegação básica do site.</p>
                  </div>
                  <div className="rounded bg-primary/10 px-2 py-1 text-xs text-primary">Sempre ativo</div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-border bg-white p-3">
                  <div>
                    <p className="font-medium text-foreground">Cookies Analíticos</p>
                    <p className="text-xs text-muted-foreground">Nos ajudam a entender como você usa o site.</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" checked={cookiePreferences.analytics} onChange={(e) => setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })} className="sr-only peer" />
                    <div className="h-6 w-11 rounded-full bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-border after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-border bg-white p-3">
                  <div>
                    <p className="font-medium text-foreground">Cookies de Marketing</p>
                    <p className="text-xs text-muted-foreground">Permitem personalização de anúncios e integrações.</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" checked={cookiePreferences.marketing} onChange={(e) => setCookiePreferences({ ...cookiePreferences, marketing: e.target.checked })} className="sr-only peer" />
                    <div className="h-6 w-11 rounded-full bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-border after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <Button variant="outline" size="sm" onClick={() => setShowPreferences(false)} className="border-border bg-white text-foreground hover:bg-muted">Cancelar</Button>
                <Button size="sm" onClick={handleSavePreferences} className="btn-brand">Salvar preferências</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
