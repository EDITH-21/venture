import React from 'react';
import { motion } from 'framer-motion';

export const PhilosophySection = () => {
  const pillars = [
    {
      num: '01',
      title: 'BUILD WITH PURPOSE',
      desc: 'Technology should solve meaningful problems.',
    },
    {
      num: '02',
      title: 'DESIGN FOR PEOPLE',
      desc: 'Great technology should feel simple.',
    },
    {
      num: '03',
      title: 'THINK LONG TERM',
      desc: 'Build products that can evolve.',
    },
    {
      num: '04',
      title: 'CREATE WHAT DOESN\'T EXIST',
      desc: 'Innovation starts where conventional thinking ends.',
    },
  ];

  return (
    <section id="philosophy" className="bg-cosmic-bg py-28 sm:py-36 relative border-t border-white/5 overflow-hidden bg-cosmic-stars">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Split: Statement & Manifesto Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-white/10">
          {/* Left Large Statement */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-glow uppercase block">
              TECHNOLOGY / PHILOSOPHY
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.08]">
              THINK DIFFERENT.<br />
              <span className="text-cyan-glow">BUILD INTELLIGENTLY.</span><br />
              <span className="gradient-text-purple-cyan">MOVE FORWARD.</span>
            </h2>
          </div>

          {/* Right Quote Card / Manifesto */}
          <div className="lg:col-span-5 bg-cosmic-card/60 border border-white/10 rounded-2xl p-7 backdrop-blur-xl space-y-4">
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
              "We use technology, creativity and human insight to build solutions that adapt, evolve and create real-world impact."
            </p>
            <p className="text-xs sm:text-sm text-cosmic-muted leading-relaxed font-mono italic">
              — The future isn't something we wait for, it's something we build.
            </p>
          </div>
        </div>

        {/* Bottom 4 Pillars of "WHY ASTEYA" */}
        <div className="pt-16">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cosmic-subtle uppercase block mb-10">
            WHY ASTEYA
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, idx) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="space-y-3"
              >
                <div className="text-xs font-mono font-bold text-cyan-glow">
                  {p.num}
                </div>

                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-cosmic-muted leading-relaxed font-sans">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
