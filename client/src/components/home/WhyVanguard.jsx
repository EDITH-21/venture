import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Smartphone, Gauge, Sliders, Headphones } from 'lucide-react';

export const WhyVanguard = () => {
  const points = [
    {
      icon: Sparkles,
      title: 'Modern Design',
      desc: 'Professional, elegant interfaces designed to create a strong, credible first impression.',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      desc: 'Every website is meticulously optimized for fluid experiences across mobile, tablet and desktop.',
    },
    {
      icon: Gauge,
      title: 'Performance',
      desc: 'Fast, smooth and optimized code that loads in milliseconds and delivers high search rankings.',
    },
    {
      icon: Sliders,
      title: 'Custom Development',
      desc: "Every website can be tailored specifically to your organization's exact requirements and goals.",
    },
    {
      icon: Headphones,
      title: 'Professional Support',
      desc: 'Clear communication, dependable timelines, and responsive ongoing support throughout your project.',
    },
  ];

  return (
    <section id="why-vanguard" className="bg-obsidian-surface text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-bold block mb-3">
            The Vanguard Advantage
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white leading-tight mb-4">
            Why Choose Vanguard Digital
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            We prioritize quality engineering, visual refinement, and business reliability over cookie-cutter templates.
          </p>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-graphite/40 backdrop-blur-sm rounded-xl border border-graphite-border hover:border-champagne/40 p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-obsidian border border-champagne/20 flex items-center justify-center text-champagne mb-6 group-hover:border-champagne group-hover:bg-champagne/10 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-warm-white mb-3 group-hover:text-champagne transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {pt.desc}
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
