import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const CTASection = () => {
  return (
    <section className="bg-obsidian text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60 overflow-hidden">
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
            Have a project in mind?
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-warm-white mb-6 leading-tight">
            Let’s build something that works for your business.
          </h2>

          <p className="text-base sm:text-lg text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
            From custom business websites to full-stack web applications and e-commerce platforms — share your requirements and get a clear project roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/start-project"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto text-xs uppercase tracking-wider font-bold shadow-xl"
            >
              Start a Project
            </Button>
            <Button
              to="/work"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-xs uppercase tracking-wider font-semibold"
            >
              View Our Work
            </Button>
            <a
              href="https://wa.me/919998160726?text=Hi%20Vanguard%20Digital,%20I'd%20like%20to%20talk%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-graphite border border-champagne/30 text-champagne hover:bg-graphite/80 hover:border-champagne text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Talk to Us on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
