import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Shield, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const LongTermAbout = () => {
  return (
    <section className="bg-ivory text-text-dark py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-semibold block mb-4">
              Institutional Foundation
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] font-normal text-text-dark mb-8">
              Built With A <br />
              <span className="italic font-light">Long-Term</span> Vision.
            </h2>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-10 max-w-xl">
              We're building a technology company that goes beyond individual projects — creating solutions for businesses today and products for tomorrow.
            </p>

            <div className="pt-2">
              <Button
                to="/about"
                variant="champagne"
                size="md"
                icon={ArrowRight}
                className="bg-obsidian text-warm-white hover:bg-graphite hover:text-champagne font-semibold text-xs uppercase tracking-wider"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>

          {/* Right Column Editorial Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="p-6 rounded-sm bg-warm-white border border-border-light/70 flex flex-col justify-between h-44 shadow-sm">
              <Code className="w-5 h-5 text-champagne-dark" />
              <div>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">Architecture</span>
                <h4 className="text-base font-serif font-bold text-text-dark">Clean Craftsmanship</h4>
              </div>
            </div>

            <div className="p-6 rounded-sm bg-warm-white border border-border-light/70 flex flex-col justify-between h-44 shadow-sm">
              <Compass className="w-5 h-5 text-champagne-dark" />
              <div>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">Direction</span>
                <h4 className="text-base font-serif font-bold text-text-dark">Pure Utility</h4>
              </div>
            </div>

            <div className="p-6 rounded-sm bg-warm-white border border-border-light/70 flex flex-col justify-between h-44 shadow-sm">
              <Shield className="w-5 h-5 text-champagne-dark" />
              <div>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">Reliability</span>
                <h4 className="text-base font-serif font-bold text-text-dark">SLA Resilience</h4>
              </div>
            </div>

            <div className="p-6 rounded-sm bg-warm-white border border-border-light/70 flex flex-col justify-between h-44 shadow-sm">
              <Cpu className="w-5 h-5 text-champagne-dark" />
              <div>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">Future</span>
                <h4 className="text-base font-serif font-bold text-text-dark">Autonomous Tech</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
