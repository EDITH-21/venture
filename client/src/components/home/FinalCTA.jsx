import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export const FinalCTA = ({ onOpenProjectModal }) => {
  return (
    <section id="cta" className="bg-cosmic-bg py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Mountain Vista Cosmic Banner Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-cosmic-card via-indigo-950/80 to-cosmic-bg p-10 sm:p-14 lg:p-16 shadow-[0_0_80px_rgba(139,92,246,0.25)]">
          {/* Subtle Cosmic Background Overlay */}
          <div className="absolute inset-0 bg-cosmic-stars opacity-60 pointer-events-none" />
          <div className="absolute -bottom-10 right-10 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -top-10 left-10 w-80 h-80 bg-cyan-600/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white leading-[1.12]">
                HAVE AN IDEA<br />
                <span className="gradient-text-purple-cyan">
                  WORTH BUILDING?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-cosmic-muted font-sans leading-relaxed">
                Let's turn possibilities into something real. Tell us what you're building.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenProjectModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all border border-white/25 shadow-lg backdrop-blur-md hover:scale-105 active:scale-95"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919998160726?text=Hi%20Asteya,%20I'd%20like%20to%20start%20a%20conversation%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-900/60 transition-colors backdrop-blur-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
