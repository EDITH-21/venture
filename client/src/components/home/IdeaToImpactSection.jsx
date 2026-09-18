import React from 'react';
import { motion } from 'framer-motion';
import { Box, Code2, Sparkles, BarChart3, ArrowRight } from 'lucide-react';

export const IdeaToImpactSection = () => {
  const services = [
    {
      num: '01',
      title: 'Digital Products',
      desc: 'We build intuitive digital products that solve real problems and create value.',
      icon: Box,
    },
    {
      num: '02',
      title: 'Technology & Development',
      desc: 'Scalable technology, modern architecture and robust engineering solutions.',
      icon: Code2,
    },
    {
      num: '03',
      title: 'Brand & Digital Experience',
      desc: 'Strong brands, beautiful experiences and digital presence that connect.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Business & Digital Solutions',
      desc: 'Strategy, automation and innovative solutions for sustainable growth.',
      icon: BarChart3,
    },
  ];

  return (
    <section id="services" className="bg-cosmic-bg py-28 sm:py-36 relative border-t border-white/5 overflow-hidden bg-cosmic-stars">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-glow uppercase block mb-3">
              WHAT WE BUILD
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.08]">
              FROM IDEA<br />
              <span className="gradient-text-purple-cyan">
                TO IMPACT.
              </span>
            </h2>
          </div>

          <a
            href="#ventures"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-glow hover:text-white uppercase tracking-wider group transition-colors"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

        {/* 4 Bento Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-cosmic-card/70 border border-white/10 hover:border-violet-light/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl group hover:shadow-card-glow hover:-translate-y-1"
              >
                <div>
                  {/* Glowing Circular Icon Wireframe */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-violet/20 to-cyan/20 border border-white/15 flex items-center justify-center text-cyan-glow mb-8 group-hover:scale-110 group-hover:text-white transition-all shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-mono font-bold text-violet-light block mb-2">
                    {srv.num}
                  </span>

                  <h3 className="text-lg font-display font-bold text-white tracking-tight mb-3 group-hover:text-cyan-glow transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cosmic-muted leading-relaxed font-sans">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cosmic-muted group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
