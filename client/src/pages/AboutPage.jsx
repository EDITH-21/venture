import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Terminal, Code, Cpu, Compass, Layers, CheckCircle } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/home/CTASection';

export const AboutPage = () => {
  const values = [
    {
      title: 'Architectural Integrity',
      description: 'We do not build fragile prototypes or cutting-edge gimmicks. Every software line, database schema, and design token is engineered for durability, security, and long-term maintainability.',
      icon: Shield,
    },
    {
      title: 'Dual Engine Model',
      description: 'We balance commercial client engineering with internal venture R&D. Solving real enterprise problems sharpens our technology intuition for future ventures.',
      icon: Layers,
    },
    {
      title: 'Obsessive Minimalism',
      description: 'Complexity is easy; restraint is difficult. We eliminate unnecessary friction, bloatware dependencies, and visual noise to deliver pure utility.',
      icon: Sparkles,
    },
  ];

  return (
    <>
      <SEOHead
        title="About Our Vision & Architecture"
        description="We are a modern technology company and venture studio dedicated to engineering high-performance digital systems and next-generation products."
      />

      {/* Hero Header */}
      <section className="bg-obsidian text-warm-white pt-36 pb-20 border-b border-graphite-border/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-4">
              Company Overview
            </span>
            <h1 className="text-5xl sm:text-6xl font-serif font-normal text-warm-white leading-tight mb-8">
              Engineered For The <br />
              <span className="italic text-champagne font-light">Long Horizon.</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
              We're building a technology company that goes beyond individual projects — creating solutions for businesses today and products for tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Mission Statement (Warm Ivory) */}
      <section className="bg-ivory text-text-dark py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-semibold block mb-3">
                Strategic Mandate
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-text-dark leading-tight">
                Two complementary engines driving digital progress.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-8 text-base text-text-muted leading-relaxed">
              <div className="p-8 rounded-sm bg-warm-white border border-border-light/70">
                <h3 className="text-xl font-serif font-bold text-text-dark mb-3 flex items-center gap-2">
                  <span className="text-champagne-dark font-mono text-sm font-bold">01 /</span> Client Technology Solutions
                </h3>
                <p className="text-sm leading-relaxed">
                  We partner with forward-thinking enterprises, founders, and industry leaders to design, build, and deploy mission-critical software, web platforms, and visual design systems that generate measurable business leverage.
                </p>
              </div>

              <div className="p-8 rounded-sm bg-warm-white border border-border-light/70">
                <h3 className="text-xl font-serif font-bold text-text-dark mb-3 flex items-center gap-2">
                  <span className="text-champagne-dark font-mono text-sm font-bold">02 /</span> Autonomous Venture Incubation
                </h3>
                <p className="text-sm leading-relaxed">
                  We incubate proprietary software products, developer tools, and automation protocols. Our ventures operate in stealth R&D mode until they achieve rigorous reliability and clear product-market alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles (Obsidian) */}
      <section className="bg-obsidian text-warm-white py-24 sm:py-32 border-t border-graphite-border/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
              Engineering Ethos
            </span>
            <h2 className="text-4xl font-serif font-normal text-warm-white">
              Principles That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-graphite/50 p-8 rounded-sm border border-graphite-border flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-sm bg-obsidian border border-champagne/30 flex items-center justify-center text-champagne mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-warm-white mb-4">
                      {v.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};
