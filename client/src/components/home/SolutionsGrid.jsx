import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Building2, School, ShoppingBag, Layout, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SolutionsGrid = () => {
  const services = [
    {
      num: '01',
      icon: Globe,
      title: 'Website Development',
      benefit: 'Sub-second speed & high lead conversion',
      description: 'Custom, fast-loading responsive websites built from the ground up to establish your online authority and turn visitors into paying clients.',
      highlights: ['Mobile-first responsiveness', 'Clean semantic SEO structure', 'Ultra-fast load times'],
      link: '/start-project?service=Website Development',
    },
    {
      num: '02',
      icon: Building2,
      title: 'Business Websites',
      benefit: 'Credibility & qualified corporate inquiries',
      description: 'Professional corporate web platforms tailored for companies, agencies, and service firms to showcase casework, capabilities, and trust.',
      highlights: ['Corporate brand presentation', 'Lead capture & WhatsApp integration', 'Clear service catalogs'],
      link: '/start-project?service=Business Websites',
    },
    {
      num: '03',
      icon: School,
      title: 'School Websites',
      benefit: 'Streamlined admissions & parent engagement',
      description: 'Complete digital platforms for schools and educational institutions with online admission forms, notice boards, achievements, and photo galleries.',
      highlights: ['Online admission enquiry system', 'Event & circular notice boards', 'Photo galleries & faculty profiles'],
      link: '/start-project?service=School Websites',
    },
    {
      num: '04',
      icon: ShoppingBag,
      title: 'E-Commerce Development',
      benefit: 'Direct online sales with instant checkout',
      description: 'Custom online stores with seamless product catalogs, 1-click UPI and card payment gateways, automated invoices, and inventory management.',
      highlights: ['Razorpay & UPI instant payment', 'Order & stock management', 'Automated customer alerts'],
      link: '/start-project?service=E-commerce Development',
    },
    {
      num: '05',
      icon: Layout,
      title: 'Web Application Development',
      benefit: 'Automate business workflows & scale operations',
      description: 'Full-stack web applications, customer portals, booking systems, and administrative dashboards engineered for your exact operational requirements.',
      highlights: ['Role-based authentication', 'Custom databases & APIs', 'Interactive admin dashboards'],
      link: '/start-project?service=Web Application Development',
    },
    {
      num: '06',
      icon: Palette,
      title: 'UI/UX Design',
      benefit: 'Intuitive user journeys & modern aesthetics',
      description: 'User-centered interface design, wireframing, design systems, and responsive layouts that make using your digital product effortless.',
      highlights: ['Clean design systems', 'Conversion-focused UX flow', 'High-fidelity mockups'],
      link: '/start-project?service=UI/UX Design',
    },
  ];

  return (
    <section className="bg-obsidian text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-bold block mb-3">
              What We Build
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white leading-tight">
              Services Built For Business Growth.
            </h2>
            <p className="text-base text-text-muted mt-3">
              Every service is engineered around measurable outcomes: saving operational time, building brand credibility, and generating real inquiries.
            </p>
          </div>

          <Link
            to="/start-project"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-champagne hover:text-champagne-light transition-colors pb-1 flex-shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Focused Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-graphite/60 backdrop-blur-sm rounded-xl border border-graphite-border hover:border-champagne/40 p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-obsidian border border-champagne/20 flex items-center justify-center text-champagne group-hover:border-champagne group-hover:bg-champagne/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-champagne/60">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-warm-white mb-2 group-hover:text-champagne transition-colors">
                    {service.title}
                  </h3>

                  <div className="inline-block text-[11px] font-mono text-sage bg-sage/10 px-2.5 py-0.5 rounded border border-sage/20 mb-4">
                    {service.benefit}
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-warm-white/80 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-champagne flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-white/5">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-champagne hover:text-warm-white transition-colors"
                  >
                    <span>Discuss This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
