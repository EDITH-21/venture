import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Play, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

export const VenturesSection = () => {
  return (
    <section id="ventures" className="bg-cosmic-bg py-28 sm:py-36 relative border-t border-white/5 overflow-hidden bg-cosmic-stars">
      {/* Background Gradient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-glow uppercase block mb-3">
            OUR VENTURES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.08]">
            IDEAS WE'RE TURNING<br />
            <span className="gradient-text-purple-cyan">
              INTO REALITY.
            </span>
          </h2>
        </div>

        {/* 4 Venture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Featured Venture — BINGEBLOCKER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-1 bg-gradient-to-b from-indigo-950/60 to-cosmic-card/80 border border-indigo-500/40 hover:border-cyan rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl shadow-card-glow group hover:-translate-y-1"
          >
            <div>
              {/* App Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-0.5 mb-6 shadow-lg">
                <div className="w-full h-full bg-cosmic-bg/80 rounded-[14px] flex items-center justify-center text-cyan-glow">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>

              <h3 className="text-2xl font-display font-black text-white tracking-tight mb-3 group-hover:text-cyan-glow transition-colors">
                BINGEBLOCKER
              </h3>

              <p className="text-xs sm:text-sm text-cosmic-muted leading-relaxed font-sans mb-6">
                A focused digital environment designed to help learners transform YouTube from distraction into a productive learning space.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="https://wa.me/919998160726?text=Hi%20Asteya,%20I'd%20like%20to%20know%20more%20about%20BingeBlocker."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-glow hover:text-white transition-colors"
              >
                <span>Explore Venture</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Cosmic Nebula Ring (To Be Announced) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-cosmic-card/50 border border-white/10 hover:border-violet/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl group hover:shadow-card-glow hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Visual Thumbnail */}
            <div className="w-full h-44 rounded-xl bg-gradient-to-b from-cosmic-surface to-cosmic-card border border-white/5 relative overflow-hidden flex items-center justify-center mb-6">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                <circle cx="100" cy="100" r="50" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
                <ellipse cx="100" cy="100" rx="65" ry="30" stroke="#A855F7" strokeWidth="2" transform="rotate(-30 100 100)" />
                <circle cx="100" cy="100" r="16" fill="#818CF8" fillOpacity="0.4" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-card via-transparent to-transparent" />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-cosmic-subtle font-semibold">
                TO BE ANNOUNCED
              </span>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cosmic-muted group-hover:text-white group-hover:bg-white/10 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Glowing Prism Pyramid (To Be Announced) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-cosmic-card/50 border border-white/10 hover:border-violet/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl group hover:shadow-card-glow hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Visual Thumbnail */}
            <div className="w-full h-44 rounded-xl bg-gradient-to-b from-cosmic-surface to-cosmic-card border border-white/5 relative overflow-hidden flex items-center justify-center mb-6">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                <polygon points="100,35 155,145 45,145" stroke="#C084FC" strokeWidth="2" fill="#6366F1" fillOpacity="0.2" />
                <line x1="100" y1="35" x2="100" y2="145" stroke="#38BDF8" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="8" fill="#38BDF8" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-card via-transparent to-transparent" />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-cosmic-subtle font-semibold">
                TO BE ANNOUNCED
              </span>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cosmic-muted group-hover:text-white group-hover:bg-white/10 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Cosmic Energy Wave (To Be Announced) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-cosmic-card/50 border border-white/10 hover:border-violet/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl group hover:shadow-card-glow hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Visual Thumbnail */}
            <div className="w-full h-44 rounded-xl bg-gradient-to-b from-cosmic-surface to-cosmic-card border border-white/5 relative overflow-hidden flex items-center justify-center mb-6">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                <path d="M 20 120 Q 60 60 100 120 T 180 120" stroke="#38BDF8" strokeWidth="2" fill="none" />
                <path d="M 20 140 Q 60 90 100 140 T 180 140" stroke="#818CF8" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M 20 100 Q 60 40 100 100 T 180 100" stroke="#C084FC" strokeWidth="1" fill="none" opacity="0.4" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-card via-transparent to-transparent" />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-cosmic-subtle font-semibold">
                TO BE ANNOUNCED
              </span>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cosmic-muted group-hover:text-white group-hover:bg-white/10 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
