import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { ProjectEstimator } from '../components/forms/ProjectEstimator';
import { Sparkles, HelpCircle, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import { FAQSection } from '../components/home/FAQSection';

export const EstimatorPage = () => {
  return (
    <>
      <SEOHead
        title="Estimate Your Project — Instant Scope & Cost Calculator"
        description="Calculate an instant estimate for your website, web application, or custom software project with Vanguard Digital's interactive project estimator."
      />

      {/* Header Banner */}
      <section className="bg-obsidian text-warm-white pt-36 pb-16 border-b border-graphite-border/60 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-bold">
                Transparent Pricing Engine
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-warm-white leading-tight mb-4">
              Estimate Your Project In Minutes.
            </h1>
            <p className="text-base text-text-muted leading-relaxed max-w-2xl">
              Configure your requirements, select features, and get an immediate initial investment range tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Estimator Container */}
      <section className="bg-obsidian-deep text-warm-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <ProjectEstimator />

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/5 text-xs text-text-muted">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-serif font-bold text-sm text-warm-white block mb-1">
                  Fixed Milestone Billing
                </span>
                <p>Transparent milestone delivery stages with zero unexpected hidden cost overruns.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-serif font-bold text-sm text-warm-white block mb-1">
                  On-Time Delivery Guarantee
                </span>
                <p>Strict agile sprint deadlines ensuring your application launches according to schedule.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-serif font-bold text-sm text-warm-white block mb-1">
                  Direct WhatsApp Engineering
                </span>
                <p>Direct communication with your lead developer without slow middle-management delays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded FAQ */}
      <FAQSection />
    </>
  );
};
