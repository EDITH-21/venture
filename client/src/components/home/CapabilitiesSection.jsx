import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const CapabilitiesSection = () => {
  const capabilities = [
    {
      id: 'web-systems',
      title: 'WEB SYSTEMS',
      desc: 'High-performance web applications, portals, responsive platforms and cloud-native architectures.',
      gradient: 'from-blue-500/20 to-sky-400/10',
      iconShape: (
        <svg viewBox="0 0 80 80" className="w-12 h-12 text-blue-600" fill="none">
          <rect x="15" y="20" width="50" height="38" rx="8" fill="#3B82F6" fillOpacity="0.2" stroke="#2563EB" strokeWidth="2" />
          <path d="M 22 30 L 32 30 M 22 36 L 44 36" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
          <circle cx="56" cy="30" r="3" fill="#2563EB" />
        </svg>
      ),
    },
    {
      id: 'brand-systems',
      title: 'BRAND SYSTEMS',
      desc: 'Modern digital identity, cohesive design systems, visual motion and interactive guidelines.',
      gradient: 'from-indigo-500/20 to-purple-400/10',
      iconShape: (
        <svg viewBox="0 0 80 80" className="w-12 h-12 text-indigo-600" fill="none">
          <ellipse cx="40" cy="40" rx="24" ry="12" stroke="#4F46E5" strokeWidth="2" transform="rotate(-30 40 40)" fill="#6366F1" fillOpacity="0.2" />
          <circle cx="40" cy="40" r="6" fill="#4F46E5" />
          <circle cx="54" cy="30" r="3" fill="#818CF8" />
        </svg>
      ),
    },
    {
      id: 'digital-business',
      title: 'DIGITAL BUSINESS',
      desc: 'Custom digital tools, workflow automation, e-commerce infrastructure and frictionless API integrations.',
      gradient: 'from-sky-500/20 to-cyan-400/10',
      iconShape: (
        <svg viewBox="0 0 80 80" className="w-12 h-12 text-sky-600" fill="none">
          <path d="M 24 48 L 40 24 L 56 48 Z" fill="#0284C7" fillOpacity="0.2" stroke="#0284C7" strokeWidth="2" />
          <circle cx="40" cy="48" r="14" stroke="#0369A1" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="40" cy="38" r="4" fill="#0284C7" />
        </svg>
      ),
    },
    {
      id: 'technology',
      title: 'TECHNOLOGY',
      desc: 'AI integration, contextual intelligence, scalable cloud micro-services and resilient data platforms.',
      gradient: 'from-cyan-500/20 to-teal-400/10',
      iconShape: (
        <svg viewBox="0 0 80 80" className="w-12 h-12 text-teal-600" fill="none">
          <rect x="25" y="25" width="30" height="30" rx="6" stroke="#0D9488" strokeWidth="2" fill="#14B8A6" fillOpacity="0.2" />
          <line x1="15" y1="40" x2="25" y2="40" stroke="#0D9488" strokeWidth="2" />
          <line x1="55" y1="40" x2="65" y2="40" stroke="#0D9488" strokeWidth="2" />
          <line x1="40" y1="15" x2="40" y2="25" stroke="#0D9488" strokeWidth="2" />
          <line x1="40" y1="55" x2="40" y2="65" stroke="#0D9488" strokeWidth="2" />
          <circle cx="40" cy="40" r="4" fill="#0D9488" />
        </svg>
      ),
    },
  ];

  return (
    <section id="capabilities" className="bg-slate-50 py-24 sm:py-32 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-3">
            SECTION 02 — CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            ONE COMPANY. MULTIPLE DIGITAL CAPABILITIES.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 hover:border-slate-400 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group"
            >
              <div>
                {/* 3D Glass Icon Thumbnail Box */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cap.gradient} border border-slate-200/80 flex items-center justify-center mb-7 shadow-inner group-hover:scale-105 transition-transform`}>
                  {cap.iconShape}
                </div>

                <h3 className="text-base font-mono font-bold text-slate-900 tracking-wider uppercase mb-3 group-hover:text-blue-600 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-900 transition-colors">
                <span>Explore Capability</span>
                <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
