import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export const FinalCTA = ({ onOpenProjectModal }) => {
  return (
    <section id="cta" className="bg-darkness text-white py-28 sm:py-40 relative overflow-hidden bg-dark-grid">
      {/* Glowing Fluid Neon Energy Wave Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[800px] h-[350px] bg-gradient-to-r from-blue-600/30 via-sky-400/20 to-purple-600/30 rounded-full blur-[100px] animate-pulse-glow" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
            SECTION 09 — FINAL CTA
          </span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.08] mb-6">
          READY TO BUILD WHAT'S NEXT?
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
          Tell us what you're building. We'll help turn the idea into a digital reality.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenProjectModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/919998160726?text=Hi%20Asteya,%20I'd%20like%20to%20discuss%20a%20new%20digital%20venture."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all"
          >
            <MessageSquare className="w-4 h-4 text-sky-400" />
            <span>TALK TO ASTEYA</span>
          </a>
        </div>
      </div>
    </section>
  );
};
