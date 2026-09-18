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
      {/* 3D Animated Logo Emblem */}
      <motion.div
        whileHover={animated ? { scale: 1.08, rotate: [0, -3, 3, 0] } : {}}
        transition={{ duration: 0.4 }}
        className={`relative flex items-center justify-center ${className}`}
      >
        {/* Ambient Neon Glow Behind Logo */}
        {glow && (
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-glow via-indigo to-cyan-glow rounded-full blur-md opacity-70 animate-pulse-glow pointer-events-none" />
        )}

        {/* Clean Logo Image with Invert for Dark Mode & Gradient Aura */}
        <img
          src="/asteya-logo.png"
          alt="ASTEYA Logo"
          className="relative z-10 w-full h-full object-contain filter invert drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]"
        />
      </motion.div>

      {/* Brand Text */}
      {showText && (
        <span
          className={`font-display font-extrabold tracking-[0.2em] text-white group-hover:text-cyan-glow transition-colors ${textClassName}`}
        >
          ASTEYA
        </span>
      )}
    </div>
  );
};
