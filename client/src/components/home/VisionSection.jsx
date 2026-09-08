import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Layers } from 'lucide-react';

export const VisionSection = () => {
  return (
    <section id="vision" className="bg-cream-surface py-28 sm:py-36 relative border-t border-cream-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Large Statement */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-forest font-bold block mb-4">
              Strategic Vision
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-charcoal leading-[1.18] tracking-tight mb-8">
              We don’t build for today.{' '}
              <span className="text-forest block mt-1">
                We build for what’s next.
              </span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans max-w-2xl">
              <p>
                Most technology is built for immediate cycles—optimized for quarterly metrics rather than enduring value. At Asteya, we operate on a multi-decade horizon. We engineer foundational software, intelligent workflows, and reliable architectures that solve fundamental problems.
              </p>
              <p className="text-sm sm:text-base text-charcoal/80">
                By uniting thoughtful product design with advanced systems engineering, we ensure that every platform we launch elevates human capability and withstands the test of time.
              </p>
            </div>
          </div>

          {/* Right Elegant Monolithic Vision Card / Architecture */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-cream-border rounded-2xl p-8 sm:p-10 shadow-card relative overflow-hidden">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-cream-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-forest-subtle flex items-center justify-center text-forest">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-charcoal uppercase tracking-wider">
                    Horizon Principle
                  </span>
                </div>
                <span className="text-[11px] font-mono text-forest bg-forest-subtle px-2.5 py-1 rounded-md font-semibold">
                  2026 → 2035+
                </span>
              </div>

              {/* Central Large Metric / Thought */}
              <div className="space-y-4">
                <div className="text-5xl sm:text-6xl font-sans font-black text-charcoal tracking-tight">
                  10<span className="text-forest text-4xl">x</span>
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-charcoal-muted">
                  Long-Term Value Multiplier
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed pt-2">
                  Every product, protocol, and intelligent workflow is designed from day zero to be durable, modular, and compounding in societal impact.
                </p>
              </div>

              {/* Grounding Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-cream-border text-xs font-mono">
                <div className="p-3 bg-cream rounded-lg border border-cream-border">
                  <span className="text-forest font-bold block mb-0.5">Foundational</span>
                  <span className="text-[11px] text-charcoal-muted">No superficial layers</span>
                </div>
                <div className="p-3 bg-cream rounded-lg border border-cream-border">
                  <span className="text-forest font-bold block mb-0.5">Enduring</span>
                  <span className="text-[11px] text-charcoal-muted">Built for permanence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
