import React from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  Code2,
  Smartphone,
  Building2,
  School,
  Film,
  Layers,
  Wrench,
  LayoutTemplate,
  ArrowRight,
} from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Website Design',
      description: 'Clean, modern aesthetic layouts tailored to your brand identity to make an unforgettable first impression.',
    },
    {
      icon: Code2,
      title: 'Website Development',
      description: 'Robust front-end and back-end web architecture engineered for speed, high security, and seamless scalability.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Web Design',
      description: 'Fluid, cross-device layouts that look and perform impeccably on smartphones, tablets, laptops, and wide screens.',
    },
    {
      icon: Building2,
      title: 'Business Websites',
      description: 'Corporate web presence engineered to showcase services, build institutional authority, and generate client leads.',
    },
    {
      icon: School,
      title: 'School Websites',
      description: 'Dedicated educational portals featuring online admission forms, circular notices, faculty profiles, and media galleries.',
    },
    {
      icon: Film,
      title: 'Cinema Websites',
      description: 'Interactive entertainment platforms for showtimes, movie listings, theatre facilities, and customer engagement.',
    },
    {
      icon: LayoutTemplate,
      title: 'Landing Pages',
      description: 'Conversion-focused, ultra-fast single-page sites designed specifically for marketing campaigns and product launches.',
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      description: 'Ongoing technical upkeep, security updates, uptime monitoring, and continuous content refreshes.',
    },
    {
      icon: Layers,
      title: 'UI/UX Design',
      description: 'User-centered wireframes, component design systems, and interaction models that make navigation effortless.',
    },
  ];

  return (
    <section id="services" className="bg-obsidian text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-bold block mb-3">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white leading-tight">
              Services We Provide
            </h2>
            <p className="text-base text-text-muted mt-3">
              High-standard digital solutions crafted for real-world business results — zero bloat, pure quality.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-champagne hover:text-champagne-light transition-colors pb-1 flex-shrink-0"
          >
            <span>Request a Service</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-graphite/40 backdrop-blur-sm rounded-xl border border-graphite-border hover:border-champagne/40 p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-obsidian border border-champagne/20 flex items-center justify-center text-champagne mb-6 group-hover:border-champagne group-hover:bg-champagne/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-warm-white mb-2 group-hover:text-champagne transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-champagne/70 group-hover:text-champagne transition-colors font-semibold"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
