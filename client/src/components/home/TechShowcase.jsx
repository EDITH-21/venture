import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Sparkles } from 'lucide-react';

export const TechShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
  ];

  const technologies = [
    { name: 'React.js', category: 'frontend', role: 'Reactive User Interfaces & Web Apps' },
    { name: 'Next.js', category: 'frontend', role: 'Server-Side Rendering & SEO Performance' },
    { name: 'Vite', category: 'frontend', role: 'Lightning-Fast Module Bundling' },
    { name: 'Tailwind CSS', category: 'frontend', role: 'Modern Responsive Design Systems' },
    { name: 'JavaScript / ES6+', category: 'frontend', role: 'Interactive Browser Architecture' },
    { name: 'HTML5 & Semantic Web', category: 'frontend', role: 'Accessible Structured Markup' },
    
    { name: 'Node.js', category: 'backend', role: 'High-Concurrency Runtime' },
    { name: 'Express.js', category: 'backend', role: 'Lightweight REST & API Architecture' },
    { name: 'RESTful APIs', category: 'backend', role: 'Microservice Interoperability' },
    { name: 'JWT & Bcrypt', category: 'backend', role: 'Secure Role-Based Authentication' },
    { name: 'Nodemailer / SMTP', category: 'backend', role: 'Automated Email Dispatch Systems' },

    { name: 'MongoDB', category: 'database', role: 'Flexible High-Speed Document Database' },
    { name: 'Mongoose ODM', category: 'database', role: 'Type-Safe Data Modeling & Validation' },
    { name: 'PostgreSQL', category: 'database', role: 'Relational Database Architecture' },
    { name: 'Firebase', category: 'database', role: 'Real-Time Data Sync' },

    { name: 'Vercel Serverless', category: 'cloud', role: 'Sub-Second Global Edge Network' },
    { name: 'Cloudflare', category: 'cloud', role: 'Global CDN, DDoS & SSL Security' },
    { name: 'AWS & Cloud Hosting', category: 'cloud', role: 'Scalable Enterprise Infrastructure' },
    { name: 'GitHub CI/CD', category: 'cloud', role: 'Automated Build & Deployment Pipelines' },
  ];

  const filtered = activeCategory === 'all' 
    ? technologies 
    : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="bg-obsidian-deep text-warm-white py-20 border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-2">
            Engineering Standards
          </span>
          <h3 className="text-3xl font-serif font-normal text-warm-white mb-2">
            Technologies We Master & Deploy.
          </h3>
          <p className="text-xs text-text-muted">
            We use reliable modern technologies to build fast, scalable, and secure digital products.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === c.id
                  ? 'bg-champagne text-obsidian font-bold shadow-md'
                  : 'bg-graphite/60 text-text-muted hover:text-warm-white border border-graphite-border'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filtered.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.02 }}
              className="p-4 rounded-lg bg-graphite/40 border border-graphite-border hover:border-champagne/40 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-serif font-bold text-sm text-warm-white">
                  {tech.name}
                </span>
                <span className="text-[9px] font-mono uppercase text-champagne bg-champagne/10 px-2 py-0.5 rounded">
                  {tech.category}
                </span>
              </div>
              <p className="text-[10px] text-text-muted leading-relaxed">
                {tech.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
