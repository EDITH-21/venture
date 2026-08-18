import React from 'react';
import { SEOHead } from '../components/common/SEOHead';

export const TermsPage = () => {
  return (
    <>
      <SEOHead title="Terms of Service" description="Vanguard Digital terms of engagement and service guidelines." />
      
      <section className="bg-obsidian text-warm-white pt-36 pb-20 border-b border-graphite-border/60">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-4">
            Legal Terms
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-text-muted">
            Effective Date: August 2026
          </p>
        </div>
      </section>

      <section className="bg-ivory text-text-dark py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-10 text-sm leading-relaxed text-text-dark/90">
          <div>
            <h2 className="text-2xl font-serif font-bold text-text-dark mb-3">1. Scope of Engagement</h2>
            <p className="text-text-muted">
              By accessing our web platforms and inquiring regarding engineering or design services, you agree to engage in professional communication and respect intellectual property standards. Commercial service engagements are governed by bespoke Master Services Agreements (MSAs) and Statements of Work (SOWs).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-text-dark mb-3">2. Intellectual Property</h2>
            <p className="text-text-muted">
              All visual assets, codebases, and systems engineered specifically for commercial clients become the exclusive property of the client upon receipt of full settlement, as stipulated in individual contract terms. All proprietary venture technologies, algorithms, and brand assets of Vanguard Digital remain the exclusive property of Vanguard.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-text-dark mb-3">3. Confidentiality</h2>
            <p className="text-text-muted">
              We uphold strict confidentiality regarding all prospective client briefs, business requirements, and operational data disclosed during discovery and project delivery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
