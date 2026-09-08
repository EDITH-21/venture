import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const PhilosophySection = () => {
  const principles = [
    {
      title: 'Think long term.',
      desc: 'We measure success in decades rather than hype cycles.',
    },
    {
      title: 'Solve real problems.',
      desc: 'We focus engineering energy on friction that genuinely matters.',
    },
    {
      title: 'Question the obvious.',
      desc: 'We challenge standard assumptions to uncover better architectures.',
    },
    {
      title: 'Technology should amplify human potential.',
      desc: 'Our tools are designed to augment human intuition and intellect, not replace it.',
    },
    {
      title: 'Build with purpose.',
      desc: 'Every line of code and interface pixel must serve an intentional outcome.',
    },
    {
      title: 'Move fast, but build carefully.',
      desc: 'Velocity matters, but structural integrity and precision matter more.',
    },
  ];

  return (
    <section id="philosophy" className="bg-cream py-28 sm:py-36 relative border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-forest font-bold block mb-4">
            Core Beliefs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-charcoal tracking-tight mb-6">
            Build things worth keeping.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans">
            Our engineering philosophy guides how we formulate hypotheses, architect systems, and build enduring technology.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-cream-border hover:border-forest/40 transition-all duration-300 shadow-subtle group"
            >
              <div className="w-7 h-7 rounded-md bg-forest-subtle flex items-center justify-center text-forest mb-5 group-hover:bg-forest group-hover:text-cream transition-colors">
                <Check className="w-4 h-4" />
              </div>

              <h3 className="text-lg font-sans font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">
                {p.title}
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
