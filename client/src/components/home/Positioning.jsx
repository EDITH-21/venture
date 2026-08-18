import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Palette, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Positioning = () => {
  const pillars = [
    {
      tag: '01',
      title: 'TECHNOLOGY',
      subtitle: 'Web & Custom Solutions',
      description: 'Architecting resilient full-stack platforms, scalable database schemas, automation pipelines, and high-performance web systems.',
      icon: Terminal,
      link: '/solutions/technology',
    },
    {
      tag: '02',
      title: 'CREATIVE',
      subtitle: 'Design & Brand Identity',
      description: 'Crafting memorable visual identities, bespoke design tokens, editorial collateral, and distinctive digital typography.',
      icon: Palette,
      link: '/solutions/creative',
    },
    {
      tag: '03',
      title: 'DIGITAL',
      subtitle: 'Business & Digital Solutions',
      description: 'Streamlining customer touchpoints with verified WhatsApp integrations, digital cards, dynamic QR systems, and automated workflows.',
      icon: Sparkles,
      link: '/solutions/digital',
    },
  ];

  return (
    <section className="bg-ivory text-text-dark py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-semibold block mb-4">
            Strategic Discipline
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] font-normal text-text-dark">
            Trusted Digital <br />
            <span className="italic font-light">Partner For</span> <br />
            Modern Businesses
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-warm-white p-8 sm:p-10 rounded-sm border border-border-light/60 shadow-sm flex flex-col justify-between group hover:border-champagne/60 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-8 border-b border-border-light/40">
                    <span className="font-mono text-xs font-bold text-champagne-dark tracking-widest">
                      {pillar.tag}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-ivory flex items-center justify-center text-text-dark group-hover:bg-champagne group-hover:text-obsidian transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="pt-8">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted block mb-1">
                      {pillar.title}
                    </span>
                    <h3 className="text-2xl font-serif font-semibold text-text-dark mb-4 group-hover:text-champagne-dark transition-colors">
                      {pillar.subtitle}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-border-light/40">
                  <Link
                    to={pillar.link}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-dark group-hover:text-champagne-dark transition-colors"
                  >
                    <span>Explore Pillar</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
