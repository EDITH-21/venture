import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Headphones, 
  Check, 
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyVanguard = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Built Around Your Business',
      description: 'We create solutions tailored to your actual operational needs and audience instead of forcing your business into rigid cookie-cutter templates.',
      benefit: 'Custom Architecture',
    },
    {
      icon: Cpu,
      title: 'Modern, Scalable Technology',
      description: 'Engineered with battle-tested modern stacks (React, Node.js, Cloud APIs) ensuring fast load times, rock-solid stability, and seamless scalability.',
      benefit: 'Future-Proof Code',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent & Structured Process',
      description: 'Clear project scopes, fixed milestones, direct WhatsApp & email communication, and regular demo updates from discovery to final deployment.',
      benefit: 'Zero Hidden Surprises',
    },
    {
      icon: Zap,
      title: 'Performance & Conversion Focused',
      description: 'Every layout, button, and checkout flow is designed to turn visitors into paying customers, generate qualified leads, and load in under a second.',
      benefit: 'Measurable ROI',
    },
    {
      icon: Headphones,
      title: 'Reliable Long-Term Support',
      description: 'We do not disappear after launch. We provide ongoing maintenance, feature enhancements, technical support, and performance monitoring.',
      benefit: 'Dedicated Partnership',
    },
    {
      icon: Clock,
      title: 'Fast & Predictable Delivery',
      description: 'Strict sprint deadlines and organized workflows mean your website, portal, or web application is delivered on schedule without endless delays.',
      benefit: 'On-Time Launch',
    },
  ];

  return (
    <section className="bg-obsidian-deep text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold">
              The Vanguard Difference
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white leading-tight mb-6">
            Why Forward-Thinking Businesses Choose Vanguard.
          </h2>

          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            We partner with businesses that want more than a generic digital presence. We build functional, high-impact digital products that generate revenue and streamline operations.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-graphite/50 backdrop-blur-sm p-8 rounded-xl border border-graphite-border hover:border-champagne/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-obsidian border border-champagne/20 flex items-center justify-center text-champagne group-hover:border-champagne group-hover:bg-champagne/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-champagne bg-champagne/10 px-2.5 py-1 rounded border border-champagne/20">
                      {pillar.benefit}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-warm-white mb-3 group-hover:text-champagne transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-gradient-to-r from-graphite via-graphite/80 to-obsidian p-8 sm:p-10 rounded-2xl border border-champagne/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-2xl font-serif font-normal text-warm-white mb-2">
              Ready to elevate your digital presence?
            </h4>
            <p className="text-sm text-text-muted">
              Get an accurate initial scope and timeline for your website, web app, or digital platform in minutes.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0 w-full md:w-auto">
            <Link
              to="/estimator"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider hover:bg-champagne-light transition-all shadow-lg text-center"
            >
              <span>Estimate Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
