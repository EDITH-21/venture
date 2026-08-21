import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { HeroVisual } from '../components/home/HeroVisual';
import { Positioning } from '../components/home/Positioning';
import { SolutionsGrid } from '../components/home/SolutionsGrid';
import { WhyVanguard } from '../components/home/WhyVanguard';
import { HowWeWork } from '../components/home/HowWeWork';
import { AIConsultantSection } from '../components/home/AIConsultantSection';
import { PricingSection } from '../components/home/PricingSection';
import { TechShowcase } from '../components/home/TechShowcase';
import { FAQSection } from '../components/home/FAQSection';
import { CTASection } from '../components/home/CTASection';

export const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Vanguard Digital | Web Development & Digital Solutions"
        description="We build digital experiences that move businesses forward. Custom websites, high-performance web applications, e-commerce platforms, and tailored digital solutions."
      />

      {/* SECTION 1 — HERO (Dark Obsidian) */}
      <section className="relative min-h-[92vh] flex items-center bg-obsidian text-warm-white pt-32 pb-20 overflow-hidden">
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
                  WEB DEVELOPMENT & DIGITAL ENGINEERING
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.12] tracking-tight text-warm-white mb-6">
                We Build Digital Experiences That{' '}
                <span className="italic font-light text-champagne">
                  Move Businesses Forward.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl mb-10">
                Websites, web applications, e-commerce platforms and custom digital solutions designed around your business to help you look better, work smarter, and grow faster.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  to="/start-project"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  className="text-xs uppercase tracking-wider font-bold shadow-xl"
                >
                  Start a Project
                </Button>
                <Button
                  to="/work"
                  variant="outline"
                  size="lg"
                  className="text-xs uppercase tracking-wider font-semibold"
                >
                  View Our Work
                </Button>
                <a
                  href="https://wa.me/919998160726?text=Hi%20Vanguard%20Digital,%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-graphite/80 border border-champagne/30 text-champagne hover:bg-graphite hover:border-champagne text-xs font-mono uppercase tracking-wider font-bold transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="flex items-center gap-6 pt-8 mt-4 border-t border-white/5 text-xs text-text-muted font-mono">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage" />
                  <span>100% Custom Engineering</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage" />
                  <span>Sub-Second Performance</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage" />
                  <span>Direct Support</span>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Mockup Composition Column */}
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

      {/* SECTION 3 — 4 CORE SOLUTIONS (Dark Obsidian) */}
      <SolutionsGrid />

      {/* SECTION 4 — WHY VANGUARD? (Dark Obsidian Deep) */}
      <WhyVanguard />

      {/* SECTION 5 — HOW WE WORK (Warm Ivory 6-Step Execution) */}
      <HowWeWork />

      {/* SECTION 6 — VANGUARD AI CONSULTANT (Interactive Diagnostic Engine) */}
      <AIConsultantSection />

      {/* SECTION 7 — PRICING & STARTING PACKAGES (Dark Obsidian) */}
      <PricingSection />

      {/* SECTION 8 — TECHNOLOGY SHOWCASE (Categorized Stacks) */}
      <TechShowcase />

      {/* SECTION 9 — FAQ (Warm Ivory Accordion) */}
      <FAQSection />

      {/* SECTION 10 — CTA (Initiate Collaboration) */}
      <CTASection />
    </>
  );
};
