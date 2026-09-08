import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { VisionSection } from '../components/home/VisionSection';
import { WhatWeBuild } from '../components/home/WhatWeBuild';
import { IdeaToImpact } from '../components/home/IdeaToImpact';
import { PhilosophySection } from '../components/home/PhilosophySection';
import { ResearchSection } from '../components/home/ResearchSection';
import { TimelineSection } from '../components/home/TimelineSection';
import { CareersSection } from '../components/home/CareersSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Asteya | Building Technology for the Next Generation"
        description="Asteya is a technology company building products, platforms, and intelligent systems designed to solve meaningful problems and create lasting impact."
      />

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. VISION SECTION */}
      <VisionSection />

      {/* 3. WHAT WE BUILD */}
      <WhatWeBuild />

      {/* 4. FROM IDEA TO IMPACT */}
      <IdeaToImpact />

      {/* 5. PHILOSOPHY */}
      <PhilosophySection />

      {/* 6. RESEARCH & FUTURE */}
      <ResearchSection />

      {/* 7. LONG-TERM TIMELINE */}
      <TimelineSection />

      {/* 8. CAREERS */}
      <CareersSection />

      {/* 9. FINAL CLOSING CTA */}
      <FinalCTA />
    </>
  );
};
