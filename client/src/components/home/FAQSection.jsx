import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Do you build custom websites or use templates?',
      a: 'We build 100% custom websites and web applications tailored specifically to your business goals, branding, and workflows. We do not force you into slow, generic templates or bloated page builders.',
    },
    {
      q: 'Can you build an e-commerce website with payment gateways?',
      a: 'Yes. We engineer complete e-commerce stores with product catalogs, shopping carts, instant UPI / Razorpay / Stripe payment gateways, automated invoice generation, and real-time inventory management.',
    },
    {
      q: 'Do you provide an admin panel to manage content and leads?',
      a: 'Yes. All our business and web application solutions come with a secure, customized admin panel where you can easily update products, manage text and media, view submitted leads, and inspect live analytics.',
    },
    {
      q: 'How long does a website or web application project take?',
      a: 'Standard business websites typically take 2 to 3 weeks. Comprehensive e-commerce stores take 3 to 4 weeks, while complex full-stack web applications and custom SaaS tools typically take 4 to 8 weeks depending on scope.',
    },
    {
      q: 'Do you provide hosting, domain setup, and cloud deployment?',
      a: 'Yes. We handle end-to-end cloud deployment on high-speed infrastructure (Vercel, AWS, Cloudflare), configure custom domains, set up automated SSL certificates, and ensure 99.9% uptime.',
    },
    {
      q: 'Can you redesign our existing outdated website?',
      a: 'Absolutely. We can take your existing content and rebuild it with modern responsive UI/UX, improve page speed, fix mobile responsiveness, and optimize the structure for higher lead conversion.',
    },
    {
      q: 'Do you provide maintenance and technical support after launch?',
      a: 'Yes. Every project includes a 30 to 60-day post-launch warranty. We also offer monthly retainer plans for ongoing feature additions, security audits, database backups, and technical support.',
    },
    {
      q: 'Do I get 100% full ownership of the source code?',
      a: 'Yes. Once the final milestone is completed and payment is settled, full intellectual property and source code rights belong to you. We provide a clean GitHub repository and deployment setup.',
    },
    {
      q: 'What do you need from me to get started?',
      a: 'To begin, we need a brief overview of your business, your target audience, any reference websites you admire, your logo/branding assets, and basic content/services information. We guide you step-by-step through our onboarding questionnaire.',
    },
    {
      q: 'Can we connect and discuss our requirements on WhatsApp or Call?',
      a: 'Yes! You can instantly connect with our lead engineering team on WhatsApp at +91 9998160726 or schedule a direct consultation call anytime.',
    },
  ];

  return (
    <section className="bg-ivory text-text-dark py-24 sm:py-32 relative border-t border-border-light">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-warm-white border border-border-light">
            <HelpCircle className="w-3.5 h-3.5 text-champagne-dark" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne-dark font-bold">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-text-dark leading-tight mb-4">
            Everything You Need To Know.
          </h2>

          <p className="text-sm sm:text-base text-text-muted">
            Have questions about our process, timelines, or technology? Find clear answers below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-warm-white rounded-xl border border-border-light/80 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-lg sm:text-xl text-text-dark hover:text-champagne-dark transition-colors"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-ivory flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-champagne-dark text-warm-white' : 'text-text-muted'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-text-muted leading-relaxed border-t border-border-light/40">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center text-sm text-text-muted flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Still have a question?</span>
          <a
            href="https://wa.me/919998160726?text=Hi%20Vanguard%20Digital,%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-champagne-dark hover:underline"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat directly on WhatsApp (+91 9998160726) →</span>
          </a>
        </div>
      </div>
    </section>
  );
};
