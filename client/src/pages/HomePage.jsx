import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { StatementSection } from '../components/home/StatementSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { ConnectedSystemSection } from '../components/home/ConnectedSystemSection';
import { AdvantageSection } from '../components/home/AdvantageSection';
import { VenturesSection } from '../components/home/VenturesSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { AboutSection } from '../components/home/AboutSection';
import { FinalCTA } from '../components/home/FinalCTA';
import { ProjectModal } from '../components/common/ProjectModal';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="ASTEYA | Digital Foundations for Ambitious Businesses"
        description="Asteya combines technology, design and business thinking to turn ideas into scalable digital experiences."
      />

      {/* HERO SECTION */}
      <HeroSection onOpenProjectModal={() => setIsModalOpen(true)} />

      {/* SECTION 01 — STATEMENT */}
      <StatementSection />

      {/* SECTION 02 — CAPABILITIES */}
      <CapabilitiesSection />

      {/* SECTION 03 — ASTEYA SYSTEM */}
      <ConnectedSystemSection />

      {/* SECTION 04 — HOW ASTEYA WORKS */}
      <AdvantageSection />

      {/* SECTION 05 — ASTEYA VENTURES */}
      <VenturesSection />

      {/* SECTION 07 — INDUSTRIES */}
      <IndustriesSection />

      {/* SECTION 08 — ABOUT */}
      <AboutSection />

      {/* SECTION 09 — FINAL CTA */}
      <FinalCTA onOpenProjectModal={() => setIsModalOpen(true)} />

      {/* Interactive Project Initiation Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
