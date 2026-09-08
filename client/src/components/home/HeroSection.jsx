import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-cream pt-32 pb-20 overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Headline & Message */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-forest-subtle border border-forest/10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-forest font-semibold">
                Technology & Systems Company
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-charcoal leading-[1.12] mb-6">
              Building technology for the{' '}
              <span className="text-forest underline decoration-forest/30 underline-offset-8">
                next generation.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-xl mb-10 font-sans font-normal">
              Asteya is a technology company building products, platforms, and intelligent systems designed to solve meaningful problems and create lasting impact.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#vision"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-forest text-cream font-sans font-semibold text-xs tracking-wide hover:bg-forest-light transition-all shadow-subtle"
              >
                <span>Explore Our Vision</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#build"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-cream-surface border border-cream-border text-charcoal font-sans font-semibold text-xs tracking-wide hover:bg-white hover:border-forest/30 transition-all"
              >
                <span>See What We Build</span>
              </a>
            </div>

            {/* Credibility & Tenet Bar */}
            <div className="flex items-center gap-8 pt-10 mt-10 border-t border-cream-border/70 text-xs text-charcoal-muted font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                <span>Long-Term Horizon</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                <span>Deep Technology</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                <span>Human-Centric Impact</span>
              </div>
            </div>
          </motion.div>

          {/* Right Abstract Technological Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
