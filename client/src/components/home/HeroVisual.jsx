import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Zap, Activity, Code2, Layers, CheckCircle2, Lock } from 'lucide-react';

export const HeroVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center select-none pointer-events-none sm:pointer-events-auto">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-80" />
      <div className="absolute w-72 h-72 rounded-full bg-champagne/10 blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-4 rounded-2xl opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(200, 169, 107, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 169, 107, 0.15) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Outer Rotating Subtle Orbital Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[440px] h-[440px] rounded-full border border-champagne/15 border-dashed"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[340px] h-[340px] rounded-full border border-champagne/20"
      />

      {/* Floating Center Core Console Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-20 w-80 rounded-xl bg-graphite/90 backdrop-blur-xl border border-champagne/30 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-champagne/15">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-warm-white font-semibold">
              Vanguard Core Engine
            </span>
          </div>
          <span className="text-[9px] font-mono text-champagne bg-champagne/10 px-2 py-0.5 rounded-sm border border-champagne/30">
            v2.8 · ACTIVE
          </span>
        </div>

        {/* Telemetry Metrics */}
        <div className="py-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-text-muted flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-champagne" /> System Throughput
            </span>
            <span className="text-warm-white font-bold">99.98% / 1.2ms</span>
          </div>

          {/* Dynamic Progress Indicator */}
          <div className="w-full bg-obsidian/80 h-1.5 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '88%' }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-champagne-dark via-champagne to-champagne-light rounded-full"
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <span className="text-text-muted flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-sage" /> Security State
            </span>
            <span className="text-sage font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Shield Encrypted
            </span>
          </div>
        </div>

        {/* Live Code/Event Stream Preview */}
        <div className="bg-obsidian/90 rounded-md p-3 border border-champagne/10 text-[10px] font-mono text-text-muted space-y-1">
          <div className="text-champagne/80 flex items-center justify-between">
            <span>&gt; pipeline.initSync()</span>
            <span className="text-[8px] text-text-muted">NODE_01</span>
          </div>
          <div className="text-warm-white/70">&gt; state: nominal_sync_complete</div>
          <div className="text-sage/80">&gt; multi_cluster_ready [38 ms]</div>
        </div>
      </motion.div>

      {/* Floating Top Left Satellite Pill */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -left-2 z-30 flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-obsidian/95 backdrop-blur-md border border-champagne/30 shadow-xl"
      >
        <div className="w-7 h-7 rounded-sm bg-champagne/15 flex items-center justify-center text-champagne">
          <Layers className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-text-muted">Architecture</span>
          <span className="text-xs font-bold text-warm-white">Reactive MERN</span>
        </div>
      </motion.div>

      {/* Floating Bottom Right Satellite Pill */}
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-2 -right-4 z-30 flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-obsidian/95 backdrop-blur-md border border-champagne/30 shadow-xl"
      >
        <div className="w-7 h-7 rounded-sm bg-sage/15 flex items-center justify-center text-sage">
          <Zap className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-text-muted">Response Velocity</span>
          <span className="text-xs font-bold text-warm-white">Sub-10ms Global</span>
        </div>
      </motion.div>
    </div>
  );
};
