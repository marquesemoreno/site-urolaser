
import React from 'react';
import { useSeoEffect } from '@/hooks/useSeoEffect';
import TopBanner from '@/components/landing/TopBanner';
import LandingHero from '@/components/landing/LandingHero';
import BenefitsSection from '@/components/landing/BenefitsSection';
import LeadCaptureForm from '@/components/landing/LeadCaptureForm';
import ActionButtons from '@/components/landing/ActionButtons';
import LandingFooter from '@/components/landing/LandingFooter';

const LandingPage = () => {
  useSeoEffect({
    title: "Ganhe uma Landing Page Grátis no Fórum de Negócios 2025 | TIVDC",
    description: "Participe do Fórum de Negócios 2025 e ganhe uma landing page gratuita. Promoção exclusiva da TIVDC!"
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Banner */}
      <TopBanner />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <LandingHero />

          {/* Benefits */}
          <BenefitsSection />

          {/* Form Section */}
          <LeadCaptureForm />

          {/* Additional Action Buttons */}
          <ActionButtons />
        </div>
      </div>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
