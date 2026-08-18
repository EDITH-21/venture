import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Clock,
  Layers,
  Sparkles,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import { servicesAPI } from '../services/api';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { InquiryForm } from '../components/forms/InquiryForm';
import { NotFoundPage } from './NotFoundPage';

export const ServiceDetailPage = () => {
  const { category, slug } = useParams();
  const [service, setService] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      setNotFound(false);
      try {
        const res = await servicesAPI.getBySlug(slug);
        if (res.data?.success && res.data?.data) {
          setService(res.data.data);
          setRelated(res.data.related || []);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-champagne/20 border-t-champagne rounded-full animate-spin" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne">
            Loading Specification...
          </span>
        </div>
      </div>
    );
  }

  if (notFound || !service) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOHead
        title={service.name}
        description={service.shortDescription || service.description}
      />

      {/* Hero Header (Obsidian) */}
      <section className="bg-obsidian text-warm-white pt-36 pb-20 border-b border-graphite-border/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-8">
            <Link to="/" className="hover:text-warm-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/solutions" className="hover:text-warm-white transition-colors">
              Solutions
            </Link>
            <span>/</span>
            <Link
              to={`/solutions/${service.category.toLowerCase()}`}
              className="capitalize hover:text-warm-white transition-colors"
            >
              {service.category}
            </Link>
            <span>/</span>
            <span className="text-champagne">{service.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-4">
                {service.category} Specialization
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-warm-white leading-[1.1] mb-6">
                {service.name}
              </h1>
              <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full justify-center text-xs uppercase tracking-wider font-bold"
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Deliverables (Warm Ivory) */}
      <section className="bg-ivory text-text-dark py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Full Description */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-semibold block mb-3">
                  Scope & Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-text-dark mb-6">
                  Engineered For Definitive Operational Impact
                </h2>
                <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-6 whitespace-pre-line">
                  {service.description}
                </p>
              </div>

              {/* Ideal For Section */}
              {service.idealFor && service.idealFor.length > 0 && (
                <div className="p-8 rounded-sm bg-warm-white border border-border-light/70">
                  <h3 className="text-lg font-serif font-bold text-text-dark mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-champagne-dark" />
                    <span>Ideal Organizational Profile</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm text-text-muted">
                    {service.idealFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne-dark mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Deliverables */}
            <div className="lg:col-span-5">
              <div className="bg-warm-white p-8 sm:p-10 rounded-sm border border-border-light/70 shadow-sm sticky top-28">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne-dark font-semibold block mb-2">
                  Standard Scope
                </span>
                <h3 className="text-2xl font-serif font-bold text-text-dark mb-6">
                  What We Provide
                </h3>

                <ul className="space-y-4">
                  {service.deliverables?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-dark">
                      <CheckCircle2 className="w-4 h-4 text-champagne-dark flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 mt-8 border-t border-border-light/40">
                  <Button
                    to="/contact"
                    variant="champagne"
                    size="md"
                    icon={ArrowRight}
                    className="w-full bg-obsidian text-warm-white hover:bg-graphite hover:text-champagne justify-center text-xs uppercase tracking-wider font-semibold"
                  >
                    Inquire For This Service
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Process (Obsidian) */}
      {service.process && service.process.length > 0 && (
        <section className="bg-obsidian text-warm-white py-24 sm:py-32 border-t border-graphite-border/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
                Execution Workflow
              </span>
              <h2 className="text-4xl font-serif font-normal text-warm-white">
                Our Structured Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="bg-graphite/40 p-8 rounded-sm border border-graphite-border flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                      <span className="font-mono text-2xl font-serif font-bold text-champagne">
                        0{step.step}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-champagne/40" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-warm-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section (Graphite/Obsidian) */}
      {service.faq && service.faq.length > 0 && (
        <section className="bg-graphite/30 text-warm-white py-24 border-t border-graphite-border/60">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
                Clear Answers
              </span>
              <h2 className="text-4xl font-serif font-normal text-warm-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faq.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-graphite/60 rounded-sm border border-graphite-border overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left text-sm sm:text-base font-serif font-medium text-warm-white hover:text-champagne transition-colors"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-champagne transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {related && related.length > 0 && (
        <section className="bg-obsidian text-warm-white py-20 border-t border-graphite-border/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold mb-8">
              Related Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/solutions/${rel.category.toLowerCase()}/${rel.slug}`}
                  className="p-6 rounded-sm bg-graphite/40 border border-graphite-border hover:border-champagne/40 group transition-all"
                >
                  <h4 className="text-lg font-serif font-semibold text-warm-white group-hover:text-champagne transition-colors mb-2">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-text-muted line-clamp-2 mb-4">
                    {rel.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-champagne uppercase tracking-wider">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inline Inquiry Section */}
      <section className="bg-obsidian text-warm-white py-24 border-t border-graphite-border/60">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
              Direct Engagement
            </span>
            <h2 className="text-4xl font-serif font-normal text-warm-white mb-4">
              Inquire About {service.name}
            </h2>
            <p className="text-sm text-text-muted max-w-md mx-auto">
              Submit your project requirements and our engineering leads will respond with a preliminary timeline and scope.
            </p>
          </div>

          <InquiryForm initialService={service.name} />
        </div>
      </section>
    </>
  );
};
