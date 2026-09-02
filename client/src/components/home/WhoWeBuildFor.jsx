import React from 'react';
import { motion } from 'framer-motion';
import { School, Film, Building2, Rocket, ArrowRight } from 'lucide-react';

export const WhoWeBuildFor = () => {
  const audiences = [
    {
      id: 'schools',
      icon: School,
      title: 'Schools & Educational Institutions',
      category: 'Education',
      description:
        'Professional websites that help schools communicate with students, parents and visitors through online admissions, event notices, circulars, and campus galleries.',
      highlights: ['Online admission enquiries', 'Notices & circular updates', 'Faculty & campus showcase'],
    },
    {
      id: 'cinemas',
      icon: Film,
      title: 'Cinemas & Entertainment',
      category: 'Entertainment',
      description:
        'Modern cinema websites for now-showing movies, show timings, theatre details, trailer embeds, and seamless customer engagement.',
      highlights: ['Showtimes & movie details', 'Theatre & screen information', 'Trailer & poster showcases'],
    },
    {
      id: 'businesses',
      icon: Building2,
      title: 'Businesses & Corporate Firms',
      category: 'Corporate',
      description:
        'Professional websites that present services, products and company information with high credibility to turn visitors into business inquiries.',
      highlights: ['Corporate brand presentation', 'Lead capture & WhatsApp integration', 'Clear service catalogs'],
    },
    {
      id: 'startups',
      icon: Rocket,
      title: 'Startups & Growing Brands',
      category: 'Growth',
      description:
        'Modern digital experiences designed to establish strong credibility, introduce novel products, and rapidly grow an authoritative online presence.',
      highlights: ['High-converting landing pages', 'Modern interactive UI/UX', 'Mobile-first optimization'],
    },
  ];

  return (
    <section id="who-we-build-for" className="bg-obsidian-deep text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-bold block mb-3">
            Industry Tailored
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white leading-tight mb-4">
            Who We Build For
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Every organization has unique communication needs. We architect dedicated digital experiences tailored to your specific audience.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-graphite/50 backdrop-blur-sm rounded-xl border border-graphite-border hover:border-champagne/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/5">
                    <div className="w-12 h-12 rounded-lg bg-obsidian border border-champagne/20 flex items-center justify-center text-champagne group-hover:border-champagne group-hover:bg-champagne/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded bg-obsidian text-champagne border border-champagne/20 font-bold">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-warm-white mb-3 group-hover:text-champagne transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-warm-white/80 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-champagne hover:text-warm-white transition-colors"
                  >
                    <span>Discuss Your Website</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
