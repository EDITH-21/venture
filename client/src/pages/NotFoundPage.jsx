import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';

export const NotFoundPage = () => {
  return (
    <>
      <SEOHead title="404 — Specification Not Found" />

      <section className="min-h-[80vh] flex items-center justify-center bg-obsidian text-warm-white py-32 px-5">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 rounded-full bg-graphite border border-champagne/30 flex items-center justify-center text-champagne mx-auto mb-8 shadow-xl">
            <Compass className="w-8 h-8 animate-pulse" />
          </div>

          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
            Error 404
          </span>

          <h1 className="text-4xl font-serif font-normal text-warm-white mb-4">
            Destination Not Found
          </h1>

          <p className="text-sm text-text-muted leading-relaxed mb-8">
            The requested technical specification or page route does not exist or has been relocated within our architecture.
          </p>

          <Button
            to="/"
            variant="primary"
            size="md"
            icon={ArrowLeft}
            iconPosition="left"
            className="text-xs uppercase tracking-wider font-semibold"
          >
            Return to Core
          </Button>
        </div>
      </section>
    </>
  );
};
