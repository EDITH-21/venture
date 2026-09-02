import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  const pillars = [
    {
      icon: Globe2,
      title: 'Digital Authority',
      desc: 'Engineered to elevate brand perception from the very first interaction.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      desc: 'Sub-second load speeds that keep visitors engaged and improve search ranking.',
    },
    {
      icon: ShieldCheck,
      title: 'Modern Reliability',
      desc: 'Clean code architecture and responsive standards that work seamlessly on all devices.',
    },
  ];

  return (
    <section id="about" className="bg-ivory text-text-dark py-24 sm:py-32 relative border-t border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-bold block mb-4">
              About Vanguard Digital
            </span>

            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-text-dark leading-[1.18] mb-6">
              Empowering organizations with websites that look exceptional and deliver real business impact.
            </h2>

            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8">
              Vanguard Digital helps businesses, schools, cinemas, and growing brands establish a stronger digital presence through modern website design and development.
            </p>

            <div className="inline-flex items-center gap-3 p-4 rounded-lg bg-warm-white border border-border-light shadow-sm text-xs font-mono text-text-dark">
              <Sparkles className="w-4 h-4 text-champagne-dark flex-shrink-0" />
              <span>Tailored engineering · Zero templates · Direct developer support</span>
            </div>
          </motion.div>

          {/* Right Visual Pillars Card Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-warm-white p-6 sm:p-7 rounded-xl border border-border-light/80 hover:border-champagne-dark/50 transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-ivory flex items-center justify-center text-champagne-dark group-hover:bg-champagne/15 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-text-dark mb-1 group-hover:text-champagne-dark transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
