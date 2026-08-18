import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  Terminal,
  Palette,
  Sparkles,
  CheckCircle2,
  Plus,
  Check,
  Cpu,
  Layers,
  ShoppingBag,
  Globe,
  Sliders,
  Send,
  X,
} from 'lucide-react';
import { servicesAPI } from '../services/api';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/home/CTASection';

export const SolutionsPage = () => {
  const { category: routeCategory } = useParams();
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState(routeCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('selector'); // 'selector' | 'catalog'

  // User interactive selection state
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedFocus, setSelectedFocus] = useState('web'); // 'web', 'creative', 'digital', 'custom'

  // Focus Category Definitions for Normal Users
  const focusAreas = [
    {
      id: 'web',
      icon: Globe,
      title: 'Websites & Web Apps',
      subtitle: 'Corporate websites, landing pages, e-commerce & customer dashboards',
      category: 'technology',
      color: 'border-champagne/40 bg-champagne/5',
      featuredSlugs: [
        'web-development',
        'business-websites',
        'landing-pages',
        'ecommerce-websites',
        'web-applications',
        'admin-dashboards',
      ],
    },
    {
      id: 'creative',
      icon: Palette,
      title: 'Branding & Visual Design',
      subtitle: 'Logos, brand identity, social media creatives & marketing collateral',
      category: 'creative',
      color: 'border-champagne/40 bg-champagne/5',
      featuredSlugs: [
        'logo-design',
        'brand-identity',
        'graphic-design',
        'social-media-creatives',
        'marketing-materials',
        'business-card-design',
      ],
    },
    {
      id: 'digital',
      icon: Sparkles,
      title: 'Digital Setup & Operations',
      subtitle: 'WhatsApp Business, digital cards, QR menus, online forms & documents',
      category: 'digital',
      color: 'border-champagne/40 bg-champagne/5',
      featuredSlugs: [
        'whatsapp-business-setup',
        'digital-business-cards',
        'qr-code-solutions',
        'digital-menus',
        'online-forms',
        'digital-business-presence',
      ],
    },
    {
      id: 'custom',
      icon: Sliders,
      title: 'Custom Tools & Automation',
      subtitle: 'Automated workflows, custom business tools & database integrations',
      category: 'technology',
      color: 'border-champagne/40 bg-champagne/5',
      featuredSlugs: [
        'business-management-systems',
        'internal-business-tools',
        'automation-solutions',
        'database-solutions',
        'api-integration',
        'custom-technology-solutions',
      ],
    },
  ];

  // Sync category param
  useEffect(() => {
    if (routeCategory) {
      setActiveCategory(routeCategory.toLowerCase());
      setViewMode('catalog');
    }
  }, [routeCategory]);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const params = {};
        if (activeCategory && activeCategory !== 'all') {
          params.category = activeCategory;
        }
        if (searchQuery.trim()) {
          params.search = searchQuery.trim();
        }

        const res = await servicesAPI.getAll(params);
        if (res.data?.success) {
          setServices(res.data.data);
        }
      } catch (err) {
        console.warn('Error loading services:', err.message);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchServices, 200);
    return () => clearTimeout(debounceTimer);
  }, [activeCategory, searchQuery]);

  const toggleSelectService = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleProceedToInquiry = () => {
    if (selectedServices.length === 0) {
      navigate('/contact');
      return;
    }
    const params = new URLSearchParams();
    params.set('selected', selectedServices.join(', '));
    params.set('service', selectedServices[0] || 'General Inquiry');
    navigate(`/contact?${params.toString()}`);
  };

  // Get current services for the active focus area in Selector mode
  const currentFocusObj = focusAreas.find((f) => f.id === selectedFocus) || focusAreas[0];
  const focusServices = services.filter((s) =>
    currentFocusObj.featuredSlugs.includes(s.slug) || s.category.toLowerCase() === currentFocusObj.category
  );

  return (
    <>
      <SEOHead
        title="Solutions & Interactive Service Selector"
        description="Choose your business goals and configure your exact software, creative, and digital setup with our intuitive solution selector."
      />

      {/* Header (Obsidian) */}
      <section className="bg-obsidian text-warm-white pt-36 pb-14 border-b border-graphite-border/60 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-3">
              Tailored Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-warm-white leading-tight mb-4">
              What Would You Like To Build?
            </h1>
            <p className="text-base text-text-muted leading-relaxed">
              Select what you need below, or browse our entire catalog. We’ll organize your custom scope directly into a structured proposal.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <button
              onClick={() => setViewMode('selector')}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === 'selector'
                  ? 'bg-champagne text-obsidian font-bold shadow-md'
                  : 'bg-graphite text-text-muted hover:text-warm-white border border-graphite-border'
              }`}
            >
              🎯 Interactive Selector (Recommended)
            </button>
            <button
              onClick={() => setViewMode('catalog')}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === 'catalog'
                  ? 'bg-champagne text-obsidian font-bold shadow-md'
                  : 'bg-graphite text-text-muted hover:text-warm-white border border-graphite-border'
              }`}
            >
              📋 Full Directory (48 Services)
            </button>
          </div>
        </div>
      </section>

      {/* VIEW MODE 1: INTERACTIVE SERVICE SELECTOR (Eye-Relaxing Warm Ivory & Soft Graphite) */}
      {viewMode === 'selector' && (
        <section className="bg-ivory text-text-dark py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            {/* Step 1: Goal Tabs */}
            <div className="mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne-dark font-bold block mb-4">
                Step 1: Choose Your Primary Focus Area
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {focusAreas.map((focus) => {
                  const Icon = focus.icon;
                  const isSelected = selectedFocus === focus.id;
                  return (
                    <button
                      key={focus.id}
                      onClick={() => setSelectedFocus(focus.id)}
                      className={`p-6 rounded-md text-left transition-all duration-300 border flex flex-col justify-between h-44 ${
                        isSelected
                          ? 'bg-warm-white border-champagne-dark shadow-md ring-2 ring-champagne-dark/20'
                          : 'bg-warm-white/70 border-border-light/70 hover:bg-warm-white hover:border-champagne-dark/40'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-sm bg-ivory flex items-center justify-center text-text-dark mb-4">
                        <Icon className="w-5 h-5 text-champagne-dark" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-base text-text-dark mb-1">
                          {focus.title}
                        </h3>
                        <p className="text-[11px] text-text-muted line-clamp-2 leading-relaxed">
                          {focus.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Interactive Service Checkboxes */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-border-light/70">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne-dark font-bold">
                  Step 2: Select the Services You Need
                </span>
                <span className="text-xs font-mono text-text-muted">
                  {selectedServices.length} item(s) selected
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {focusServices.slice(0, 9).map((svc) => {
                  const isChecked = selectedServices.includes(svc.name);
                  return (
                    <div
                      key={svc._id || svc.slug}
                      onClick={() => toggleSelectService(svc.name)}
                      className={`p-6 rounded-md border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none ${
                        isChecked
                          ? 'bg-warm-white border-champagne-dark ring-2 ring-champagne-dark/20 shadow-sm'
                          : 'bg-warm-white/80 border-border-light/70 hover:bg-warm-white hover:border-champagne-dark/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h4 className="font-serif font-bold text-base text-text-dark">
                            {svc.name}
                          </h4>
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                              isChecked
                                ? 'bg-champagne text-obsidian font-bold'
                                : 'bg-ivory border border-border-light text-transparent'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-4">
                          {svc.shortDescription}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border-light/40 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-text-muted">
                          {svc.deliverables?.length || 3}+ Deliverables
                        </span>
                        <Link
                          to={`/solutions/${svc.category.toLowerCase()}/${svc.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-[11px] font-bold text-champagne-dark hover:underline"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selected Scope Summary Bar */}
            <div className="bg-warm-white p-8 rounded-lg border border-border-light/80 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne-dark font-bold block mb-1">
                  Your Configured Scope
                </span>
                {selectedServices.length === 0 ? (
                  <p className="text-sm text-text-muted">
                    Click any service cards above to add them to your project brief.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedServices.map((name) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-ivory text-text-dark border border-border-light text-xs font-mono"
                      >
                        <span>{name}</span>
                        <button
                          onClick={() => toggleSelectService(name)}
                          className="text-text-muted hover:text-red-500"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto flex-shrink-0">
                {selectedServices.length > 0 && (
                  <button
                    onClick={() => setSelectedServices([])}
                    className="px-4 py-3 text-xs font-mono uppercase text-text-muted hover:text-text-dark"
                  >
                    Clear All
                  </button>
                )}
                <Button
                  onClick={handleProceedToInquiry}
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  className="w-full md:w-auto text-xs uppercase tracking-wider font-bold bg-obsidian text-warm-white hover:bg-graphite hover:text-champagne"
                >
                  {selectedServices.length > 0
                    ? `Proceed With (${selectedServices.length}) Services`
                    : 'Start a Project'}
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VIEW MODE 2: FULL DIRECTORY CATALOG (Obsidian Deep) */}
      {viewMode === 'catalog' && (
        <section className="bg-obsidian-deep text-warm-white py-16 sm:py-24 min-h-[600px]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {[
                  { label: 'All Services', val: 'all' },
                  { label: 'Technology', val: 'technology' },
                  { label: 'Creative', val: 'creative' },
                  { label: 'Digital', val: 'digital' },
                ].map((tab) => (
                  <button
                    key={tab.val}
                    onClick={() => setActiveCategory(tab.val)}
                    className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                      activeCategory === tab.val
                        ? 'bg-champagne text-obsidian font-bold shadow-sm'
                        : 'bg-graphite text-text-muted hover:text-warm-white border border-graphite-border'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 48 capabilities..."
                  className="w-full bg-graphite border border-graphite-border rounded-sm pl-10 pr-4 py-2 text-xs font-mono text-warm-white placeholder-text-muted/60 focus:outline-none focus:border-champagne"
                />
              </div>
            </div>

            {/* Catalog Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-60 rounded-sm bg-graphite/30 border border-graphite-border animate-pulse"
                  />
                ))}
              </div>
            ) : services.length === 0 ? (
              <div className="py-24 text-center border border-dashed border-graphite-border rounded-lg bg-graphite/10">
                <p className="text-text-muted font-mono text-sm uppercase tracking-wider mb-4">
                  No services found.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Reset Filter
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc) => {
                  const isSelected = selectedServices.includes(svc.name);
                  return (
                    <div
                      key={svc._id || svc.slug}
                      className={`bg-graphite/40 backdrop-blur-sm rounded-sm border p-8 flex flex-col justify-between transition-all duration-300 ${
                        isSelected ? 'border-champagne ring-1 ring-champagne/30' : 'border-graphite-border hover:border-champagne/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-obsidian text-champagne border border-champagne/20">
                            {svc.category}
                          </span>
                          <button
                            onClick={() => toggleSelectService(svc.name)}
                            className={`p-1 rounded text-[10px] font-mono flex items-center gap-1 uppercase transition-colors ${
                              isSelected
                                ? 'text-champagne font-bold'
                                : 'text-text-muted hover:text-warm-white'
                            }`}
                          >
                            {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                            <span>{isSelected ? 'Selected' : 'Select'}</span>
                          </button>
                        </div>

                        <h3 className="text-xl font-serif font-semibold text-warm-white mb-3">
                          {svc.name}
                        </h3>

                        <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-6">
                          {svc.shortDescription}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <Link
                          to={`/solutions/${svc.category.toLowerCase()}/${svc.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-champagne hover:text-champagne-light transition-colors"
                        >
                          <span>Full Specification</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </>
  );
};
