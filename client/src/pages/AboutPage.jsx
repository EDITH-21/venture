import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  Compass,
  Check
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/home/CTASection';

export const AboutPage = () => {
  const beliefs = [
    {
      title: 'Obsessive Quality',
      description: 'We do not build fragile prototypes or cutting-edge gimmicks. Every software line, database schema, and design token is engineered for durability, security, and long-term maintainability.',
      icon: ShieldCheck,
    },
    {
      title: 'Radical Simplicity',
      description: 'Complexity is easy; restraint is difficult. We eliminate unnecessary friction, slow bloated plugins, and visual noise to deliver pure utility and speed.',
      icon: Sparkles,
    },
    {
      title: 'Absolute Transparency',
      description: 'Zero hidden fees, transparent milestone progress tracking, honest technical advice, and clear delivery timelines from the initial call to deployment.',
      icon: Compass,
    },
    {
      title: 'Performance & Speed',
      description: 'A slow website is a lost customer. We engineer sub-second load times, mobile-first layouts, and clean semantic markup that ranks well on Google.',
      icon: Zap,
    },
    {
      title: 'Long-Term Partnership',
      description: 'We do not disappear after launch. We support, maintain, and continuously improve your digital product as your business expands.',
      icon: Users,
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us — Vanguard Digital"
        description="Learn about Vanguard Digital, our mission to build high-impact digital experiences for businesses, and the core engineering principles that guide our work."
      />

      {/* Hero Header */}
      <section className="bg-obsidian text-warm-white pt-36 pb-20 border-b border-graphite-border/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20">
              <span className="w-2 h-2 rounded-full bg-champagne" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-bold">
                About Vanguard Digital
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-warm-white leading-tight mb-6">
              We Build Digital Experiences That Move Businesses Forward.
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
              We are a specialized digital development and engineering team dedicated to building custom websites, web applications, e-commerce stores, and business tools that look better, work smarter, and generate revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & Why We Exist (Warm Ivory) */}
      <section className="bg-ivory text-text-dark py-24 sm:py-32 border-t border-border-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-bold block mb-3">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-text-dark leading-tight">
                Built to solve the problem of generic, ineffective web presence.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-sm text-text-muted leading-relaxed">
              <div className="p-8 rounded-xl bg-warm-white border border-border-light/80 shadow-sm space-y-3">
                <h3 className="text-xl font-serif font-bold text-text-dark">
                  Who We Are
                </h3>
                <p>
                  Vanguard Digital is a technology and web development studio. We work with businesses, educational institutions, retail brands, and startups who want a distinctive, high-converting digital presence built without generic templates.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-warm-white border border-border-light/80 shadow-sm space-y-3">
                <h3 className="text-xl font-serif font-bold text-text-dark">
                  Why We Exist
                </h3>
                <p>
                  Most business websites today are either slow, cookie-cutter templates that fail to generate leads, or overly complex IT projects that take months to launch. We exist to provide the ideal middle ground: <strong>agile, beautifully designed, custom digital products delivered on time and engineered for commercial outcomes.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Dark Obsidian) */}
      <section className="bg-obsidian text-warm-white py-24 sm:py-32 border-t border-graphite-border/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-graphite/60 p-8 sm:p-10 rounded-2xl border border-champagne/30 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-bold block">
                Our Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-warm-white">
                Empower businesses with fast, reliable, and tailored digital infrastructure.
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                To engineer digital experiences that simplify operations, build undeniable brand credibility, and turn everyday visitors into engaged, long-term clients.
              </p>
            </div>

            <div className="bg-graphite/60 p-8 sm:p-10 rounded-2xl border border-champagne/30 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-bold block">
                Our Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-warm-white">
                Set the standard for modern digital craftsmanship in India & globally.
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                To be the most trusted technology partner for growing enterprises, recognized for clean code, transparent pricing, and measurable business leverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe (Warm Ivory) */}
      <section className="bg-ivory text-text-dark py-24 sm:py-32 border-t border-border-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-bold block mb-3">
              Core Principles
            </span>
            <h2 className="text-4xl font-serif font-normal text-text-dark">
              What We Believe & Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-warm-white p-8 rounded-xl border border-border-light/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-ivory border border-border-light flex items-center justify-center text-champagne-dark mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-text-dark mb-3">
                      {b.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {b.description}
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
