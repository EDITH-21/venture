import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { WhoWeAreSection } from '../components/home/WhoWeAreSection';
import { IdeaToImpactSection } from '../components/home/IdeaToImpactSection';
import { EcosystemSection } from '../components/home/EcosystemSection';
import { VenturesSection } from '../components/home/VenturesSection';
import { PhilosophySection } from '../components/home/PhilosophySection';
import { FinalCTA } from '../components/home/FinalCTA';
import { ProjectModal } from '../components/common/ProjectModal';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="ASTEYA | Building What Comes Next"
        description="ASTEYA is a technology and innovation company building digital products, services and ventures for the next generation."
      />

      {/* 1. HERO SECTION */}
      <HeroSection onOpenProjectModal={() => setIsModalOpen(true)} />

      {/* 2. WHO WE ARE */}
      <WhoWeAreSection />

      {/* 3. WHAT WE BUILD ("FROM IDEA TO IMPACT") */}
      <IdeaToImpactSection />

      {/* 4. ASTEYA ECOSYSTEM ("A STRONGER TOMORROW, TOGETHER.") */}
      <EcosystemSection />

      {/* 5. OUR VENTURES ("IDEAS WE'RE TURNING INTO REALITY.") */}
      <VenturesSection />

      {/* 6. TECHNOLOGY & PHILOSOPHY ("THINK DIFFERENT. BUILD INTELLIGENTLY. MOVE FORWARD.") */}
      <PhilosophySection />

      {/* 7. PRE-FOOTER BANNER CTA ("HAVE AN IDEA WORTH BUILDING?") */}
      <FinalCTA onOpenProjectModal={() => setIsModalOpen(true)} />

      {/* Interactive Project Initiation Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
