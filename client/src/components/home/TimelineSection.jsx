import React from 'react';
import { motion } from 'framer-motion';

export const TimelineSection = () => {
  const milestones = [
    {
      period: '2026',
      phase: 'Foundations',
      desc: 'Establish core engineering architecture, research methodology, and initial technology platform prototypes.',
    },
    {
      period: '2027–2028',
      phase: 'Products',
      desc: 'Launch, validate, and iterate flagship consumer and enterprise software products with real-world users.',
    },
    {
      period: '2029–2031',
      phase: 'Scale',
      desc: 'Expand specialized engineering teams, mature infrastructure layers, and establish global distribution channels.',
    },
    {
      period: '2032+',
      phase: 'Research & Infrastructure',
      desc: 'Move deeper into foundational computing research, deep technology, and enduring public infrastructure.',
    },
  ];

  return (
    <section id="timeline" className="bg-cream py-28 sm:py-36 relative border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-forest font-bold block mb-3">
            Horizon Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-charcoal tracking-tight mb-4">
            Long-Term Vision Timeline
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted font-sans leading-relaxed">
            Our strategic projection and developmental milestones over the next decade.
          </p>
        </div>

        {/* 4 Milestones Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div
              key={m.period}
              className="bg-white border border-cream-border rounded-2xl p-7 flex flex-col justify-between shadow-subtle hover:border-forest/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-cream-border/70">
                  <span className="text-xl font-mono font-bold text-forest">
                    {m.period}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-muted">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-sans font-bold text-charcoal mb-2">
                  {m.phase}
                </h3>

                <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                  {m.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-cream-border/40 text-[10px] font-mono text-charcoal-muted">
                Vision Roadmap
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
