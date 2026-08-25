import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projectsAPI } from '../../services/api';
import { Button } from '../common/Button';

const DEFAULT_FEATURED_PROJECTS = [
  {
    _id: '1',
    slug: 'aethelgard-capital-management',
    title: 'Aethelgard Capital Management',
    category: 'Technology',
    shortDescription: 'High-frequency asset management portal with real-time portfolio telemetry and algorithmic rebalancing.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Recharts'],
    client: 'Aethelgard Global Partners',
  },
  {
    _id: '2',
    slug: 'kinetix-autonomous-robotics',
    title: 'Kinetix Autonomous Robotics',
    category: 'Creative',
    shortDescription: 'Brand identity, typography system, and 3D web showcase for an industrial drone robotics firm.',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Brand Strategy', 'Visual Identity', 'Typography', 'React'],
    client: 'Kinetix Robotics Corp',
  },
  {
    _id: '3',
    slug: 'luminary-health-platform',
    title: 'Luminary Health Platform',
    category: 'Technology',
    shortDescription: 'Telehealth web ecosystem connecting specialized clinicians with patients across India and globally.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    client: 'Luminary Health Network',
  },
  {
    _id: '4',
    slug: 'vespera-atelier-design-studio',
    title: 'Vespera Atelier Design Studio',
    category: 'Digital',
    shortDescription: 'Digital presence upgrade, smart booking forms, dynamic QR portfolio, and synchronized client intake.',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Digital Cards', 'QR Solutions', 'WhatsApp Business', 'Automated Forms'],
    client: 'Vespera Atelier',
  },
];

export const WorkShowcase = () => {
  const [projects, setProjects] = useState(DEFAULT_FEATURED_PROJECTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await projectsAPI.getAll({ featured: 'true', published: 'true', limit: 4 });
        if (res.data?.success && res.data.data && res.data.data.length > 0) {
          setProjects(res.data.data);
        }
      } catch (err) {
        console.warn('Using default featured projects:', err.message);
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
                    Client: <span className="text-warm-white font-medium">{project.client}</span>
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
