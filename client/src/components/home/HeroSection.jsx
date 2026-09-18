import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mouse } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

export const HeroSection = ({ onOpenProjectModal }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-cosmic-bg text-white pt-32 pb-20 overflow-hidden bg-cosmic-stars">
      {/* Top Right Subtle Vertical Pillar Breadcrumbs */}
      <div className="hidden lg:block absolute top-28 right-12 z-20 text-[10px] font-mono text-cosmic-subtle tracking-[0.25em] text-right leading-loose select-none opacity-60">
        <div>IDEAS</div>
        <div>TECHNOLOGY</div>
        <div>VENTURES</div>
        <div>IMPACT</div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Category Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-glow uppercase">
                INNOVATION / TECHNOLOGY / VENTURES
              </span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.05] mb-6">
              BUILDING<br />
              <span className="gradient-text-purple-cyan">
                WHAT COMES NEXT.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-cosmic-muted leading-relaxed max-w-lg mb-10 font-sans">
              ASTEYA is a technology and innovation company building digital products, services and ventures for the next generation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenProjectModal}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet via-indigo to-cyan hover:from-violet-light hover:to-cyan-glow text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-cosmic-glow hover:scale-105 active:scale-95"
              >
                <span>Explore Asteya</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#ventures"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono font-semibold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
              >
                <span>Our Ventures</span>
              </a>
            </div>

            {/* Bottom Mouse Scroll to Explore Indicator */}
            <div className="flex items-center gap-3 pt-16 mt-4 text-[10px] font-mono text-cosmic-subtle tracking-[0.2em] uppercase">
              <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1 h-2 rounded-full bg-cyan"
                />
              </div>
              <span>SCROLL TO EXPLORE</span>
            </div>
          </motion.div>

          {/* Right 3D Cosmic Planetary Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
