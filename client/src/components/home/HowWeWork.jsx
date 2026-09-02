import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, CheckCircle2, Rocket } from 'lucide-react';

export const HowWeWork = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understanding Requirements',
      description: "Understand the client's business, target audience, and specific project requirements.",
      icon: Search,
    },
    {
      num: '02',
      title: 'DESIGN',
      subtitle: 'Visual Architecture',
      description: 'Create the website structure, user journey, wireframes, and modern visual experience.',
      icon: Palette,
    },
    {
      num: '03',
      title: 'DEVELOP',
      subtitle: 'Responsive Engineering',
      description: 'Build the fast, responsive, and robust website using modern clean technology.',
      icon: Code2,
    },
    {
      num: '04',
      title: 'REVIEW',
      subtitle: 'Feedback & Refinement',
      description: 'Client reviews the completed website, tests workflows, and provides feedback.',
      icon: CheckCircle2,
    },
    {
      num: '05',
      title: 'LAUNCH',
      subtitle: 'Deployment & Go-Live',
      description: 'Deploy the final website to high-speed cloud infrastructure and make it live.',
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="bg-ivory text-text-dark py-24 sm:py-32 relative border-t border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-bold block mb-3">
            Structured Execution
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-text-dark leading-tight mb-4">
            Our 5-Step Process
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            A simple, transparent timeline from initial consultation to successful website launch.
          </p>
        </div>

        {/* 5-Step Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-warm-white p-6 sm:p-7 rounded-xl border border-border-light/80 hover:border-champagne-dark/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-light/60">
                    <span className="font-mono text-base font-bold text-champagne-dark">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-md bg-ivory flex items-center justify-center text-text-dark group-hover:text-champagne-dark group-hover:bg-champagne/15 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-text-dark mb-1">
                    {step.title}
                  </h3>

                  <span className="text-[10px] font-mono text-champagne-dark uppercase tracking-wider block mb-3 font-semibold">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
