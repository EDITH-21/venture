import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layout, 
  BarChart3, 
  ShoppingBag, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Zap, 
  Smartphone,
  Globe,
  Sparkles
} from 'lucide-react';

export const HeroVisual = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Web Application', icon: Layout },
    { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
    { id: 'analytics', label: 'Analytics Engine', icon: BarChart3 },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Background Ambient Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-champagne/20 via-transparent to-sage/15 rounded-3xl blur-2xl pointer-events-none opacity-60" />

      {/* Main Container Mockup */}
      <div className="relative rounded-2xl bg-graphite/95 backdrop-blur-xl border border-champagne/30 shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Browser Top Window Bar */}
        <div className="px-4 py-3 bg-obsidian border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-[10px] font-mono text-text-muted/70 flex items-center gap-1">
              <Globe className="w-3 h-3 text-champagne" /> vanguard-client.app
            </span>
          </div>

          <div className="flex items-center gap-1 bg-graphite/80 px-2 py-0.5 rounded text-[9px] font-mono text-champagne border border-champagne/20">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            LIVE DEMO
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-3 bg-obsidian/60 p-1.5 border-b border-white/5 gap-1 text-xs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md font-sans text-[11px] font-semibold transition-all ${
                  isActive
                    ? 'bg-graphite text-champagne border border-champagne/30 shadow-sm'
                    : 'text-text-muted hover:text-warm-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Body */}
        <div className="p-5 min-h-[290px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-obsidian/80 p-3 rounded-lg border border-white/5">
                    <span className="text-[10px] font-mono text-text-muted block">Monthly Active</span>
                    <span className="text-base font-bold text-warm-white">48,290</span>
                    <span className="text-[9px] text-sage flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-2.5 h-2.5" /> +24.8%
                    </span>
                  </div>
                  <div className="bg-obsidian/80 p-3 rounded-lg border border-white/5">
                    <span className="text-[10px] font-mono text-text-muted block">Conversion Rate</span>
                    <span className="text-base font-bold text-champagne">6.42%</span>
                    <span className="text-[9px] text-sage flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-2.5 h-2.5" /> +1.8%
                    </span>
                  </div>
                  <div className="bg-obsidian/80 p-3 rounded-lg border border-white/5">
                    <span className="text-[10px] font-mono text-text-muted block">System Uptime</span>
                    <span className="text-base font-bold text-warm-white">99.98%</span>
                    <span className="text-[9px] text-text-muted mt-0.5 block">Sub-10ms</span>
                  </div>
                </div>

                {/* Dashboard Chart Mock */}
                <div className="bg-obsidian/90 p-3.5 rounded-lg border border-champagne/15 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-warm-white font-semibold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-champagne" /> Real-Time Platform Throughput
                    </span>
                    <span className="text-[10px] font-mono text-champagne">Optimized</span>
                  </div>
                  {/* Bar graph visual */}
                  <div className="flex items-end gap-1.5 h-16 pt-2">
                    {[45, 60, 38, 72, 85, 95, 78, 92, 100, 88, 96, 110].map((val, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        animate={{ height: `${(val / 110) * 100}%` }}
                        transition={{ duration: 0.6, delay: idx * 0.03 }}
                        className={`flex-1 rounded-t-sm ${
                          idx >= 9 ? 'bg-champagne' : 'bg-champagne/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-text-muted pt-1">
                  <span className="flex items-center gap-1 text-sage">
                    <CheckCircle2 className="w-3 h-3" /> Fully Integrated API & Admin
                  </span>
                  <span>Automated Sync</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'ecommerce' && (
              <motion.div
                key="ecommerce"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                {/* Store Header Preview */}
                <div className="flex items-center justify-between bg-obsidian/80 p-3 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-champagne/20 border border-champagne/40 flex items-center justify-center text-champagne">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-warm-white">Direct-to-Consumer Store</h4>
                      <p className="text-[10px] text-text-muted">Instant Checkout & Payment Gateway</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-champagne">₹1,84,500 <span className="text-[9px] text-text-muted font-normal">today</span></span>
                </div>

                {/* Product Items List */}
                <div className="space-y-2">
                  {[
                    { name: 'Signature Enterprise Kit', price: '₹14,999', stock: 'In Stock', tag: 'Fast Selling' },
                    { name: 'Digital Operations Bundle', price: '₹28,500', stock: 'Instant Delivery', tag: 'Popular' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded bg-obsidian/60 border border-white/5 text-xs">
                      <div>
                        <span className="font-semibold text-warm-white text-[11px] block">{item.name}</span>
                        <span className="text-[9px] text-sage font-mono">{item.stock}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-champagne text-xs block">{item.price}</span>
                        <span className="text-[8px] uppercase tracking-wider text-text-muted bg-white/5 px-1.5 py-0.5 rounded">{item.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checkout Integration Badge */}
                <div className="p-2.5 rounded bg-champagne/10 border border-champagne/30 flex items-center justify-between text-[10px] font-mono text-champagne">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Razorpay & UPI Instant Settlement
                  </span>
                  <span className="font-bold">1-Click Pay</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                {/* Traffic Breakdown */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-obsidian/90 p-3 rounded-lg border border-champagne/20">
                    <span className="text-[10px] font-mono text-text-muted">Total Inquiries</span>
                    <span className="text-lg font-bold text-champagne block">348 Leads</span>
                    <span className="text-[9px] text-sage">+38% vs last month</span>
                  </div>
                  <div className="bg-obsidian/90 p-3 rounded-lg border border-white/5">
                    <span className="text-[10px] font-mono text-text-muted">Avg Session Time</span>
                    <span className="text-lg font-bold text-warm-white block">3m 42s</span>
                    <span className="text-[9px] text-text-muted">High Engagement</span>
                  </div>
                </div>

                {/* Top Conversion Channels */}
                <div className="bg-obsidian/80 p-3 rounded-lg border border-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
                    Top Referral Channels
                  </span>
                  <div className="space-y-1.5 text-[11px] font-mono">
                    <div className="flex justify-between items-center">
                      <span className="text-warm-white">Direct & WhatsApp</span>
                      <span className="text-champagne font-bold">54%</span>
                    </div>
                    <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                      <div className="w-[54%] bg-champagne h-full" />
                    </div>

                    <div className="flex justify-between items-center pt-1">
                      <span className="text-warm-white">Organic Google Search</span>
                      <span className="text-sage font-bold">32%</span>
                    </div>
                    <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                      <div className="w-[32%] bg-sage h-full" />
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-text-muted flex items-center justify-between pt-1">
                  <span>Audited by Vanguard Telemetry</span>
                  <span className="text-champagne flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3 h-3" /> Growth Ready
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Badge Bar */}
        <div className="px-5 py-2.5 bg-obsidian/90 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sage" /> Custom Built for Growth
          </span>
          <span className="text-champagne font-semibold">100% Tailored</span>
        </div>
      </div>
    </div>
  );
};
