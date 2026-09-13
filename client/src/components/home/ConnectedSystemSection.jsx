import React from 'react';
import { motion } from 'framer-motion';

export const ConnectedSystemSection = () => {
  return (
    <section id="system" className="bg-white py-24 sm:py-32 border-b border-slate-200 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-3">
            SECTION 03 — ASTEYA SYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            DESIGN. TECHNOLOGY. BUSINESS. CONNECTED.
          </h2>
          <p className="text-sm text-slate-600 mt-4 max-w-xl mx-auto font-sans">
            An integrated multi-layer system architecture connecting conceptual strategy directly to resilient engineering and continuous business expansion.
          </p>
        </div>

        {/* 3D Isometric Connected Tier Stack */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[1.6/1] flex items-center justify-center">
          <svg
            className="w-full h-full drop-shadow-xl"
            viewBox="0 0 800 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="tierGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Connecting Diagonal Blueprint Vector Lines */}
            <g stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 4">
              <line x1="160" y1="130" x2="330" y2="180" />
              <line x1="160" y1="250" x2="310" y2="250" />
              <line x1="160" y1="370" x2="330" y2="320" />

              <line x1="640" y1="130" x2="470" y2="180" />
              <line x1="640" y1="250" x2="490" y2="250" />
              <line x1="640" y1="370" x2="470" y2="320" />
            </g>

            {/* Tier 3 — Bottom Layer (GROWTH & DESIGN) */}
            <motion.g
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <polygon
                points="400,280 580,340 400,400 220,340"
                fill="url(#tierGrad)"
                stroke="#38BDF8"
                strokeWidth="1.5"
              />
              <polygon
                points="400,295 540,340 400,385 260,340"
                fill="none"
                stroke="#0F172A"
                strokeOpacity="0.1"
                strokeWidth="1"
              />
            </motion.g>

            {/* Tier 2 — Middle Core Layer (ASTEYA) */}
            <motion.g
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <polygon
                points="400,190 580,250 400,310 220,250"
                fill="#FFFFFF"
                stroke="#0284C7"
                strokeWidth="2"
                filter="drop-shadow(0 10px 20px rgba(2,132,199,0.12))"
              />

              {/* Core Central Asteya Emblem Box */}
              <rect
                x="330"
                y="230"
                width="140"
                height="40"
                rx="8"
                fill="#0F172A"
                filter="drop-shadow(0 4px 8px rgba(0,0,0,0.2))"
              />
              <text
                x="400"
                y="255"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Inter, sans-serif"
                fontWeight="800"
                fontSize="14"
                letterSpacing="3"
              >
                ASTEYA
              </text>
            </motion.g>

            {/* Tier 1 — Top Layer (IDEA & TECHNOLOGY) */}
            <motion.g
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <polygon
                points="400,100 580,160 400,220 220,160"
                fill="url(#tierGrad)"
                stroke="#60A5FA"
                strokeWidth="1.5"
              />
              <circle cx="400" cy="160" r="4" fill="#0284C7" />
            </motion.g>

            {/* Left Labels with Glass Badges */}
            <g transform="translate(70, 110)">
              <rect width="100" height="36" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
              <text x="50" y="22" textAnchor="middle" fill="#0F172A" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="12">
                IDEA
              </text>
            </g>

            <g transform="translate(70, 230)">
              <rect width="100" height="36" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
              <text x="50" y="22" textAnchor="middle" fill="#0F172A" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="12">
                STRATEGY
              </text>
            </g>

            <g transform="translate(70, 350)">
              <rect width="100" height="36" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
              <text x="50" y="22" textAnchor="middle" fill="#0F172A" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="12">
                DESIGN
              </text>
            </g>

            {/* Right Labels with Glass Badges */}
            <g transform="translate(630, 110)">
              <rect width="130" height="36" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
              <text x="65" y="22" textAnchor="middle" fill="#0F172A" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="12">
                TECHNOLOGY
              </text>
            </g>

            <g transform="translate(630, 230)">
              <rect width="130" height="36" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
              <text x="65" y="22" textAnchor="middle" fill="#0F172A" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="12">
                EXPERIENCE
              </text>
            </g>

            <g transform="translate(630, 350)">
              <rect width="130" height="36" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
              <text x="65" y="22" textAnchor="middle" fill="#0F172A" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="12">
                GROWTH
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
