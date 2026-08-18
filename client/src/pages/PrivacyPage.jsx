import React from 'react';
import { SEOHead } from '../components/common/SEOHead';

export const PrivacyPage = () => {
  return (
    <>
      <SEOHead title="Privacy Policy" description="Vanguard Digital privacy practices and data telemetry policies." />
      
      <section className="bg-obsidian text-warm-white pt-36 pb-20 border-b border-graphite-border/60">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-4">
            Legal Transparency
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-text-muted">
            Last Updated: August 2026
          </p>
        </div>
      </section>

      <section className="bg-ivory text-text-dark py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-10 text-sm leading-relaxed text-text-dark/90">
          <div>
            <h2 className="text-2xl font-serif font-bold text-text-dark mb-3">1. Anonymous Telemetry & Analytics</h2>
            <p className="text-text-muted">
              We respect your digital privacy. Our website utilizes an anonymous session-based telemetry tracker that records only aggregated, non-personally identifiable metrics (such as page views, browser family, general device category, and referrers). We do not use third-party tracking pixels, invasive cookies, or advertising trackers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-text-dark mb-3">2. Inquiries and Communications</h2>
            <p className="text-text-muted">
              When you submit a project brief through our inquiry gateway, the information provided (name, work email, phone number, company, and project description) is utilized strictly to evaluate and respond to your business request. We do not sell, rent, or distribute contact records to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-text-dark mb-3">3. Data Security & Storage</h2>
            <p className="text-text-muted">
              All data transmitted to our systems is encrypted in transit using industry-standard TLS protocols. Stored data is hosted in secure, access-controlled database environments with strict authorization controls.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-text-dark mb-3">4. Inquiries & Data Rights</h2>
            <p className="text-text-muted">
              If you wish to request the removal or correction of any business communications you have submitted, please contact our data team at <span className="font-mono text-xs text-champagne-dark">privacy@vanguard-digital.tech</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
