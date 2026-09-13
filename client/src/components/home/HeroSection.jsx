import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

export const HeroSection = ({ onOpenProjectModal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center bg-white pt-28 sm:pt-32 pb-20 overflow-hidden bg-grid-pattern border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-800 uppercase">
                ASTEYA / DIGITAL TECHNOLOGY COMPANY
              </span>
            </div>

            {/* Massive Bold Headline matching blueprint */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.04] mb-6">
              BUILD WHAT'S<br />
              <span className="text-slate-900">NEXT.</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-slate-900 mb-3 tracking-tight">
              Digital foundations for ambitious businesses.
            </h2>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mb-8 font-sans">
              Asteya combines technology, design and business thinking to turn ideas into scalable digital experiences.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenProjectModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-slate-900 hover:bg-black text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-mono font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <span>EXPLORE ASTEYA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Isometric 3D Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
