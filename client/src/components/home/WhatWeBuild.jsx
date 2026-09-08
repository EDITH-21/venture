import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, Cpu, Search, ArrowUpRight } from 'lucide-react';

export const WhatWeBuild = () => {
  const pillars = [
    {
      id: 'products',
      tag: '01 / APPLICATION',
      title: 'PRODUCTS',
      tagline: 'Technology products designed around real human problems.',
      description:
        'We craft refined consumer and enterprise software that removes friction, accelerates decision-making, and respects user focus with world-class craft and speed.',
      icon: Box,
    },
    {
      id: 'platforms',
      tag: '02 / INFRASTRUCTURE',
      title: 'PLATFORMS',
      tagline: 'Systems that enable people and organizations to do more.',
      description:
        'Scalable foundational toolchains, data engines, and distribution layers built to power operations for next-generation organizations and institutions.',
      icon: Layers,
    },
    {
      id: 'intelligent-systems',
      tag: '03 / COGNITION',
      title: 'INTELLIGENT SYSTEMS',
      tagline: 'Applying AI and emerging technology where it creates genuine value.',
      description:
        'Moving beyond shallow wrappers. We design autonomous workflows, contextual reasoning engines, and integrated neural models that solve complex operational bottlenecks.',
      icon: Cpu,
    },
    {
      id: 'research',
      tag: '04 / EXPLORATION',
      title: 'RESEARCH',
      tagline: 'Exploring difficult problems that could shape the future.',
      description:
        'Investigating computing paradigms, novel human-computer interfaces, and decentralized verification systems that establish tomorrow’s technical breakthroughs.',
      icon: Search,
    },
  ];

  return (
    <section id="build" className="bg-cream py-28 sm:py-36 relative border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-forest font-bold block mb-3">
              Capabilities & Focus
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-charcoal tracking-tight">
              What We Build
            </h2>
          </div>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-md font-sans leading-relaxed">
            A cohesive technological ecosystem spanning consumer experiences, institutional platforms, and advanced intelligence.
          </p>
        </div>

        {/* 4 Architectural Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white border border-cream-border hover:border-forest/40 rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group shadow-subtle hover:shadow-card hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-cream-border/70">
                    <span className="text-[11px] font-mono tracking-widest text-forest font-bold">
                      {pillar.tag}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-forest-subtle flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-cream transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-sans font-bold text-charcoal tracking-tight mb-3 group-hover:text-forest transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-sans font-semibold text-charcoal/90 mb-4 leading-snug">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-cream-border/50 flex items-center justify-between text-xs font-mono text-charcoal-muted group-hover:text-forest transition-colors">
                  <span>Architecture & Delivery</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
