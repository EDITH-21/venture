import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const CTASection = () => {
  return (
    <section className="bg-obsidian text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-warm-white mb-6 leading-tight">
            Let's Build Something Useful.
          </h2>

          <p className="text-base sm:text-lg text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Have an idea, business requirement or digital challenge? Let's talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto text-xs uppercase tracking-wider font-semibold"
            >
              Start a Project
            </Button>
            <Button
              to="/solutions"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-xs uppercase tracking-wider font-semibold"
            >
              Explore Solutions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
