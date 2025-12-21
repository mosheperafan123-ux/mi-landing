import React, { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';

import { Features } from './components/sections/Features';
import { HeroMetrics } from './components/sections/metrics/HeroMetrics';
import { HowItWorks } from './components/sections/HowItWorks';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { Modal } from './components/ui/Modal';
import { RoiCalculator } from './components/interactive/RoiCalculator';
import { StickyCta } from './components/interactive/StickyCta';
import { LegalContent } from './components/ui/LegalContent';
import { AboutUs } from './components/sections/AboutUs';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout onOpenLegal={setLegalType}>
      <Hero />

      <Features />
      <HeroMetrics />
      <HowItWorks />
      <Testimonials />
      <AboutUs />
      <Pricing />

      <StickyCta />

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Calculadora de Ingresos">
        <RoiCalculator />
      </Modal>

      <Modal isOpen={legalType !== null} onClose={() => setLegalType(null)} title={legalType === 'privacy' ? 'Política de Privacidad' : 'Términos y Condiciones'}>
        {legalType && <LegalContent type={legalType} />}
      </Modal>
    </Layout>
  );
}

export default App;
