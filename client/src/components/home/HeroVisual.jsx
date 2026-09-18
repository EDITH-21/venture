import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export const HeroVisual = () => {
  // 3D Interactive Mouse Parallax Tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['18deg', '-18deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-18deg', '18deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center select-none py-4 cursor-grab active:cursor-grabbing"
      style={{ perspective: 1200 }}
    >
      {/* Background Volumetric Nebula Corona Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-dark/50 via-purple-600/30 to-cyan-dark/40 rounded-full blur-[110px] pointer-events-none animate-nebula-pulse" />

      {/* 3D Parallax Container */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Main 3D Celestial Orbital Vector Assembly */}
        <svg
          className="w-full h-full drop-shadow-[0_0_60px_rgba(139,92,246,0.5)]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="sphereCoreGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#7C3AED" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#1E1B4B" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#040711" />
            </radialGradient>

            <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="ringGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E879F9" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.15" />
            </linearGradient>

            <linearGradient id="ringGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#C084FC" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4338CA" stopOpacity="0.1" />
            </linearGradient>

            <filter id="superGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="9" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 3D Gimbal Ring 1 — Outer Diagonal Orbit */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '250px', originY: '250px' }}
          >
            <ellipse
              cx="250"
              cy="250"
              rx="225"
              ry="105"
              stroke="url(#ringGrad1)"
              strokeWidth="2"
              strokeDasharray="180 90"
              transform="rotate(-25 250 250)"
              filter="url(#superGlow)"
            />
            <circle cx="460" cy="210" r="4.5" fill="#38BDF8" filter="url(#superGlow)" />
          </motion.g>

          {/* 3D Gimbal Ring 2 — Tilted Reverse Orbit */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '250px', originY: '250px' }}
          >
            <ellipse
              cx="250"
              cy="250"
              rx="205"
              ry="85"
              stroke="url(#ringGrad2)"
              strokeWidth="2.5"
              strokeDasharray="140 70"
              transform="rotate(40 250 250)"
              filter="url(#superGlow)"
            />
            <circle cx="110" cy="180" r="4" fill="#C084FC" filter="url(#superGlow)" />
          </motion.g>

          {/* 3D Gimbal Ring 3 — Equatorial Precision Horizon Ring */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '250px', originY: '250px' }}
          >
            <ellipse
              cx="250"
              cy="250"
              rx="185"
              ry="65"
              stroke="url(#ringGrad3)"
              strokeWidth="1.5"
              strokeDasharray="10 8"
              transform="rotate(-65 250 250)"
              opacity="0.6"
            />
          </motion.g>

          {/* Central Planetary Dark Sphere */}
          <g filter="url(#superGlow)">
            <circle
              cx="250"
              cy="250"
              r="112"
              fill="url(#sphereCoreGrad)"
              stroke="#E879F9"
              strokeWidth="2"
              strokeOpacity="0.7"
            />
          </g>

          {/* Glowing Inner Spherical Horizon Rim */}
          <circle
            cx="250"
            cy="250"
            r="98"
            fill="none"
            stroke="url(#ringGrad1)"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Floating Translucent Refractive Crystals */}
          {/* Crystal 1 (Top Left) */}
          <motion.g
            animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            transform="translate(65, 60)"
          >
            <polygon points="28,6 52,18 28,30 4,18" fill="#818CF8" fillOpacity="0.45" stroke="#C084FC" strokeWidth="1.2" />
            <polygon points="4,18 28,30 28,58 4,46" fill="#6366F1" fillOpacity="0.55" stroke="#818CF8" strokeWidth="1.2" />
            <polygon points="28,30 52,18 52,46 28,58" fill="#38BDF8" fillOpacity="0.65" stroke="#38BDF8" strokeWidth="1.2" />
          </motion.g>

          {/* Crystal 2 (Bottom Right) */}
          <motion.g
            animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            transform="translate(380, 350)"
          >
            <polygon points="32,8 60,22 32,36 4,22" fill="#38BDF8" fillOpacity="0.45" stroke="#7DD3FC" strokeWidth="1.2" />
            <polygon points="4,22 32,36 32,64 4,50" fill="#818CF8" fillOpacity="0.55" stroke="#818CF8" strokeWidth="1.2" />
            <polygon points="32,36 60,22 60,50 32,64" fill="#A855F7" fillOpacity="0.65" stroke="#C084FC" strokeWidth="1.2" />
          </motion.g>

          {/* Crystal 3 (Top Right Orbit Node) */}
          <motion.g
            animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            transform="translate(395, 95)"
          >
            <polygon points="20,4 36,12 20,20 4,12" fill="#C084FC" fillOpacity="0.5" stroke="#E9D5FF" strokeWidth="1.2" />
            <polygon points="4,12 20,20 20,36 4,28" fill="#6366F1" fillOpacity="0.6" stroke="#818CF8" strokeWidth="1.2" />
            <polygon points="20,20 36,12 36,28 20,36" fill="#38BDF8" fillOpacity="0.55" stroke="#38BDF8" strokeWidth="1.2" />
          </motion.g>
        </svg>

        {/* Central Exact Asteya Monogram Floating with 3D Depth */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ transform: 'translateZ(65px)' }}
        >
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Ambient Glowing Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/80 to-cyan-400/80 rounded-full blur-2xl opacity-90 animate-pulse-glow" />

            {/* Inverted Monogram Image with Radiant Drop Shadow */}
            <img
              src="/asteya-logo.png"
              alt="ASTEYA Monogram"
              className="relative z-10 w-28 h-28 object-contain filter invert mix-blend-screen drop-shadow-[0_0_30px_rgba(168,85,247,1)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
