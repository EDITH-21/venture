import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const ConsultationSection = () => {
  return (
    <section className="bg-obsidian text-warm-white py-20 sm:py-28 relative border-t border-graphite-border/60 overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-bold inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-champagne/10 border border-champagne/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Website Consultation</span>
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-warm-white mb-6 leading-tight">
            Have an idea for your website?
          </h2>

          <p className="text-base sm:text-lg text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Let's discuss what your business actually needs. We'll provide honest recommendations on architecture, design, and timeline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider hover:bg-champagne-light transition-all shadow-xl"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/919998160726?text=Hi%20Vanguard%20Digital,%20I'd%20like%20to%20get%20a%20free%20website%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-graphite border border-champagne/30 text-champagne hover:bg-graphite/80 hover:border-champagne text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
