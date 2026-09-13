import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Shield, Zap, Sparkles, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

export const VenturesSection = () => {
  const [activeFocusMode, setActiveFocusMode] = useState('coding');

  return (
    <section id="ventures" className="bg-darkness text-white py-24 sm:py-36 relative overflow-hidden bg-dark-grid border-b border-darkness-border">
      {/* Subtle Purple / Cyan Ambient Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase block mb-3">
            ASTEYA VENTURES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-[1.12]">
            WE BUILD OUR OWN FUTURE TOO.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed font-sans">
            Beyond client systems, our studio incubates and scales proprietary software products addressing deep consumer and institutional needs.
          </p>
        </div>

        {/* BingeBlocker Showcase Card */}
        <div className="bg-darkness-surface border border-darkness-border rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Product Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800/60 text-sky-300 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>ACTIVE VENTURE · EXTENSION / APP</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                BINGEBLOCKER
              </h3>

              <p className="text-base font-sans font-semibold text-sky-200 leading-snug">
                Transforming YouTube into a Productive Learning Environment.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                An intelligent browser layer that strips addictive algorithmic recommendation loops, shorts, and clickbait distraction—replacing them with structured focus feeds, note capture, and syllabus study tracks.
              </p>

              <div className="pt-2">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-cyan-glow hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>EXPLORE VENTURE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Interactive Product Mockup */}
            <div className="lg:col-span-7">
              <div className="bg-darkness-card border border-darkness-border rounded-2xl p-5 shadow-2xl space-y-4">
                {/* Mock Browser Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400">bingeblocker.app/study</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    FOCUS ACTIVE: 98%
                  </span>
                </div>

                {/* Focus Filter Pills */}
                <div className="flex items-center gap-2 pt-1 text-xs font-mono">
                  {['coding', 'academics', 'deep-work'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setActiveFocusMode(mode)}
                      className={`px-3 py-1.5 rounded-lg uppercase tracking-wider transition-all ${
                        activeFocusMode === mode
                          ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>

                {/* Dashboard Metrics Bar */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-darkness-surface p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block">Saved Time</span>
                    <span className="text-lg font-bold text-white">4h 18m</span>
                  </div>
                  <div className="bg-darkness-surface p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block">Shorts Blocked</span>
                    <span className="text-lg font-bold text-sky-400">142</span>
                  </div>
                  <div className="bg-darkness-surface p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block">Study Streak</span>
                    <span className="text-lg font-bold text-emerald-400">18 Days</span>
                  </div>
                </div>

                {/* Video Clean Feed Simulation */}
                <div className="bg-darkness-surface p-4 rounded-xl border border-sky-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-300">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white font-sans">
                        MIT 6.006: Introduction to Algorithms (Spring Term)
                      </h5>
                      <span className="text-[10px] font-mono text-slate-400">Clean Lecture Mode · Comments Filtered</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-sky-300 font-semibold">1:18:40</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Lifecycle Timeline */}
        <div className="border-t border-white/10 pt-12">
          <div className="text-center mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
              More ventures are currently being built inside the Asteya Lab.
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-darkness-surface p-4 rounded-xl border border-white/5 text-center">
              <span className="text-sky-400 font-bold block mb-1">01 ARCHITECT</span>
              <span className="text-slate-400 text-[11px]">System Blueprints</span>
            </div>
            <div className="bg-darkness-surface p-4 rounded-xl border border-white/5 text-center">
              <span className="text-sky-400 font-bold block mb-1">02 DESIGN</span>
              <span className="text-slate-400 text-[11px]">Interactive UI/UX</span>
            </div>
            <div className="bg-darkness-surface p-4 rounded-xl border border-white/5 text-center">
              <span className="text-sky-400 font-bold block mb-1">03 ENGINEER</span>
              <span className="text-slate-400 text-[11px]">Full Stack Deployment</span>
            </div>
            <div className="bg-darkness-surface p-4 rounded-xl border border-white/5 text-center">
              <span className="text-sky-400 font-bold block mb-1">04 LAUNCH</span>
              <span className="text-slate-400 text-[11px]">Global Distribution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
