import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const WhoWeAreSection = () => {
  const pillars = [
    'TECHNOLOGY',
    'DESIGN',
    'DIGITAL SERVICES',
    'VENTURE BUILDING',
  ];

  return (
    <section id="about" className="bg-cosmic-bg py-28 sm:py-36 relative border-t border-white/5 overflow-hidden bg-cosmic-stars">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-violet/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-glow uppercase block">
              WHO WE ARE
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.08] text-white">
              MORE THAN A COMPANY.<br />
              <span className="gradient-text-purple-cyan">
                AN ECOSYSTEM FOR IDEAS.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-cosmic-muted leading-relaxed font-sans max-w-lg">
              We combine technology, design, digital services and venture building to turn ideas into useful products and businesses.
            </p>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-glow hover:text-white uppercase tracking-wider group transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Holographic Crystal Cube with Branching Connected Nodes */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[1.2/1] flex items-center justify-center">
              {/* SVG 3D Isometric Crystal Cube with Cosmic Mountain Landscape */}
              <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C084FC" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
                  </linearGradient>

                  <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818CF8" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0D1326" stopOpacity="0.8" />
                  </linearGradient>

                  <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#040711" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* 3D Isometric Glass Hyper-Cube Facets */}
                <motion.g
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Top Polygon */}
                  <polygon
                    points="200,60 320,120 200,180 80,120"
                    fill="url(#cubeTop)"
                    stroke="#C084FC"
                    strokeWidth="1.5"
                  />

                  {/* Left Polygon (Mountain Vista Silhouette Inside) */}
                  <polygon
                    points="80,120 200,180 200,320 80,260"
                    fill="url(#cubeLeft)"
                    stroke="#818CF8"
                    strokeWidth="1.5"
                  />
                  {/* Internal Mountain Landscape Lines */}
                  <path
                    d="M 85 240 L 120 200 L 150 220 L 195 185 L 195 315 L 85 255 Z"
                    fill="#4338CA"
                    fillOpacity="0.4"
                  />

                  {/* Right Polygon */}
                  <polygon
                    points="200,180 320,120 320,260 200,320"
                    fill="url(#cubeRight)"
                    stroke="#38BDF8"
                    strokeWidth="1.5"
                  />
                  {/* Internal Neon Glow Horizon */}
                  <path
                    d="M 205 185 L 240 215 L 280 195 L 315 235 L 315 255 L 205 315 Z"
                    fill="#0284C7"
                    fillOpacity="0.35"
                  />
                </motion.g>

                {/* Connected Branching Wireframe Lines to Right Node Badges */}
                <g stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6">
                  <line x1="320" y1="120" x2="390" y2="100" />
                  <line x1="320" y1="170" x2="390" y2="160" />
                  <line x1="320" y1="210" x2="390" y2="220" />
                  <line x1="320" y1="260" x2="390" y2="280" />
                </g>

                {/* Nodes with End Dots */}
                <circle cx="390" cy="100" r="3.5" fill="#38BDF8" />
                <circle cx="390" cy="160" r="3.5" fill="#818CF8" />
                <circle cx="390" cy="220" r="3.5" fill="#C084FC" />
                <circle cx="390" cy="280" r="3.5" fill="#38BDF8" />
              </svg>

              {/* Right Connected Branching Badges */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 text-xs font-mono">
                {pillars.map((pillar, i) => (
                  <motion.div
                    key={pillar}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-cosmic-card/80 border border-white/10 hover:border-cyan hover:shadow-cyan-glow text-white font-semibold transition-all backdrop-blur-md cursor-pointer group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow group-hover:scale-125 transition-transform" />
                    <span className="tracking-widest">{pillar}</span>
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
