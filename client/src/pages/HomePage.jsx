import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { HeroVisual } from '../components/home/HeroVisual';
import { AboutSection } from '../components/home/AboutSection';
import { WhoWeBuildFor } from '../components/home/WhoWeBuildFor';
import { ServicesSection } from '../components/home/ServicesSection';
import { WhyVanguard } from '../components/home/WhyVanguard';
import { HowWeWork } from '../components/home/HowWeWork';
import { ConsultationSection } from '../components/home/ConsultationSection';
import { ContactSection } from '../components/home/ContactSection';
import { FAQSection } from '../components/home/FAQSection';

export const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Vanguard Digital | Modern Web Design & Development"
        description="We build digital experiences that move businesses forward. Modern, responsive and professional websites built for businesses, schools, cinemas and growing brands."
      />

      {/* SECTION 1 — HERO (Dark Obsidian) */}
      <section id="home" className="relative min-h-[92vh] flex items-center bg-obsidian text-warm-white pt-32 pb-20 overflow-hidden">
        {/* Subtle Top Atmospheric Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-radial-glow pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-7 flex flex-col"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-champagne/10 border border-champagne/25 w-fit">
                <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-champagne font-bold">
                  MODERN WEB DESIGN & DEVELOPMENT
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.12] tracking-tight text-warm-white mb-6 uppercase">
                WE BUILD DIGITAL EXPERIENCES THAT{' '}
                <span className="italic font-light text-champagne">
                  MOVE BUSINESSES FORWARD.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl mb-10">
                Modern, responsive and professional websites built for businesses, schools, cinemas and growing brands.
              </p>

              {/* Primary & Secondary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider hover:bg-champagne-light transition-all shadow-xl"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919998160726?text=Hi%20Vanguard%20Digital,%20I'd%20like%20to%20talk%20about%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-graphite/80 border border-champagne/30 text-champagne hover:bg-graphite hover:border-champagne text-xs font-mono uppercase tracking-wider font-bold transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk to Us</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="flex items-center gap-6 pt-8 mt-6 border-t border-white/5 text-xs text-text-muted font-mono">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage" />
                  <span>100% Tailored Layouts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage" />
                  <span>Mobile & Tablet First</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage" />
                  <span>Direct Developer Support</span>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Mockup Composition Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-5 relative"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT VANGUARD (Warm Ivory) */}
      <AboutSection />

      {/* SECTION 3 — WHO WE BUILD FOR (Dark Obsidian Deep) */}
      <WhoWeBuildFor />

      {/* SECTION 4 — SERVICES (Dark Obsidian) */}
      <ServicesSection />

      {/* SECTION 5 — WHY VANGUARD (Dark Obsidian Surface) */}
      <WhyVanguard />

      {/* SECTION 6 — OUR PROCESS (Warm Ivory) */}
      <HowWeWork />

      {/* SECTION 7 — FREE WEBSITE CONSULTATION (Dark Obsidian) */}
      <ConsultationSection />

      {/* SECTION 8 — CONTACT & ENQUIRY SECTION (Dark Obsidian Deep) */}
      <ContactSection />

      {/* SECTION 9 — FAQ (Warm Ivory Accordion) */}
      <FAQSection />
    </>
  );
};
