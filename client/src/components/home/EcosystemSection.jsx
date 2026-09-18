import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Box, Code2, Lightbulb } from 'lucide-react';

export const EcosystemSection = () => {
  return (
    <section className="bg-cosmic-bg py-28 sm:py-36 relative border-t border-white/5 overflow-hidden bg-cosmic-stars">
      {/* Background Central Nebula Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-dark/30 to-cyan-dark/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-glow uppercase block">
              ASTEYA ECOSYSTEM
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.08] text-white">
              A STRONGER<br />
              <span className="gradient-text-purple-cyan">
                TOMORROW,<br />
                TOGETHER.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-cosmic-muted leading-relaxed font-sans max-w-md">
              Asteya is more than a company — it's a growing ecosystem of ventures, products and technologies, working together to create lasting impact.
            </p>

            <div className="pt-2">
              <a
                href="#ventures"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-glow hover:text-white uppercase tracking-wider group transition-colors"
              >
                <span>Discover Our Ecosystem</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right 4-Node Planetary Orbital Ecosystem Visual */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full max-w-xl aspect-square flex items-center justify-center">
              {/* SVG Orbit Tracks & Planetary Connections */}
              <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#6366F1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
                  </linearGradient>

                  <radialGradient id="centerCoreGrad" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#C084FC" />
                    <stop offset="50%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#0B0F24" />
                  </radialGradient>

                  <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Outer Concentric Orbit Track Lines */}
                <circle cx="250" cy="250" r="180" stroke="#38BDF8" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="250" cy="250" r="130" stroke="#818CF8" strokeOpacity="0.2" strokeWidth="1" />

                {/* Radiating Celestial Coordinate Lines */}
                <line x1="250" y1="70" x2="250" y2="430" stroke="#818CF8" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="70" y1="250" x2="430" y2="250" stroke="#818CF8" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3" />

                {/* Diagonal Connection Laser Beams to 4 Orbiters */}
                <line x1="250" y1="250" x2="140" y2="140" stroke="url(#orbitGrad)" strokeWidth="1.5" strokeDasharray="3 4" />
                <line x1="250" y1="250" x2="360" y2="140" stroke="url(#orbitGrad)" strokeWidth="1.5" strokeDasharray="3 4" />
                <line x1="250" y1="250" x2="140" y2="360" stroke="url(#orbitGrad)" strokeWidth="1.5" strokeDasharray="3 4" />
                <line x1="250" y1="250" x2="360" y2="360" stroke="url(#orbitGrad)" strokeWidth="1.5" strokeDasharray="3 4" />

                {/* Rotating Outer Energy Rings */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="180"
                  stroke="url(#orbitGrad)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="60 120"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  style={{ originX: '250px', originY: '250px' }}
                />

                {/* Central ASTEYA Glowing Nucleus */}
                <g filter="url(#coreGlow)">
                  <circle
                    cx="250"
                    cy="250"
                    r="64"
                    fill="url(#centerCoreGrad)"
                    stroke="#C084FC"
                    strokeWidth="2"
                  />
                </g>
              </svg>

              {/* Central Official Asteya Logo Floating Inside Core */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-20 h-20 flex flex-col items-center justify-center">
                  <img
                    src="/asteya-logo.png"
                    alt="ASTEYA Center Logo"
                    className="w-12 h-12 object-contain filter invert drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                  />
                  <span className="font-display font-bold text-[10px] tracking-[0.2em] text-white mt-1">
                    ASTEYA
                  </span>
                </div>
              </div>

              {/* 4 Satellite Spherical Nodes */}
              {/* Node 1: VENTURES (Top Left) */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute top-[18%] left-[18%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-900/90 to-cosmic-bg/95 border border-indigo-400/40 p-2 shadow-card-glow flex flex-col items-center justify-center cursor-pointer group backdrop-blur-xl"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-cyan-glow mb-1">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-white group-hover:text-cyan-glow transition-colors">
                  VENTURES
                </span>
              </motion.div>

              {/* Node 2: PRODUCTS (Top Right) */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute top-[18%] right-[18%] translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-purple-900/90 to-cosmic-bg/95 border border-purple-400/40 p-2 shadow-card-glow flex flex-col items-center justify-center cursor-pointer group backdrop-blur-xl"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-violet-light mb-1">
                  <Box className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-white group-hover:text-violet-light transition-colors">
                  PRODUCTS
                </span>
              </motion.div>

              {/* Node 3: TECHNOLOGY (Bottom Left) */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-[18%] left-[18%] -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-950/90 to-cosmic-bg/95 border border-cyan-400/40 p-2 shadow-cyan-glow flex flex-col items-center justify-center cursor-pointer group backdrop-blur-xl"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan mb-1">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-white group-hover:text-cyan transition-colors">
                  TECHNOLOGY
                </span>
              </motion.div>

              {/* Node 4: INNOVATION (Bottom Right) */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-[18%] right-[18%] translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-violet-950/90 to-cosmic-bg/95 border border-violet-400/40 p-2 shadow-card-glow flex flex-col items-center justify-center cursor-pointer group backdrop-blur-xl"
              >
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-glow mb-1">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-white group-hover:text-violet-glow transition-colors">
                  INNOVATION
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
