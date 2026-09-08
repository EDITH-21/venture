import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center select-none">
      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-forest-subtle/50 via-transparent to-forest-light/10 rounded-full blur-2xl pointer-events-none" />

      {/* Abstract Geometric Technological Assembly */}
      <svg
        className="w-full h-full text-forest/80"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Concentric Precision Architecture Rings */}
        <circle
          cx="200"
          cy="200"
          r="160"
          stroke="#E5DFD3"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="#E5DFD3"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="80"
          stroke="#1B4332"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />

        {/* Orbiting Nodes & Rays */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <line x1="200" y1="40" x2="200" y2="360" stroke="#E5DFD3" strokeWidth="0.8" />
          <line x1="40" y1="200" x2="360" y2="200" stroke="#E5DFD3" strokeWidth="0.8" />
          
          <circle cx="200" cy="80" r="4" fill="#1B4332" />
          <circle cx="280" cy="200" r="3.5" fill="#2D6A4F" />
          <circle cx="200" cy="320" r="4" fill="#1B4332" />
          <circle cx="120" cy="200" r="3.5" fill="#2D6A4F" />
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <rect
            x="145"
            y="145"
            width="110"
            height="110"
            rx="12"
            stroke="#1B4332"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <circle cx="145" cy="145" r="3" fill="#1B4332" />
          <circle cx="255" cy="255" r="3" fill="#1B4332" />
        </motion.g>

        {/* Core Focal Engine */}
        <circle cx="200" cy="200" r="28" fill="#FFFFFF" stroke="#1B4332" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="12" fill="#1B4332" />
        <circle cx="200" cy="200" r="4" fill="#FAF8F5" />
      </svg>

      {/* Ambient Telemetry Badge */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md border border-cream-border px-3.5 py-2 rounded-lg shadow-subtle flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
        <span className="text-[11px] font-mono text-charcoal-muted tracking-tight">
          System Core: Active
        </span>
      </div>
    </div>
  );
};
