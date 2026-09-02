import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What type of websites do you build?',
      a: 'We build websites for businesses, schools, colleges, cinemas, healthcare practices, e-commerce brands, and startups. Whether you need a corporate presence, an educational portal with admission forms, a cinema showtime platform, or a custom web tool, we engineer it from the ground up.',
    },
    {
      q: 'Do you build responsive websites?',
      a: 'Yes, 100%. Every website we engineer is mobile-first and fully responsive, ensuring flawless appearance and fluid functionality across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
    },
    {
      q: 'Can you create a website according to our requirements?',
      a: 'Absolutely. We do not use rigid generic templates. Every structure, layout, feature set, and integration (like WhatsApp inquiry buttons, admission forms, or customer portals) is tailored to your specific organizational workflow.',
    },
    {
      q: 'Do you provide website maintenance?',
      a: 'Yes. We offer ongoing maintenance, uptime monitoring, cloud security updates, content refreshes, and technical support to ensure your website remains fast, secure, and up-to-date.',
    },
    {
      q: 'How long does a website take to build?',
      a: 'Timelines depend on scope. A focused business or landing page is typically completed in 1 to 2 weeks. Comprehensive platforms for schools, cinemas, or full web applications generally take 3 to 4 weeks with structured milestone reviews.',
    },
    {
      q: 'Can you redesign an existing website?',
      a: 'Yes. We frequently modernize legacy websites by upgrading their visual design, mobile responsiveness, load speeds, and search-engine visibility while preserving your existing domain and brand identity.',
    },
  ];

  return (
    <section id="faq" className="bg-ivory text-text-dark py-24 sm:py-32 relative border-t border-border-light overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-bold block mb-3">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-text-dark leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-text-muted max-w-xl mx-auto leading-relaxed">
            Everything you need to know about working with Vanguard Digital.
          </p>
        </div>

        {/* 6 FAQ Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-warm-white rounded-xl border border-border-light/80 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none select-none group"
                >
                  <span className="font-serif font-bold text-lg sm:text-xl text-text-dark group-hover:text-champagne-dark transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-ivory flex items-center justify-center text-text-dark flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-champagne-dark bg-champagne/15' : ''
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
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
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
      </div>
    </section>
  );
};
