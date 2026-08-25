import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectsAPI } from '../../services/api';
import { Button } from '../common/Button';
import { getStoredProjects } from '../../services/projectsStore';

export const WorkShowcase = () => {
  const [projects, setProjects] = useState(() => {
    const all = getStoredProjects();
    return all.filter((p) => p.featured && p.published).slice(0, 4);
  });

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await projectsAPI.getAll({ featured: 'true', published: 'true', limit: 4 });
        if (res.data?.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
          setProjects(res.data.data);
        } else {
          const all = getStoredProjects();
          const feat = all.filter((p) => p.featured && p.published).slice(0, 4);
          if (feat.length > 0) setProjects(feat);
        }
      } catch (err) {
        const all = getStoredProjects();
        const feat = all.filter((p) => p.featured && p.published).slice(0, 4);
        if (feat.length > 0) setProjects(feat);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="bg-obsidian-deep text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-bold block mb-3">
              Case Studies & Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white leading-tight">
              Selected Work
            </h2>
            <p className="text-base text-text-muted mt-3">
              Explore digital platforms, custom websites, and business applications we have engineered.
            </p>
          </div>

          <Button
            to="/work"
            variant="outline"
            size="sm"
            icon={ArrowRight}
            className="text-xs uppercase tracking-wider font-semibold flex-shrink-0"
          >
            View All Projects
          </Button>
        </div>

        {/* Projects Grid (Max 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project._id || project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-graphite/50 rounded-xl border border-graphite-border hover:border-champagne/40 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1"
            >
              {/* Thumbnail Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-obsidian">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-graphite text-champagne/40 font-serif text-2xl">
                    {project.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80" />

                {/* Category Pill */}
                <span className="absolute top-4 left-4 z-10 text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded bg-obsidian/90 backdrop-blur-md text-champagne border border-champagne/30 font-bold">
                  {project.category}
                </span>
              </div>

              {/* Content Details */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-[11px] font-mono text-text-muted mb-2">
                    Client: <span className="text-warm-white font-medium">{project.client || 'Vanguard'}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-warm-white mb-3 group-hover:text-champagne transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-6">
                    {project.shortDescription || project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.technologies?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-text-muted bg-obsidian px-2 py-0.5 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-champagne group-hover:text-champagne-light transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
