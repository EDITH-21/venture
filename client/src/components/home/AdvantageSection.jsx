import React from 'react';
import { motion } from 'framer-motion';

export const AdvantageSection = () => {
  const steps = [
    {
      num: '01',
      title: 'UNDERSTAND',
      desc: 'Deep problem analysis, user workflows, market positioning and technical feasibility study.',
    },
    {
      num: '02',
      title: 'DESIGN',
      desc: 'World-class interface design, cohesive systems, interaction patterns and precise prototypes.',
    },
    {
      num: '03',
      title: 'BUILD',
      desc: 'Full-stack engineering, resilient cloud architectures, clean codebases and rigorous automated QA.',
    },
    {
      num: '04',
      title: 'EVOLVE',
      desc: 'Continuous telemetry, performance monitoring, scaling strategies and compounding growth.',
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-3">
            SECTION 04 — HOW ASTEYA WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            WE DON'T JUST BUILD DIGITAL PRODUCTS. WE BUILD DIGITAL ADVANTAGE.
          </h2>
        </div>

        {/* 4 Large Numbered Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-display font-black text-slate-900 mb-6 tracking-tighter group-hover:text-blue-600 transition-colors">
                  {step.num}
                </div>

                <h3 className="text-sm font-mono font-bold text-slate-900 tracking-wider uppercase mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Stage {idx + 1} of 4
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
