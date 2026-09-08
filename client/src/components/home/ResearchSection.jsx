import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Sparkles, Network, Compass, ArrowUpRight } from 'lucide-react';

export const ResearchSection = () => {
  const explorationAreas = [
    {
      title: 'Artificial Intelligence & Contextual Reasoning',
      tag: 'COGNITIVE ARCHITECTURE',
      desc: 'Investigating adaptive models, deterministic reasoning wrappers, and agentic coordination capable of reliably executing complex workflows.',
      icon: Cpu,
    },
    {
      title: 'Human-Computer Interaction (HCI)',
      tag: 'INTERFACE DESIGN',
      desc: 'Rethinking input modalities, semantic typography, and ambient interfaces to minimize cognitive load and maximize human bandwidth.',
      icon: Terminal,
    },
    {
      title: 'Intelligent Systems & Distributed Engines',
      tag: 'SYSTEMS ENGINEERING',
      desc: 'Studying resilient micro-service topologies, real-time telemetry processing, and fault-tolerant cloud platforms.',
      icon: Network,
    },
    {
      title: 'Emerging Technology & Computing Paradigms',
      tag: 'NEXT-GEN COMPUTING',
      desc: 'Exploring edge computing execution, decentralized verification, and high-throughput computational frameworks.',
      icon: Compass,
    },
  ];

  return (
    <section id="research" className="bg-cream-surface py-28 sm:py-36 relative border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-forest font-bold block mb-3">
              Future Exploration
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-charcoal tracking-tight">
              Areas We’re Exploring
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-md font-sans leading-relaxed">
            Theoretical interests and applied exploration driving our long-term technical roadmap.
          </p>
        </div>

        {/* Explorations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {explorationAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-cream-border hover:border-forest/40 rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group shadow-subtle hover:shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-cream-border/70">
                    <span className="text-[10px] font-mono tracking-widest text-forest font-bold">
                      {area.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-forest-subtle flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-cream transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-sans font-bold text-charcoal tracking-tight mb-3 group-hover:text-forest transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {area.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-cream-border/40 flex items-center justify-between text-xs font-mono text-charcoal-muted">
                  <span>Theoretical & Applied Study</span>
                  <span className="text-forest text-[11px] font-semibold">Active Focus</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
