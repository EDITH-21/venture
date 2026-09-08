import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="bg-cream py-32 sm:py-44 relative border-t border-cream-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-forest font-bold block mb-6">
          Building What’s Next
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-charcoal tracking-tight leading-[1.15] mb-10 max-w-4xl mx-auto">
          The future is built by people willing to{' '}
          <span className="text-forest underline decoration-forest/30 underline-offset-8">
            build it.
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#vision"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-forest text-cream font-sans font-semibold text-xs tracking-wide hover:bg-forest-light transition-all shadow-card"
          >
            <span>Explore Asteya</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
