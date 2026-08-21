import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, Code2, Rocket, Headphones, Check } from 'lucide-react';

export const HowWeWork = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      subtitle: 'Understand Requirements',
      description: 'We analyze your business model, target audience, technical needs, and strategic objectives to determine the exact requirements.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Plan',
      subtitle: 'Architecture & Scope',
      description: 'We define the technical architecture, user flow, feature list, database structure, and a transparent project delivery timeline.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Design',
      subtitle: 'Modern UI/UX Experience',
      description: 'We craft high-fidelity responsive interfaces focused on clean aesthetics, effortless navigation, and maximum lead conversion.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Build',
      subtitle: 'Production Engineering',
      description: 'We develop clean, tested code with modern frameworks, connect robust APIs, and integrate secure payment and admin portals.',
      icon: Code2,
    },
    {
      num: '05',
      title: 'Launch',
      subtitle: 'Optimization & Go-Live',
      description: 'We conduct end-to-end performance audits, configure SSL, optimize SEO tags, and deploy the application to high-speed cloud servers.',
      icon: Rocket,
    },
    {
      num: '06',
      title: 'Support',
      subtitle: 'Maintenance & Evolution',
      description: 'We provide ongoing technical maintenance, security updates, feature improvements, and proactive monitoring to keep your platform fast.',
      icon: Headphones,
    },
  ];

  return (
    <section className="bg-ivory text-text-dark py-24 sm:py-32 relative border-t border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-bold block mb-3">
            Structured Execution
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-text-dark leading-tight mb-6">
            How We Work — From Discovery to Launch.
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Our 6-stage engineering process ensures your digital project is delivered on schedule, within scope, and engineered for real business performance.
          </p>
        </div>

        {/* 6-Step Visual Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-warm-white p-8 rounded-xl border border-border-light/80 hover:border-champagne-dark/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-border-light/60">
                    <span className="font-mono text-xl font-bold text-champagne-dark">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-md bg-ivory flex items-center justify-center text-text-dark group-hover:text-champagne-dark group-hover:bg-champagne/15 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-text-dark mb-1">
                    {step.title}
                  </h3>

                  <span className="text-[11px] font-mono text-champagne-dark uppercase tracking-wider block mb-3 font-semibold">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-border-light/40 flex items-center gap-1.5 text-[10px] font-mono text-text-muted">
                  <Check className="w-3 h-3 text-champagne-dark" />
                  <span>Documented Milestone Deliverable</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
