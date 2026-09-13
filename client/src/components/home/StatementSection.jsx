import React from 'react';
import { motion } from 'framer-motion';

export const StatementSection = () => {
  return (
    <section className="bg-white py-20 sm:py-28 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-6">
            SECTION 01 — STATEMENT
          </span>

          {/* Statement Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
            Technology should not complicate business. It should move it forward.
          </h2>

          {/* Supporting Subtext */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
            Asteya helps businesses build, modernize and scale their digital presence through robust web architectures, cohesive brand systems, and reliable intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};
