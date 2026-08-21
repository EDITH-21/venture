import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, ShoppingBag, Cpu, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SolutionsGrid = () => {
  const categories = [
    {
      num: '01',
      category: 'WEBSITES',
      title: 'Websites & Digital Presence',
      description: 'Custom-designed, lightning-fast responsive websites engineered to establish authority and convert visitors into qualified business leads.',
      benefits: 'Sub-second speed, mobile-first design, SEO-optimized structure',
      useCases: [
        'Business & Corporate Websites',
        'High-Conversion Landing Pages',
        'School & Educational Platforms',
        'Executive Portfolios & Profiles',
        'Healthcare & Practice Websites',
      ],
      tech: 'React · Vite · Tailwind CSS · Cloudflare',
      link: '/start-project?package=starter',
    },
    {
      num: '02',
      category: 'WEB APPLICATIONS',
      title: 'Web Applications & Portals',
      description: 'Dynamic full-stack web applications, customer portals, and internal business tools that automate complex operational workflows.',
      benefits: 'Role-based access, custom databases, interactive data dashboards',
      useCases: [
        'SaaS Platforms & Web Tools',
        'Administrative Management Panels',
        'Customer Portals & Client Areas',
        'Appointment & Booking Systems',
        'Lead Management & CRM Systems',
      ],
      tech: 'React · Node.js · Express · MongoDB',
      link: '/start-project?package=business',
    },
    {
      num: '03',
      category: 'E-COMMERCE',
      title: 'E-Commerce & Online Stores',
      description: 'Complete commercial digital storefronts equipped with secure checkout, automated inventory tracking, and payment gateways.',
      benefits: '1-click UPI payment, automated order alerts, inventory sync',
      useCases: [
        'Direct-to-Consumer Online Stores',
        'Product & Service Catalogs',
        'Instant UPI & Payment Gateways',
        'Automated Invoice & Order Tracking',
        'Digital Product Delivery Systems',
      ],
      tech: 'MERN Stack · Razorpay · Stripe · Cloud APIs',
      link: '/start-project?package=business',
    },
    {
      num: '04',
      category: 'CUSTOM DIGITAL SOLUTIONS',
      title: 'Custom Software & Automation',
      description: 'Bespoke software architecture, database management, and third-party API integrations designed around your exact business model.',
      benefits: 'Eliminate repetitive manual tasks, seamless API connectivity',
      useCases: [
        'Business Process Automation',
        'Custom Database Systems & Migration',
        'Third-Party API & ERP Integration',
        'WhatsApp Business Automated Gateways',
        'Internal Operational Software',
      ],
      tech: 'Node.js · MongoDB · REST APIs · Webhooks',
      link: '/start-project?package=custom',
    },
  ];

  return (
    <section className="bg-obsidian text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-bold">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white leading-tight">
              Four Core Disciplines. Zero Bloat.
            </h2>
            <p className="text-base text-text-muted mt-3">
              We structure our services around business outcomes rather than endless confusing tech jargon.
            </p>
          </div>

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-champagne hover:text-champagne-light transition-colors pb-1 flex-shrink-0"
          >
            <span>Explore All 48 Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-graphite/60 backdrop-blur-sm rounded-xl border border-graphite-border hover:border-champagne/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/5">
                  <span className="font-mono text-base font-bold text-champagne">
                    {card.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded bg-obsidian text-champagne border border-champagne/20 font-bold">
                    {card.category}
                  </span>
                </div>

                <div className="pt-6">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-warm-white mb-3 group-hover:text-champagne transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="p-3.5 rounded-lg bg-obsidian/70 border border-white/5 text-xs text-sage font-mono mb-6 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                    <span><strong className="text-warm-white">Outcome:</strong> {card.benefits}</span>
                  </div>
                </div>

                {/* Example Use Cases */}
                <div className="space-y-2.5 pt-2 pb-6 border-t border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-2 font-semibold">
                    What We Build:
                  </span>
                  {card.useCases.map((uc, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-warm-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button & Tech Bar */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-text-muted">
                  Tech: <span className="text-warm-white">{card.tech}</span>
                </span>

                <Link
                  to={card.link}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider hover:bg-champagne-light transition-all shadow-md"
                >
                  <span>Discuss Your Project</span>
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
