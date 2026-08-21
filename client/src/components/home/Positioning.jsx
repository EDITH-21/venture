import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, ShoppingBag, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Positioning = () => {
  const offerings = [
    {
      category: 'WEBSITES',
      title: 'High-Impact Websites',
      outcome: 'Turn visitors into clients with fast, conversion-optimized design.',
      deliverables: ['Business Websites', 'Corporate Platforms', 'Landing Pages', 'School Websites'],
      link: '/solutions',
      color: 'border-champagne/30',
    },
    {
      category: 'WEB APPLICATIONS',
      title: 'Custom Web Applications',
      outcome: 'Automate business workflows and scale customer operations seamlessly.',
      deliverables: ['SaaS Platforms', 'Admin Dashboards', 'Customer Portals', 'Booking Engines'],
      link: '/solutions',
      color: 'border-champagne/30',
    },
    {
      category: 'E-COMMERCE',
      title: 'Revenue-Driving Stores',
      outcome: 'Sell products online with 1-click UPI checkout and inventory sync.',
      deliverables: ['Online Stores', 'Catalog Systems', 'Payment Gateways', 'Order Management'],
      link: '/solutions',
      color: 'border-champagne/30',
    },
    {
      category: 'DIGITAL SOLUTIONS',
      title: 'Digital Systems & Tools',
      outcome: 'Eliminate manual paperwork with tailored business automations.',
      deliverables: ['WhatsApp Business', 'API Integrations', 'Custom Software', 'Database Systems'],
      link: '/solutions',
      color: 'border-champagne/30',
    },
  ];

  return (
    <section className="bg-ivory text-text-dark py-24 sm:py-32 relative border-t border-border-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-bold block mb-3">
            Client-Focused Engineering
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-text-dark leading-tight mb-6">
            Here Is What We Can Build For Your Business.
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Every digital product we engineer is built to achieve specific commercial outcomes: generating qualified leads, improving brand credibility, and saving hours of manual work.
          </p>
        </div>

        {/* 4 Outcome-Driven Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-warm-white p-8 rounded-xl border border-border-light/80 hover:border-champagne-dark/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-dark font-bold block mb-4">
                  {item.category}
                </span>

                <h3 className="text-xl font-serif font-bold text-text-dark mb-3 group-hover:text-champagne-dark transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  {item.outcome}
                </p>

                <div className="space-y-2 pt-4 border-t border-border-light/50">
                  {item.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-text-dark/80 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-champagne-dark flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border-light/50">
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-champagne-dark hover:text-text-dark transition-colors"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
