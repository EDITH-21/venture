import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles, Shield, Cpu, ArrowRight } from 'lucide-react';
import { venturesAPI } from '../services/api';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/home/CTASection';

export const VenturesPage = () => {
  const [publishedVentures, setPublishedVentures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVentures = async () => {
      try {
        const res = await venturesAPI.getAll();
        if (res.data?.success) {
          setPublishedVentures(res.data.data);
        }
      } catch (err) {
        console.warn('Ventures fetch notice:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVentures();
  }, []);

  const stealthProjects = [
    {
      num: '01',
      code: 'CORE-LABS-X1',
      domain: 'Autonomous AI & Core Systems',
      status: 'COMING SOON',
      description: 'Private R&D initiative exploring high-throughput multi-agent execution graphs for autonomous enterprise operations.',
    },
    {
      num: '02',
      code: 'EDGE-PROTO-X2',
      domain: 'Distributed Edge Protocol',
      status: 'COMING SOON',
      description: 'Zero-latency state replication layer engineered for low-power edge nodes and decentralized caching.',
    },
    {
      num: '03',
      code: 'SYNTH-UI-X3',
      domain: 'Generative Interface Framework',
      status: 'COMING SOON',
      description: 'Tokenized UI engine converting structured data schemas directly into reactive frontend components.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Ventures & Internal Technology Labs"
        description="Alongside our client work, we develop our own proprietary software products and technology ventures."
      />

      {/* Hero Header */}
      <section className="bg-obsidian text-warm-white pt-36 pb-20 border-b border-graphite-border/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-4">
              Autonomous Product Studio
            </span>
            <h1 className="text-5xl sm:text-6xl font-serif font-normal text-warm-white leading-tight mb-8">
              We're Building The Future
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
              Alongside our client work, we're building our own products and technology ventures. We believe solving enterprise problems directly informs our venture research.
            </p>
          </div>
        </div>
      </section>

      {/* Incubation Philosophy (Ivory) */}
      <section className="bg-ivory text-text-dark py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-semibold block mb-3">
                Incubation Protocol
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-text-dark leading-tight mb-6">
                From internal prototype to independent venture.
              </h2>
              <p className="text-base text-text-muted leading-relaxed mb-6">
                Our internal ventures originate from real recurring software inefficiencies we observe in the market. Rather than building speculative products, we design tools that solve definitive structural friction.
              </p>
              <div className="flex items-center gap-6 pt-4 text-xs font-mono text-text-dark">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-champagne-dark" />
                  <span>Strict Stealth R&D</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-champagne-dark" />
                  <span>Iterative Validation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 rounded-sm bg-warm-white border border-border-light/70 shadow-sm">
                <Cpu className="w-6 h-6 text-champagne-dark mb-4" />
                <h4 className="font-serif font-bold text-text-dark text-lg mb-2">Systems R&D</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Focusing on core execution engines, state machines, and data pipelines.
                </p>
              </div>

              <div className="p-8 rounded-sm bg-warm-white border border-border-light/70 shadow-sm">
                <Shield className="w-6 h-6 text-champagne-dark mb-4" />
                <h4 className="font-serif font-bold text-text-dark text-lg mb-2">Sovereignty</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Self-funded architectures designed with long-term technological independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Showcase (Obsidian) */}
      <section className="bg-obsidian text-warm-white py-24 sm:py-32 border-t border-graphite-border/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
              Ventures Pipeline
            </span>
            <h2 className="text-4xl font-serif font-normal text-warm-white">
              Active R&D Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Render published ventures from MongoDB */}
            {publishedVentures.map((venture, idx) => (
              <motion.div
                key={venture._id || venture.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-graphite/80 rounded-md border border-champagne/40 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/5">
                    <span className="font-mono text-sm font-bold text-champagne">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-champagne/10 text-champagne border border-champagne/30">
                      Live Venture
                    </span>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-2xl font-serif font-semibold text-warm-white mb-3">
                      {venture.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      {venture.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Render Coming Soon slots */}
            {stealthProjects.slice(0, 3 - publishedVentures.length).map((slot, idx) => (
              <div
                key={slot.num}
                className="bg-graphite/40 rounded-md border border-dashed border-graphite-border hover:border-champagne/30 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/5">
                    <span className="font-mono text-sm font-bold text-text-muted">
                      {slot.num}
                    </span>
                    <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-obsidian text-champagne border border-champagne/20">
                      <Lock className="w-2.5 h-2.5" />
                      <span>{slot.status}</span>
                    </div>
                  </div>

                  <div className="pt-8">
                    <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase block mb-2">
                      {slot.code}
                    </span>
                    <h3 className="text-xl font-serif font-medium text-warm-white/90 mb-3 tracking-wide">
                      {slot.domain}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {slot.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <span>R&D STAGE</span>
                  <span className="text-champagne/70">STEALTH MODE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};
