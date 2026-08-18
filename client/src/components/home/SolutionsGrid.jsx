import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const SolutionsGrid = () => {
  const cards = [
    {
      num: '01',
      category: 'TECHNOLOGY',
      title: 'Software & Systems',
      description: 'End-to-end full-stack architectures, high-concurrency database systems, and custom administrative engines built with pure modern engineering.',
      link: '/solutions/technology',
      services: [
        { label: 'Web Development', slug: 'web-development' },
        { label: 'Web Applications', slug: 'web-applications' },
        { label: 'Custom Dashboards', slug: 'admin-dashboards' },
        { label: 'Business Systems', slug: 'business-management-systems' },
        { label: 'Automation', slug: 'automation-solutions' },
        { label: 'Database Solutions', slug: 'database-solutions' },
      ],
    },
    {
      num: '02',
      category: 'CREATIVE',
      title: 'Design & Visual Strategy',
      description: 'Sophisticated typography, high-impact brand identities, and editorial print systems that command executive respect and market distinction.',
      link: '/solutions/creative',
      services: [
        { label: 'Graphic Design', slug: 'graphic-design' },
        { label: 'Logo Design', slug: 'logo-design' },
        { label: 'Posters', slug: 'poster-design' },
        { label: 'Brand Identity', slug: 'brand-identity' },
        { label: 'Marketing Creatives', slug: 'marketing-materials' },
        { label: 'Business Materials', slug: 'business-stationery' },
      ],
    },
    {
      num: '03',
      category: 'DIGITAL',
      title: 'Digital Operations',
      description: 'Streamlined communication channels, verified messaging gateways, dynamic QR assets, and structured electronic document workflows.',
      link: '/solutions/digital',
      services: [
        { label: 'Digital Business Solutions', slug: 'digital-business-presence' },
        { label: 'WhatsApp Business', slug: 'whatsapp-business-setup' },
        { label: 'Digital Cards', slug: 'digital-business-cards' },
        { label: 'QR Solutions', slug: 'qr-code-solutions' },
        { label: 'Online Forms', slug: 'online-forms' },
        { label: 'Documentation Support', slug: 'digital-documentation' },
      ],
    },
  ];

  return (
    <section className="bg-obsidian text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
              Capabilities Suite
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white">
              Solutions That Drive Growth
            </h2>
          </div>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-champagne hover:text-champagne-light transition-colors pb-1"
          >
            <span>View All 48 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Solutions Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-graphite/60 backdrop-blur-sm rounded-md border border-graphite-border hover:border-champagne/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <span className="font-mono text-sm font-bold text-champagne">
                    {card.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded bg-obsidian text-text-muted border border-white/5">
                    {card.category}
                  </span>
                </div>

                <div className="pt-6">
                  <h3 className="text-2xl font-serif font-semibold text-warm-white mb-3 group-hover:text-champagne transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                {/* Core Items List */}
                <div className="space-y-3 pt-2 pb-8 border-t border-white/5">
                  {card.services.map((svc) => (
                    <Link
                      key={svc.label}
                      to={`/solutions/${card.category.toLowerCase()}/${svc.slug}`}
                      className="flex items-center justify-between py-1.5 text-xs text-warm-white/80 hover:text-champagne transition-colors group/item"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne/40 group-hover/item:bg-champagne transition-colors" />
                        <span>{svc.label}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-champagne" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/5">
                <Button
                  to={card.link}
                  variant="outline"
                  size="md"
                  icon={ArrowRight}
                  className="w-full justify-between text-xs uppercase tracking-wider font-semibold"
                >
                  Explore {card.category}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
