import React from 'react';
import { motion } from 'framer-motion';

export const IndustriesSection = () => {
  const industries = [
    { name: 'STARTUPS', desc: 'Fast-moving MVPs & high-growth platforms' },
    { name: 'RETAIL & COMMERCE', desc: 'Modern direct-to-consumer store ecosystems' },
    { name: 'EDUCATION', desc: 'EdTech platforms, school portals & learning hubs' },
    { name: 'PROFESSIONAL SERVICES', desc: 'Corporate legal, medical & consulting systems' },
    { name: 'CREATORS & BRANDS', desc: 'Digital asset engines & audience monetization' },
    { name: 'GROWING ENTERPRISES', desc: 'Workflow automation & internal cloud tools' },
  ];

  return (
    <section className="bg-white py-24 sm:py-32 border-b border-slate-200 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-3">
              SECTION 07 — INDUSTRIES
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
              BUILT FOR THE REAL WORLD.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans mb-8">
              We design and engineer robust digital foundations for diverse sectors—from early-stage ventures to established market leaders.
            </p>

            <div className="flex items-center gap-6 text-xs font-mono text-slate-600 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Zero Generic Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>100% Bespoke Code</span>
              </div>
            </div>
          </div>

          {/* Right Constellation Network Matrix */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
              {/* Constellation SVG Net Background */}
              <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 500 350">
                <line x1="80" y1="60" x2="220" y2="120" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="220" y1="120" x2="380" y2="70" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="220" y1="120" x2="260" y2="240" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="100" y1="280" x2="260" y2="240" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="260" y1="240" x2="420" y2="260" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
              </svg>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {industries.map((ind, i) => (
                  <motion.div
                    key={ind.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-white border border-slate-200 hover:border-blue-500 rounded-xl p-5 transition-all duration-300 shadow-sm hover:shadow-md group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                      <h4 className="text-xs font-mono font-bold text-slate-900 tracking-wider">
                        {ind.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {ind.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
