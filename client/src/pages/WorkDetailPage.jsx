import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Layers, Cpu, Globe } from 'lucide-react';
import { projectsAPI } from '../services/api';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/home/CTASection';
import { NotFoundPage } from './NotFoundPage';

export const WorkDetailPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      setNotFound(false);
      try {
        const res = await projectsAPI.getBySlug(slug);
        if (res.data?.success && res.data?.data) {
          setProject(res.data.data);
          setRelated(res.data.related || []);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-champagne/20 border-t-champagne rounded-full animate-spin" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne">
            Loading Case Study...
          </span>
        </div>
      </div>
    );
  }

  if (notFound || !project) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.shortDescription || project.description}
      />

      {/* Header */}
      <section className="bg-obsidian text-warm-white pt-36 pb-16 border-b border-graphite-border/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-8">
            <Link to="/" className="hover:text-warm-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/work" className="hover:text-warm-white transition-colors">
              Work
            </Link>
            <span>/</span>
            <span className="text-champagne">{project.title}</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-4">
              {project.category} · Client: {project.client}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-warm-white leading-[1.1] mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      {project.thumbnail && (
        <section className="bg-obsidian py-12">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="rounded-lg overflow-hidden border border-graphite-border shadow-2xl aspect-[21/9] bg-graphite">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Case Study Content (Ivory) */}
      <section className="bg-ivory text-text-dark py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne-dark font-semibold block mb-3">
                  Case Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-text-dark mb-6">
                  Technical Blueprint & Execution
                </h2>
                <p className="text-base sm:text-lg text-text-muted leading-relaxed whitespace-pre-line mb-8">
                  {project.description}
                </p>
              </div>

              {/* Gallery Images if any */}
              {project.images && project.images.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  {project.images.slice(1).map((img, i) => (
                    <div key={i} className="rounded-md overflow-hidden border border-border-light/60 aspect-[4/3] bg-warm-white">
                      <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Meta Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-warm-white p-8 rounded-sm border border-border-light/70 shadow-sm sticky top-28 space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block mb-1">
                    Client Partner
                  </span>
                  <p className="font-serif font-bold text-text-dark text-lg">
                    {project.client}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-light/40">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block mb-1">
                    Category Specialization
                  </span>
                  <p className="font-serif font-bold text-text-dark text-lg">
                    {project.category}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-light/40">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block mb-3">
                    Technologies & Architecture
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono bg-ivory px-2.5 py-1 rounded text-text-dark border border-border-light/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border-light/40">
                  <Button
                    to="/contact"
                    variant="champagne"
                    size="md"
                    icon={ArrowRight}
                    className="w-full bg-obsidian text-warm-white hover:bg-graphite hover:text-champagne justify-center text-xs uppercase tracking-wider font-semibold"
                  >
                    Discuss Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related && related.length > 0 && (
        <section className="bg-obsidian text-warm-white py-20 border-t border-graphite-border/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold mb-8">
              Explore Related Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/work/${rel.slug}`}
                  className="p-8 rounded-sm bg-graphite/40 border border-graphite-border hover:border-champagne/40 group transition-all"
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-obsidian text-champagne border border-champagne/20 inline-block mb-3">
                    {rel.category}
                  </span>
                  <h4 className="text-2xl font-serif font-semibold text-warm-white group-hover:text-champagne transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-text-muted line-clamp-2 mb-4">
                    {rel.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-champagne uppercase tracking-wider">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </>
  );
};
