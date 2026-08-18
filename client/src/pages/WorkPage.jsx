import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { projectsAPI } from '../services/api';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/home/CTASection';

export const WorkPage = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const params = { published: 'true' };
        if (activeCategory !== 'All') {
          params.category = activeCategory;
        }
        const res = await projectsAPI.getAll(params);
        if (res.data?.success) {
          setProjects(res.data.data);
        }
      } catch (err) {
        console.warn('Projects fetch failed:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [activeCategory]);

  const categories = ['All', 'Technology', 'Creative', 'Digital'];

  return (
    <>
      <SEOHead
        title="Selected Work & Case Studies"
        description="A curated showcase of high-concurrency systems, visual design systems, and digital transformations engineered for industry leaders."
      />

      {/* Hero Header */}
      <section className="bg-obsidian text-warm-white pt-36 pb-16 border-b border-graphite-border/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-4">
              Proven Performance
            </span>
            <h1 className="text-5xl sm:text-6xl font-serif font-normal text-warm-white leading-tight mb-6">
              Selected Work
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Explore our portfolio of mission-critical web applications, enterprise dashboards, brand identities, and digital operational pipelines.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-white/5 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-champagne text-obsidian font-bold shadow-[0_0_15px_rgba(200,169,107,0.3)]'
                    : 'bg-graphite text-text-muted hover:text-warm-white border border-graphite-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-obsidian-deep text-warm-white py-20 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="h-96 rounded-sm bg-graphite/30 border border-graphite-border animate-pulse"
                />
              ))}
            </div>
          )}

          {!loading && projects.length === 0 && (
            <div className="py-24 text-center border border-dashed border-graphite-border rounded-lg bg-graphite/10">
              <p className="text-text-muted font-mono text-sm uppercase tracking-widest">
                Projects will appear here soon.
              </p>
            </div>
          )}

          {!loading && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {projects.map((project, idx) => (
                <motion.div
                  key={project._id || project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col bg-graphite/40 rounded-md border border-graphite-border hover:border-champagne/40 overflow-hidden transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                >
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

                    <span className="absolute top-4 left-4 z-10 text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded bg-obsidian/90 backdrop-blur-md text-champagne border border-champagne/30">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-[11px] font-mono text-text-muted mb-2">
                        Client: {project.client}
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-warm-white mb-3 group-hover:text-champagne transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed line-clamp-3 mb-6">
                        {project.shortDescription || project.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
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
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};
