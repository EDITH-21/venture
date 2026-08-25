import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, CheckCircle, Rocket } from 'lucide-react';

export const HowWeWork = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      description: "Understand the client's requirements, target audience, and business goals.",
      icon: Search,
    },
    {
      num: '02',
      title: 'Design',
      description: 'Create a modern, intuitive, and user-focused website experience.',
      icon: Palette,
    },
    {
      num: '03',
      title: 'Develop',
      description: 'Build the website with responsive, scalable, and modern technology.',
      icon: Code2,
    },
    {
      num: '04',
      title: 'Test',
      description: 'Test performance, cross-device responsiveness, security, and functionality.',
      icon: CheckCircle,
    },
    {
      num: '05',
      title: 'Launch',
      description: 'Deploy the website to high-speed cloud infrastructure and help you get it live.',
      icon: Rocket,
    },
  ];

  return (
    <section className="bg-ivory text-text-dark py-24 sm:py-32 relative border-t border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-bold block mb-3">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-text-dark leading-tight mb-4">
            How We Work
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            A simple, structured workflow from concept to launch — keeping you informed at every step.
          </p>
        </div>

        {/* 5-Step Visual Process Grid */}
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
                className="bg-warm-white p-6 rounded-xl border border-border-light/80 hover:border-champagne-dark/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
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

                  <h3 className="text-xl font-serif font-bold text-text-dark mb-2">
                    {step.title}
                  </h3>

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
