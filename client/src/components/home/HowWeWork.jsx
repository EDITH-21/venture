import React from 'react';
import { motion } from 'framer-motion';

export const HowWeWork = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      eyebrow: 'Inquiry & Discovery',
      description: 'We audit your technical constraints, market dynamics, and operational bottlenecks before writing a single line of code or designing an asset.',
    },
    {
      num: '02',
      title: 'Create',
      eyebrow: 'Design & Architecture',
      description: 'We construct full typographic hierarchies, component design tokens, reactive data models, and API blueprints with editorial precision.',
    },
    {
      num: '03',
      title: 'Build',
      eyebrow: 'Full-Stack Execution',
      description: 'We engineer type-safe, resilient software using the modern MERN ecosystem, rigorous unit tests, automated CI/CD, and security headers.',
    },
    {
      num: '04',
      title: 'Evolve',
      eyebrow: 'Telemetry & Scale',
      description: 'Continuous monitoring, telemetry insights, cloud optimization, and iterative updates to ensure your digital asset compounds in value over time.',
    },
  ];

  return (
    <section className="bg-ivory text-text-dark py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-semibold block mb-4">
            Methodology & Rigor
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] font-normal text-text-dark">
            How We Work
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-warm-white p-8 rounded-sm border border-border-light/70 shadow-sm flex flex-col justify-between group hover:border-champagne/60 hover:shadow-md transition-all duration-300 relative"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border-light/40 mb-6">
                  <span className="font-mono text-2xl font-serif font-bold text-champagne-dark">
                    {step.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-champagne-dark/30 group-hover:bg-champagne-dark transition-colors" />
                </div>

                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted block mb-2">
                  {step.eyebrow}
                </span>

                <h3 className="text-2xl font-serif font-semibold text-text-dark mb-4 group-hover:text-champagne-dark transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-light/40">
                <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted/70 group-hover:text-text-dark transition-colors">
                  Phase {step.num} // Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
