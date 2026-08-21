import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  School, 
  ShoppingBag, 
  Stethoscope, 
  Building2, 
  Briefcase, 
  Rocket, 
  RefreshCw,
  Layers,
  Code2,
  Cpu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AIConsultantSection = () => {
  const navigate = useNavigate();

  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const industries = [
    {
      id: 'school',
      icon: School,
      title: 'School / Education',
      example: 'I run a school and want more admissions',
      questions: [
        { id: 'hasWebsite', q: 'Do you currently have an active website?', options: ['No, starting fresh', 'Yes, but outdated'] },
        { id: 'onlineAdmissions', q: 'Do you need online admission enquiry forms?', options: ['Yes, priority requirement', 'Standard contact form only'] },
        { id: 'parentPortal', q: 'Do parents need fee payment or updates portal?', options: ['Yes, parent portal needed', 'Not right now'] },
      ],
      solution: {
        title: 'School Digital Platform & Admissions Engine',
        tagline: 'Modern school website, online admission forms & parent communication',
        components: [
          'Modern Responsive School Website',
          'Online Admission Enquiry & Application System',
          'Events, Notice Board & Photo Gallery Management',
          'Achievements, Faculty & Facilities Showcase',
          'Direct WhatsApp & Lead Capture Routing',
          'Admin Dashboard to Manage Inquiries & Notices',
        ],
        techStack: 'React + Node.js + MongoDB (Ultra-Fast Cloud Hosting)',
        scopeLevel: 'Comprehensive Educational Platform (2–3 Weeks)',
        estimatedStarting: '₹24,999 – ₹49,999',
      },
    },
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      title: 'Retail / Direct-to-Consumer',
      example: 'I want to sell products online with automated payments',
      questions: [
        { id: 'catalogSize', q: 'How many products do you plan to sell?', options: ['1–20 products', '20–200+ products'] },
        { id: 'payments', q: 'Do you need instant UPI & Card payment gateways?', options: ['Yes, 1-click Razorpay / UPI', 'Cash on Delivery only'] },
        { id: 'inventory', q: 'Do you require automated inventory & invoice tracking?', options: ['Yes, automated invoices & stock', 'Basic order alerts'] },
      ],
      solution: {
        title: 'High-Converting E-Commerce & Retail Engine',
        tagline: 'Custom online store with 1-click UPI checkout & inventory sync',
        components: [
          'Custom Brand E-Commerce Store',
          'Product Catalog with Filters & Search',
          'Instant UPI, Credit Card & Netbanking Checkout',
          'Automated WhatsApp Order Confirmation to Customers',
          'Admin Inventory & Order Management Dashboard',
          'SEO Optimized Product Pages for Google Ranking',
        ],
        techStack: 'React + Express + MongoDB + Razorpay / Stripe API',
        scopeLevel: 'Complete Commercial Store (3–4 Weeks)',
        estimatedStarting: '₹34,999 – ₹69,999',
      },
    },
    {
      id: 'clinic',
      icon: Stethoscope,
      title: 'Healthcare / Clinic',
      example: 'I need patient appointments and doctor profiles',
      questions: [
        { id: 'booking', q: 'Do patients need to book appointments online?', options: ['Yes, interactive slot booking', 'Direct WhatsApp booking'] },
        { id: 'doctors', q: 'Multiple doctors and department listings?', options: ['Yes, multi-specialty clinic', 'Single practitioner'] },
        { id: 'records', q: 'Do you need digital prescriptions / reports?', options: ['Basic inquiry only', 'Online report downloads'] },
      ],
      solution: {
        title: 'Clinic & Patient Booking Portal',
        tagline: 'Doctor profiles, specialty showcase & online appointment scheduling',
        components: [
          'Clean Medical & Healthcare Practice Website',
          'Doctor Profiles, Timings & Specialty Breakdown',
          'Online Appointment Request & Slot Management',
          'WhatsApp Reminder & Confirmation System',
          'Patient Testimonials & Treatment FAQs',
          'Mobile-First Design for Quick Emergency Access',
        ],
        techStack: 'React + Node.js + Automated SMS/WhatsApp API',
        scopeLevel: 'Medical Practice Portal (2–3 Weeks)',
        estimatedStarting: '₹22,999 – ₹44,999',
      },
    },
    {
      id: 'realestate',
      icon: Building2,
      title: 'Real Estate / Properties',
      example: 'I want to showcase property listings and collect leads',
      questions: [
        { id: 'listings', q: 'Do you need dynamic property filtering (BHK, Location, Price)?', options: ['Yes, interactive property filter', 'Single project showcase'] },
        { id: 'virtualTour', q: 'Do you want brochure downloads & floor plans?', options: ['Yes, gated brochure downloads', 'Standard gallery only'] },
        { id: 'crm', q: 'Should inquiries automatically route to sales agents?', options: ['Yes, instant WhatsApp/email routing', 'Standard email only'] },
      ],
      solution: {
        title: 'Real Estate Property Showcase & Lead Engine',
        tagline: 'Interactive property listings, floor plan downloads & lead capture',
        components: [
          'High-Resolution Property & Project Showcase',
          'Interactive Filter by Budget, BHK, & Location',
          'Gated PDF Brochure & Floor Plan Downloads',
          'Instant WhatsApp Site Visit Scheduling Button',
          'Admin Dashboard to Add/Edit Property Listings',
          'Google Maps Location & Connectivity Highlights',
        ],
        techStack: 'React + Node.js + Cloudinary Media Storage',
        scopeLevel: 'Real Estate Platform (2–4 Weeks)',
        estimatedStarting: '₹29,999 – ₹59,999',
      },
    },
    {
      id: 'services',
      icon: Briefcase,
      title: 'Professional Services / B2B',
      example: 'Corporate business website to build trust and get corporate clients',
      questions: [
        { id: 'caseStudies', q: 'Do you want structured case studies & client results?', options: ['Yes, detailed case study system', 'Simple services overview'] },
        { id: 'leadGen', q: 'Do you want interactive cost estimators or consultation booking?', options: ['Yes, interactive inquiry estimator', 'Standard contact form'] },
        { id: 'blog', q: 'Do you need an insights / thought leadership blog?', options: ['Yes, dynamic CMS blog', 'Static pages only'] },
      ],
      solution: {
        title: 'Executive Corporate Platform & Case Study Engine',
        tagline: 'Authoritative brand positioning, client casework & conversion funnel',
        components: [
          'Executive Brand Identity & Editorial Web Layout',
          'Detailed Solutions & Service Breakdown Catalog',
          'Structured Case Studies (Challenge → Solution → Result)',
          'Interactive Project Estimator / Scope Selector',
          'Secure Admin Panel for Content & Lead Tracking',
          'Sub-Second Global Cloud CDN Performance',
        ],
        techStack: 'React + Vite + Node.js + Mongoose (Enterprise Cloud)',
        scopeLevel: 'Corporate Business Platform (2–3 Weeks)',
        estimatedStarting: '₹24,999 – ₹49,999',
      },
    },
    {
      id: 'saas',
      icon: Rocket,
      title: 'Tech Startup / SaaS',
      example: 'Custom web application, user login portal or subscription tool',
      questions: [
        { id: 'auth', q: 'Do users need account registration & authentication?', options: ['Yes, multi-role user accounts', 'Public landing page only'] },
        { id: 'subscription', q: 'Do you need recurring subscription billing?', options: ['Yes, subscription payment plans', 'One-time payment / custom pricing'] },
        { id: 'api', q: 'Do you need complex database architecture or third-party APIs?', options: ['Yes, custom database & backend APIs', 'Standard web app'] },
      ],
      solution: {
        title: 'Custom SaaS Platform & Web Application Architecture',
        tagline: 'Multi-role authentication, dashboard metrics & scalable cloud backend',
        components: [
          'High-Conversion SaaS Landing Page & Pricing Matrix',
          'Secure User Authentication (JWT / OAuth / Password Reset)',
          'Customer Dashboard with Metrics & Data Visualization',
          'Subscription Billing & Payment Gateway Webhooks',
          'Scalable MongoDB / PostgreSQL Database Architecture',
          'Protected Administrative Command Center',
        ],
        techStack: 'Full-Stack MERN Architecture (React, Node, Express, MongoDB)',
        scopeLevel: 'Full-Stack Web Application (4–8 Weeks)',
        estimatedStarting: '₹49,999 – ₹1,20,000+',
      },
    },
  ];

  const handleSelectIndustry = (ind) => {
    setSelectedIndustry(ind);
    setAnswers({});
    setRecommendation(null);
  };

  const handleAnswer = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleGenerate = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setRecommendation(selectedIndustry.solution);
    }, 600);
  };

  const handleBuildThis = () => {
    if (!selectedIndustry) return;
    navigate(`/start-project?package=business&industry=${selectedIndustry.id}`);
  };

  return (
    <section className="bg-obsidian text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20">
            <Bot className="w-3.5 h-3.5 text-champagne" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-bold">
              AI Project Consultant
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white leading-tight mb-4">
            Not Sure What You Need? Ask Vanguard AI.
          </h2>

          <p className="text-base text-text-muted leading-relaxed">
            Select your industry below. Our diagnostic consultant will analyze your business model and generate a tailored digital solution architecture in seconds.
          </p>
        </div>

        {/* Interactive Consultant Container */}
        <div className="bg-graphite/60 backdrop-blur-xl rounded-2xl border border-champagne/30 p-6 sm:p-10 shadow-2xl">
          {/* Step 1: Industry Selection */}
          {!selectedIndustry && (
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-4 font-semibold">
                Step 1: Choose Your Industry Or Business Type
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => handleSelectIndustry(ind)}
                      className="p-5 rounded-xl bg-obsidian/80 border border-graphite-border hover:border-champagne hover:bg-graphite transition-all text-left group flex flex-col justify-between h-40"
                    >
                      <div className="w-10 h-10 rounded-lg bg-graphite border border-white/5 flex items-center justify-center text-champagne group-hover:border-champagne group-hover:bg-champagne/10 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h4 className="font-serif font-bold text-lg text-warm-white group-hover:text-champagne transition-colors">
                          {ind.title}
                        </h4>
                        <p className="text-[11px] text-text-muted mt-1 line-clamp-2">
                          "{ind.example}"
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Diagnostic Questions */}
          {selectedIndustry && !recommendation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-champagne/15 text-champagne flex items-center justify-center">
                    <selectedIndustry.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-warm-white">
                      {selectedIndustry.title}
                    </h4>
                    <span className="text-[10px] font-mono text-text-muted">Answering Diagnostic Questions</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="text-xs font-mono text-text-muted hover:text-champagne underline"
                >
                  Change Industry
                </button>
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {selectedIndustry.questions.map((q, idx) => (
                  <div key={q.id} className="space-y-2.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-warm-white font-semibold">
                      {idx + 1}. {q.q}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt) => {
                        const isSelected = answers[q.id] === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleAnswer(q.id, opt)}
                            className={`py-3 px-4 rounded-lg text-left text-xs font-sans border transition-all ${
                              isSelected
                                ? 'bg-champagne text-obsidian font-bold border-champagne shadow-md'
                                : 'bg-obsidian/80 text-text-muted hover:text-warm-white border-graphite-border'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={isAnalyzing}
                  className="px-6 py-3.5 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-champagne-light transition-all shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isAnalyzing ? 'Analyzing Requirements...' : 'Generate Recommended Solution →'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: AI Generated Recommendation */}
          {recommendation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-champagne">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold uppercase tracking-wider">AI Recommended Solution Blueprint</span>
                </div>

                <button
                  onClick={() => {
                    setRecommendation(null);
                    setSelectedIndustry(null);
                  }}
                  className="text-xs font-mono text-text-muted hover:text-warm-white flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Start Over
                </button>
              </div>

              {/* Solution Card */}
              <div className="bg-obsidian p-6 sm:p-8 rounded-xl border border-champagne/40 space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne bg-champagne/10 px-2.5 py-1 rounded border border-champagne/20">
                    Target Architecture
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-warm-white mt-3 mb-1">
                    {recommendation.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {recommendation.tagline}
                  </p>
                </div>

                {/* Recommended Components */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-3 font-semibold">
                    Core Platform Components:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {recommendation.components.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-warm-white bg-graphite/50 p-2.5 rounded border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech & Scope Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5 text-xs font-mono">
                  <div className="bg-graphite/40 p-3 rounded border border-white/5">
                    <span className="text-text-muted block text-[10px]">Technology Stack</span>
                    <span className="text-warm-white font-bold">{recommendation.techStack}</span>
                  </div>
                  <div className="bg-graphite/40 p-3 rounded border border-white/5">
                    <span className="text-text-muted block text-[10px]">Estimated Timeline</span>
                    <span className="text-warm-white font-bold">{recommendation.scopeLevel}</span>
                  </div>
                  <div className="bg-graphite/40 p-3 rounded border border-white/5">
                    <span className="text-text-muted block text-[10px]">Investment Range</span>
                    <span className="text-champagne font-bold">{recommendation.estimatedStarting}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-text-muted">
                  Ready to turn this blueprint into a live digital platform?
                </p>

                <button
                  type="button"
                  onClick={handleBuildThis}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-champagne-light transition-all shadow-xl"
                >
                  <span>Build This Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
