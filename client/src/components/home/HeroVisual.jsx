import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center select-none py-4">
      {/* Background Radial Purple & Cyan Glow Corona */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-dark/40 via-purple-600/20 to-cyan-dark/30 rounded-full blur-[90px] pointer-events-none animate-nebula-pulse" />

      {/* Main 3D Orbital Cosmic Planetary Sphere Assembly */}
      <svg
        className="w-full h-full drop-shadow-[0_0_50px_rgba(139,92,246,0.35)]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial Sphere Gradients */}
          <radialGradient id="sphereCoreGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="40%" stopColor="#6366F1" />
            <stop offset="80%" stopColor="#0B0F1F" />
            <stop offset="100%" stopColor="#040711" />
          </radialGradient>

          <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="90%" stopColor="#A855F7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="ringGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#6366F1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
          </linearGradient>

          <filter id="glowEffect" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Background Orbital Orbit Trace */}
        <ellipse
          cx="250"
          cy="250"
          rx="220"
          ry="110"
          stroke="url(#ringGrad1)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          transform="rotate(-25 250 250)"
          opacity="0.4"
        />

        {/* Secondary Tilted Orbital Arc */}
        <motion.ellipse
          cx="250"
          cy="250"
          rx="200"
          ry="90"
          stroke="url(#ringGrad2)"
          strokeWidth="2.5"
          filter="url(#glowEffect)"
          transform="rotate(35 250 250)"
          animate={{ strokeDashoffset: [0, 400] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          strokeDasharray="180 80"
        />

        {/* Central Planetary Dark Sphere */}
        <g filter="url(#glowEffect)">
          <circle
            cx="250"
            cy="250"
            r="105"
            fill="url(#sphereCoreGrad)"
            stroke="#C084FC"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
        </g>

        {/* Inner Glowing Atmosphere Ring */}
        <circle
          cx="250"
          cy="250"
          r="92"
          fill="none"
          stroke="url(#ringGrad1)"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Central Glowing ASTEYA Emblem Core 'A' */}
        <g transform="translate(210, 205)" filter="url(#glowEffect)">
          {/* Stylized Modern Triangular 'A' */}
          <path
            d="M 40 10 L 70 70 L 52 70 L 40 45 L 28 70 L 10 70 Z"
            fill="url(#ringGrad1)"
            opacity="0.95"
          />
          <polygon points="40,25 48,45 32,45" fill="#040711" />
        </g>

        {/* Floating Translucent Hyper-Cubes (4 Isometric Crystals) */}
        {/* Cube 1 (Top Left) */}
        <motion.g
          animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          transform="translate(80, 70)"
        >
          <polygon points="25,5 45,15 25,25 5,15" fill="#818CF8" fillOpacity="0.4" stroke="#C084FC" strokeWidth="1" />
          <polygon points="5,15 25,25 25,48 5,38" fill="#6366F1" fillOpacity="0.5" stroke="#818CF8" strokeWidth="1" />
          <polygon points="25,25 45,15 45,38 25,48" fill="#38BDF8" fillOpacity="0.6" stroke="#38BDF8" strokeWidth="1" />
        </motion.g>

        {/* Cube 2 (Bottom Right) */}
        <motion.g
          animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          transform="translate(370, 340)"
        >
          <polygon points="30,8 55,20 30,32 5,20" fill="#38BDF8" fillOpacity="0.4" stroke="#7DD3FC" strokeWidth="1" />
          <polygon points="5,20 30,32 30,58 5,46" fill="#818CF8" fillOpacity="0.5" stroke="#818CF8" strokeWidth="1" />
          <polygon points="30,32 55,20 55,46 30,58" fill="#A855F7" fillOpacity="0.6" stroke="#C084FC" strokeWidth="1" />
        </motion.g>

        {/* Cube 3 (Top Right Orbiting Node) */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          transform="translate(390, 100)"
        >
          <polygon points="18,4 32,11 18,18 4,11" fill="#C084FC" fillOpacity="0.5" stroke="#E9D5FF" strokeWidth="1" />
          <polygon points="4,11 18,18 18,32 4,25" fill="#6366F1" fillOpacity="0.6" stroke="#818CF8" strokeWidth="1" />
          <polygon points="18,18 32,11 32,25 18,32" fill="#38BDF8" fillOpacity="0.5" stroke="#38BDF8" strokeWidth="1" />
        </motion.g>

        {/* Orbiting Photon Particles */}
        <motion.circle
          r="4"
          fill="#38BDF8"
          filter="url(#glowEffect)"
          animate={{
            cx: [250, 420, 250, 80, 250],
            cy: [140, 250, 360, 250, 140],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          r="3"
          fill="#C084FC"
          filter="url(#glowEffect)"
          animate={{
            cx: [250, 100, 250, 400, 250],
            cy: [340, 250, 160, 250, 340],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
};
