import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { HeroVisual } from '../components/home/HeroVisual';
import { Positioning } from '../components/home/Positioning';
import { SolutionsGrid } from '../components/home/SolutionsGrid';
import { HowWeWork } from '../components/home/HowWeWork';
import { VenturesPreview } from '../components/home/VenturesPreview';
import { LongTermAbout } from '../components/home/LongTermAbout';
import { CTASection } from '../components/home/CTASection';

export const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Technology, Design & Digital Ventures"
        description="We create digital experiences and technology solutions for businesses, while developing our own products and ventures for the future."
      />

      {/* SECTION 1 — HERO (Dark Obsidian Background) */}
      <section className="relative min-h-[92vh] flex items-center bg-obsidian text-warm-white pt-28 pb-20 overflow-hidden">
        {/* Subtle Top Atmospheric Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-radial-glow pointer-events-none opacity-50" />

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
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <span className="text-xs font-mono tracking-[0.25em] uppercase text-champagne font-semibold">
                  TECHNOLOGY · DESIGN · DIGITAL
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal leading-[1.08] tracking-tight text-warm-white mb-8">
                We Build Digital. <br />
                We Build{' '}
                <span className="italic font-light text-champagne">
                  What's Next.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl mb-10">
                We create digital experiences and technology solutions for businesses, while developing our own products and ventures for the future.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  className="text-xs uppercase tracking-wider font-bold shadow-lg"
                >
                  Start a Project
                </Button>
                <Button
                  to="/solutions"
                  variant="outline"
                  size="lg"
                  className="text-xs uppercase tracking-wider font-semibold"
                >
                  Explore Solutions
                </Button>
              </div>
            </motion.div>

            {/* Right Tech Composition Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-5 relative"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — POSITIONING (Warm Ivory) */}
      <Positioning />

      {/* SECTION 3 — SOLUTIONS (Solutions That Drive Growth) */}
      <SolutionsGrid />

      {/* SECTION 4 — HOW WE WORK (Warm Ivory) */}
      <HowWeWork />

      {/* SECTION 5 — VENTURES (Dark Section, Secrecy Preserved) */}
      <VenturesPreview />

      {/* SECTION 6 — ABOUT (Built With A Long-Term Vision) */}
      <LongTermAbout />

      {/* SECTION 7 — CTA (Let's Build Something Useful.) */}
      <CTASection />
    </>
  );
};
