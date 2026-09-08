import React from 'react';
import { motion } from 'framer-motion';
import { Search, Hammer, Users, TrendingUp } from 'lucide-react';

export const IdeaToImpact = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Find meaningful problems.',
      desc: 'We identify systemic friction points in industries where technological leverage creates transformative change.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Build',
      tagline: 'Turn ideas into technology.',
      desc: 'We architect robust foundational systems, resilient data pipelines, and intuitive user experiences with extreme care.',
      icon: Hammer,
    },
    {
      num: '03',
      title: 'Validate',
      tagline: 'Put ideas into the hands of real people.',
      desc: 'We stress-test prototypes against live operational conditions to verify real-world utility, reliability, and human resonance.',
      icon: Users,
    },
    {
      num: '04',
      title: 'Scale',
      tagline: 'Turn successful ideas into enduring products and companies.',
      desc: 'We compound distribution, optimize operational throughput, and establish sustained technical and business resilience.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="impact" className="bg-cream-surface py-28 sm:py-36 relative border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-forest font-bold block mb-3">
            Execution Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-charcoal tracking-tight mb-4">
            From Idea to Impact
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Our disciplined pipeline for transforming raw insights into enduring technology and scalable enterprises.
          </p>
        </div>

        {/* 4 Sequential Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white border border-cream-border hover:border-forest/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-subtle hover:shadow-card group"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-cream-border/70">
                    <span className="text-2xl font-mono font-bold text-forest">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-forest-subtle flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-cream transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-sans font-bold text-charcoal tracking-tight mb-2 group-hover:text-forest transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs font-sans font-semibold text-charcoal/90 mb-3 leading-snug">
                    {step.tagline}
                  </p>

                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-cream-border/40 text-[10px] font-mono text-charcoal-muted uppercase tracking-wider">
                  Stage {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
