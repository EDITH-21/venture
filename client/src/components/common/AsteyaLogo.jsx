import React from 'react';
import { motion } from 'framer-motion';

export const AsteyaLogo = ({
  className = 'w-8 h-8',
  showText = false,
  textClassName = 'text-xl',
  animated = false,
  glow = true,
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* 3D Animated Exact Logo Emblem */}
      <motion.div
        whileHover={animated ? { scale: 1.1, rotate: [0, -4, 4, 0] } : {}}
        transition={{ duration: 0.3 }}
        className={`relative flex items-center justify-center ${className}`}
      >
        {/* Ambient Neon Purple & Cyan Glow Corona Behind Logo */}
        {glow && (
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 rounded-full blur-md opacity-75 animate-pulse-glow pointer-events-none" />
        )}

        {/* The Exact Uploaded Monogram with Screen Blend for Pure Transparent Clean White/Glow */}
        <img
          src="/asteya-logo.png"
          alt="ASTEYA Official Monogram"
          className="relative z-10 w-full h-full object-contain filter invert mix-blend-screen drop-shadow-[0_0_15px_rgba(168,85,247,0.95)]"
        />
      </motion.div>

      {/* Brand Text */}
      {showText && (
        <span
          className={`font-display font-black tracking-[0.2em] text-white group-hover:text-cyan-glow transition-colors ${textClassName}`}
        >
          ASTEYA
        </span>
      )}
    </div>
  );
};
