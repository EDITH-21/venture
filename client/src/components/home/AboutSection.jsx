import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Layers } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="bg-slate-50 py-24 sm:py-32 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block">
              SECTION 08 — ABOUT
            </span>

            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              THE FUTURE IS BUILT, NOT PREDICTED.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-medium">
              Asteya is a technology and digital business company focused on building useful products, digital experiences and business solutions.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
              We operate at the intersection of systems architecture, brand aesthetics, and commercial velocity. Every line of code, design token, and platform module we build is engineered for permanence and compounded leverage.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono">
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Architecture First</span>
                <span className="text-slate-500 text-[11px]">Resilient micro-systems</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Enduring Value</span>
                <span className="text-slate-500 text-[11px]">Multi-decade horizon</span>
              </div>
            </div>
          </div>

          {/* Right Monolithic Geometric Architectural Structure */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 400 350" className="w-full h-auto max-w-sm drop-shadow-lg" fill="none">
                <defs>
                  <linearGradient id="monolith1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>
                  <linearGradient id="monolith2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                  <linearGradient id="monolith3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E2E8F0" />
                    <stop offset="100%" stopColor="#CBD5E1" />
                  </linearGradient>
                </defs>

                {/* 3D Geometric Prisms Facets */}
                <polygon points="200,40 320,120 200,200 80,120" fill="url(#monolith3)" stroke="#94A3B8" strokeWidth="1" />
                <polygon points="80,120 200,200 200,320 80,240" fill="url(#monolith2)" stroke="#64748B" strokeWidth="1" />
                <polygon points="200,200 320,120 320,240 200,320" fill="url(#monolith1)" stroke="#334155" strokeWidth="1" />

                {/* Center Laser Focus Ring */}
                <circle cx="200" cy="200" r="16" fill="#0284C7" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="4" fill="#38BDF8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
