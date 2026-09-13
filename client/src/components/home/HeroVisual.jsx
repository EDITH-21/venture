import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Sparkles, Layers, Cpu, Compass, ArrowUpRight } from 'lucide-react';

export const HeroVisual = () => {
  const [activeLayer, setActiveLayer] = useState('all');

  const nodes = [
    { id: 'web', name: 'WEB', desc: 'High-Performance Web Systems', x: 260, y: 110 },
    { id: 'brand', name: 'BRAND', desc: 'Interactive Brand Systems', x: 420, y: 120 },
    { id: 'technology', name: 'TECHNOLOGY', desc: 'Deep Tech & Scalable Infra', x: 190, y: 260 },
    { id: 'ventures', name: 'VENTURES', desc: 'Proprietary Digital Products', x: 380, y: 280 },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[1.15/1] flex items-center justify-center select-none py-4">
      {/* Background Subtle Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Isometric SVG Diagram */}
      <svg
        className="w-full h-full drop-shadow-2xl"
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="discGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="discGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EBF8FF" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="cyanStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Connection Circuit Bus Lines */}
        <g stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 4" opacity="0.6">
          <path d="M 50 120 L 220 120 L 300 200" />
          <path d="M 550 100 L 450 100 L 380 180" />
          <path d="M 580 340 L 420 340 L 340 280" />
          <path d="M 30 380 L 180 380 L 260 300" />
        </g>

        {/* Lower Isometric Ellipse Tier (Ventures & Technology) */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse
            cx="300"
            cy="300"
            rx="210"
            ry="95"
            fill="url(#discGrad1)"
            stroke="#BAE6FD"
            strokeWidth="1.5"
          />
          <ellipse
            cx="300"
            cy="300"
            rx="180"
            ry="78"
            fill="none"
            stroke="#0284C7"
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </motion.g>

        {/* Middle Connecting Pillars / Glass Columns */}
        <path
          d="M 170 200 L 170 290 M 430 200 L 430 290 M 300 130 L 300 230"
          stroke="#0284C7"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.5"
        />

        {/* Upper Isometric Ellipse Tier (Web & Brand) */}
        <motion.g
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse
            cx="300"
            cy="200"
            rx="200"
            ry="90"
            fill="url(#discGrad2)"
            stroke="url(#cyanStroke)"
            strokeWidth="2"
            filter="drop-shadow(0 15px 25px rgba(2,132,199,0.15))"
          />

          <ellipse
            cx="300"
            cy="200"
            rx="140"
            ry="60"
            fill="none"
            stroke="#0F172A"
            strokeOpacity="0.15"
            strokeWidth="1"
          />

          {/* Core Central Platform Label "ASTEYA" */}
          <g className="cursor-pointer">
            <rect
              x="230"
              y="175"
              width="140"
              height="50"
              rx="12"
              fill="#0F172A"
              filter="drop-shadow(0 8px 16px rgba(15,23,42,0.3))"
            />
            <text
              x="300"
              y="206"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="Inter, sans-serif"
              fontWeight="800"
              fontSize="16"
              letterSpacing="3"
            >
              ASTEYA
            </text>
            <circle cx="245" cy="200" r="3" fill="#38BDF8" />
            <circle cx="355" cy="200" r="3" fill="#38BDF8" />
          </g>

          {/* Orbiting Laser Point along upper rim */}
          <motion.circle
            r="4"
            fill="#0284C7"
            filter="url(#glowFilter)"
            animate={{
              cx: [300, 480, 300, 120, 300],
              cy: [110, 200, 290, 200, 110],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
        </motion.g>

        {/* 4 Architectural Floating Category Badges */}
        {/* 1. WEB */}
        <g transform="translate(230, 95)" className="cursor-pointer">
          <rect
            x="0"
            y="0"
            width="72"
            height="26"
            rx="6"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.04))"
          />
          <text x="36" y="17" textAnchor="middle" fill="#0F172A" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="11" letterSpacing="1">
            WEB
          </text>
        </g>

        {/* 2. BRAND */}
        <g transform="translate(390, 105)" className="cursor-pointer">
          <rect
            x="0"
            y="0"
            width="82"
            height="26"
            rx="6"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.04))"
          />
          <text x="41" y="17" textAnchor="middle" fill="#0F172A" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="11" letterSpacing="1">
            BRAND
          </text>
        </g>

        {/* 3. TECHNOLOGY */}
        <g transform="translate(140, 260)" className="cursor-pointer">
          <rect
            x="0"
            y="0"
            width="120"
            height="26"
            rx="6"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.04))"
          />
          <text x="60" y="17" textAnchor="middle" fill="#0F172A" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="11" letterSpacing="1">
            TECHNOLOGY
          </text>
        </g>

        {/* 4. VENTURES */}
        <g transform="translate(370, 280)" className="cursor-pointer">
          <rect
            x="0"
            y="0"
            width="100"
            height="26"
            rx="6"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.04))"
          />
          <text x="50" y="17" textAnchor="middle" fill="#0F172A" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="11" letterSpacing="1">
            VENTURES
          </text>
        </g>

        {/* Isometric Circuit Grid Nodes */}
        <circle cx="110" cy="180" r="3" fill="#94A3B8" />
        <circle cx="490" cy="220" r="3" fill="#94A3B8" />
        <circle cx="280" cy="370" r="3" fill="#38BDF8" />
        <circle cx="460" cy="340" r="3" fill="#38BDF8" />
      </svg>

      {/* Floating System Status Pill */}
      <div className="absolute -bottom-2 left-6 bg-white/90 backdrop-blur-md border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-mono text-slate-600 font-medium">
          ASTEYA SYSTEM ARCHITECTURE · v2.4
        </span>
      </div>
    </div>
  );
};
