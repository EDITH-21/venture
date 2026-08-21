import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const PricingSection = () => {
  const packages = [
    {
      name: 'Starter',
      target: 'Individuals & Small Businesses',
      price: '₹14,999',
      priceLabel: 'Starting from',
      description: 'Clean, modern, and fast digital presence designed to establish instant credibility and capture inquiries.',
      featured: false,
      features: [
        'Custom Responsive Website (1–5 Pages)',
        'Mobile-First & Ultra-Fast Load Times',
        'Direct WhatsApp & Call Integration',
        'SEO-Ready Semantic Architecture',
        'Contact & Lead Capture Form',
        'Domain & Hosting Deployment Setup',
        '30 Days Post-Launch Support',
      ],
      ctaText: 'Start with Starter',
      ctaLink: '/start-project?package=starter',
    },
    {
      name: 'Business',
      target: 'Growing Companies & Brands',
      price: '₹39,999',
      priceLabel: 'Starting from',
      description: 'Complete commercial digital platform with dynamic content, payment options, and administrative controls.',
      featured: true,
      popularBadge: 'Most Popular',
      features: [
        'Custom Multi-Page Platform (6–15 Pages)',
        'Admin Dashboard & Content Management',
        'Payment Gateway & UPI Integration',
        'Product / Service Catalog System',
        'Custom Interactive Forms & Calculators',
        'Advanced Conversion Analytics Setup',
        'Speed Optimization & Security Hardening',
        '60 Days Dedicated Support & Maintenance',
      ],
      ctaText: 'Build Business Platform',
      ctaLink: '/start-project?package=business',
    },
    {
      name: 'Custom Platform',
      target: 'SaaS, Portals & Complex Web Apps',
      price: 'Custom Scope',
      priceLabel: 'Tailored Solution',
      description: 'End-to-end bespoke software architecture, multi-user portals, custom databases, and workflow automations.',
      featured: false,
      features: [
        'Full-Stack Web Application (React + Node + DB)',
        'Role-Based User Authentication & Portals',
        'Custom Database Architecture & APIs',
        'Business Workflow & Notification Automations',
        'Third-Party API & ERP Integrations',
        'High-Concurrency Cloud Architecture',
        'Automated Backup & Staging Environments',
        'Ongoing SLA Support & Feature Scaling',
      ],
      ctaText: 'Discuss Custom Project',
      ctaLink: '/start-project?package=custom',
    },
  ];

  return (
    <section className="bg-obsidian text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-semibold">
              Transparent Starting Packages
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white leading-tight mb-6">
            Predictable Packages Tailored To Your Stage.
          </h2>

          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Every business has unique requirements. We provide transparent starting brackets so you can plan your budget with zero hidden surprises.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.featured
                  ? 'bg-graphite border-2 border-champagne shadow-[0_15px_40px_rgba(200,169,107,0.15)] ring-1 ring-champagne/30 -translate-y-2'
                  : 'bg-graphite/40 border border-graphite-border hover:border-champagne/40'
              }`}
            >
              {pkg.popularBadge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-champagne text-obsidian text-[11px] font-mono uppercase tracking-widest font-bold px-3 py-0.5 rounded-full shadow-md">
                  {pkg.popularBadge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="pb-6 mb-6 border-b border-white/5">
                  <span className="text-xs font-mono uppercase tracking-wider text-champagne font-semibold block mb-1">
                    {pkg.target}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-warm-white mb-4">
                    {pkg.name}
                  </h3>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold font-mono text-warm-white">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-text-muted font-mono">
                      / {pkg.priceLabel}
                    </span>
                  </div>

                  <p className="text-xs text-text-muted mt-4 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-2 font-semibold">
                    What’s Included:
                  </span>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-warm-white/90">
                      <Check className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  to={pkg.ctaLink}
                  className={`w-full py-3.5 px-5 rounded-sm font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-center ${
                    pkg.featured
                      ? 'bg-champagne text-obsidian hover:bg-champagne-light shadow-lg'
                      : 'bg-obsidian border border-champagne/30 text-warm-white hover:bg-graphite hover:border-champagne'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="text-center max-w-2xl mx-auto text-xs text-text-muted flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-champagne flex-shrink-0" />
          <span>
            Final investment depends on exact feature complexity, pages, and third-party integrations. <Link to="/estimator" className="text-champagne underline hover:text-warm-white">Use our Project Estimator</Link> for an instant personalized scope.
          </span>
        </div>
      </div>
    </section>
  );
};
