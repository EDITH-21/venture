import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Layers, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  MessageSquare,
  Building,
  Mail,
  Phone,
  User
} from 'lucide-react';
import { inquiriesAPI } from '../../services/api';

export const ProjectEstimator = () => {
  const [step, setStep] = useState(1);

  // Selections
  const [projectType, setProjectType] = useState('Business Website');
  const [pageCount, setPageCount] = useState('1–5');
  const [selectedFeatures, setSelectedFeatures] = useState([
    'Admin Panel',
    'Analytics',
  ]);
  const [timeline, setTimeline] = useState('2–4 weeks');

  // Contact Info
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const projectTypes = [
    { label: 'Business Website', base: 14999, desc: 'Corporate presence, portfolio or school site' },
    { label: 'E-Commerce Website', base: 29999, desc: 'Store with shopping cart and online payments' },
    { label: 'Web Application', base: 44999, desc: 'Custom portal, SaaS or internal tool' },
    { label: 'Admin Dashboard', base: 24999, desc: 'Data visualization and business management' },
    { label: 'Custom Software', base: 59999, desc: 'Tailored enterprise architecture & database' },
    { label: 'Other Digital Solution', base: 19999, desc: 'Specialized workflow automation' },
  ];

  const pageOptions = [
    { label: '1–5 Pages', val: '1–5', multiplier: 1.0 },
    { label: '6–10 Pages', val: '6–10', multiplier: 1.25 },
    { label: '11–20 Pages', val: '11–20', multiplier: 1.55 },
    { label: '20+ Pages', val: '20+', multiplier: 1.9 },
  ];

  const featureOptions = [
    { id: 'Authentication', label: 'User Authentication & Login', cost: 4000 },
    { id: 'Admin Panel', label: 'Admin Panel / Content Management', cost: 6000 },
    { id: 'Database', label: 'Custom Database Storage', cost: 5000 },
    { id: 'Payment Gateway', label: 'Payment Gateway & Instant UPI', cost: 4500 },
    { id: 'Booking System', label: 'Appointment / Booking System', cost: 5500 },
    { id: 'API Integration', label: 'Third-Party API Integration', cost: 5000 },
    { id: 'E-commerce', label: 'E-Commerce Product Catalog', cost: 7000 },
    { id: 'CMS', label: 'Dynamic Blog / News CMS', cost: 3500 },
    { id: 'User Dashboard', label: 'Customer Dashboard / Profile', cost: 6000 },
    { id: 'Notifications', label: 'WhatsApp / Email Notifications', cost: 3500 },
    { id: 'Analytics', label: 'Conversion Tracking & Analytics', cost: 2500 },
  ];

  const timelineOptions = [
    { label: 'ASAP (1–2 Weeks)', val: 'ASAP', multiplier: 1.15 },
    { label: '2–4 Weeks (Standard)', val: '2–4 weeks', multiplier: 1.0 },
    { label: '1–2 Months', val: '1–2 months', multiplier: 0.95 },
    { label: 'Flexible', val: 'Flexible', multiplier: 0.95 },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculate dynamic range
  const calculation = useMemo(() => {
    const typeObj = projectTypes.find((p) => p.label === projectType) || projectTypes[0];
    const pageObj = pageOptions.find((p) => p.val === pageCount) || pageOptions[0];
    const timeObj = timelineOptions.find((t) => t.val === timeline) || timelineOptions[1];

    let featuresTotal = selectedFeatures.reduce((acc, featId) => {
      const fObj = featureOptions.find((f) => f.id === featId);
      return acc + (fObj ? fObj.cost : 0);
    }, 0);

    const baseSum = (typeObj.base + featuresTotal) * pageObj.multiplier * timeObj.multiplier;
    const minEstimate = Math.round((baseSum * 0.9) / 1000) * 1000;
    const maxEstimate = Math.round((baseSum * 1.2) / 1000) * 1000;

    return {
      min: minEstimate,
      max: maxEstimate,
      formatted: `₹${minEstimate.toLocaleString('en-IN')} – ₹${maxEstimate.toLocaleString('en-IN')}`,
    };
  }, [projectType, pageCount, selectedFeatures, timeline]);

  const handleSubmitEstimate = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.phone || !contact.email) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }

    setStatus('submitting');

    const estimateDetails = [
      `📊 *New Project Estimate Request*`,
      ``,
      `👤 *Name:* ${contact.name}`,
      `🏢 *Company:* ${contact.company || 'N/A'}`,
      `📧 *Email:* ${contact.email}`,
      `📱 *Phone:* ${contact.phone}`,
      ``,
      `🛠️ *Project Type:* ${projectType}`,
      `📄 *Page Scope:* ${pageCount} Pages`,
      `⏱️ *Timeline:* ${timeline}`,
      `✨ *Selected Features:* ${selectedFeatures.join(', ') || 'Standard'}`,
      `💰 *Estimated Range:* ${calculation.formatted}`,
    ].join('\n');

    try {
      await inquiriesAPI.submit({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        company: contact.company,
        service: projectType,
        budget: calculation.formatted,
        message: `Project Estimator Summary:\n- Pages: ${pageCount}\n- Timeline: ${timeline}\n- Features: ${selectedFeatures.join(', ')}`,
      });
    } catch (err) {
      console.warn('Backend API note:', err.message);
    }

    // Auto-open WhatsApp
    const whatsappUrl = `https://wa.me/919998160726?text=${encodeURIComponent(estimateDetails)}`;
    window.open(whatsappUrl, '_blank');
    setStatus('success');
  };

  return (
    <div className="bg-graphite/80 backdrop-blur-xl rounded-2xl border border-champagne/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/5 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-1">
            <Calculator className="w-4 h-4 text-champagne" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-bold">
              Interactive Scope Calculator
            </span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-warm-white">
            Estimate Your Project
          </h3>
        </div>

        {/* Step Progress Pills */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                step === s
                  ? 'bg-champagne text-obsidian shadow-sm'
                  : step > s
                  ? 'bg-sage/20 text-sage border border-sage/40'
                  : 'bg-obsidian text-text-muted border border-white/5'
              }`}
            >
              {step > s ? <Check className="w-3.5 h-3.5" /> : s}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1: Project Type & Page Scope */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-3 font-semibold">
                1. What type of digital product do you need?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {projectTypes.map((type) => {
                  const isSelected = projectType === type.label;
                  return (
                    <button
                      key={type.label}
                      type="button"
                      onClick={() => setProjectType(type.label)}
                      className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-graphite border-champagne ring-1 ring-champagne/40 shadow-md'
                          : 'bg-obsidian/80 border-graphite-border hover:border-champagne/30'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-serif font-bold text-base text-warm-white">
                            {type.label}
                          </span>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'border-champagne bg-champagne text-obsidian'
                                : 'border-white/20'
                            }`}
                          >
                            {isSelected && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-text-muted leading-relaxed">
                          {type.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-3 font-semibold">
                2. Approximate number of pages / key screens:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {pageOptions.map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setPageCount(opt.val)}
                    className={`py-3 px-4 rounded-lg text-center font-mono text-xs border transition-all ${
                      pageCount === opt.val
                        ? 'bg-champagne text-obsidian font-bold border-champagne shadow-md'
                        : 'bg-obsidian/80 text-text-muted hover:text-warm-white border-graphite-border'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-champagne-light transition-all shadow-lg"
              >
                <span>Next: Choose Features</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2: Features & Timeline */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-3 font-semibold">
                3. Select required capabilities & features:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-all select-none ${
                        isChecked
                          ? 'bg-graphite border-champagne text-warm-white shadow-sm ring-1 ring-champagne/30'
                          : 'bg-obsidian/80 border-graphite-border text-text-muted hover:text-warm-white'
                      }`}
                    >
                      <span className="font-sans font-medium">{feat.label}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ml-2 ${
                          isChecked
                            ? 'bg-champagne text-obsidian'
                            : 'border border-white/20'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-3 font-semibold">
                4. Preferred delivery timeline:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timelineOptions.map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setTimeline(opt.val)}
                    className={`py-3 px-4 rounded-lg text-center font-mono text-xs border transition-all ${
                      timeline === opt.val
                        ? 'bg-champagne text-obsidian font-bold border-champagne shadow-md'
                        : 'bg-obsidian/80 text-text-muted hover:text-warm-white border-graphite-border'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-3 rounded-sm bg-obsidian text-text-muted font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:text-warm-white border border-white/5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-champagne-light transition-all shadow-lg"
              >
                <span>View Estimated Range</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Review Estimate & Contact Form */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            {/* Live Calculated Estimate Box */}
            <div className="bg-obsidian/95 p-6 sm:p-8 rounded-xl border border-champagne/40 shadow-inner flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-bold block mb-1">
                  Estimated Project Investment
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-warm-white">
                  {calculation.formatted}
                </div>
                <p className="text-[11px] text-text-muted mt-2">
                  Estimated Timeline: <span className="text-champagne font-mono font-semibold">{timeline}</span> · Includes deployment & warranty.
                </p>
              </div>

              <div className="text-right sm:max-w-xs text-xs text-text-muted bg-graphite/80 p-3.5 rounded-lg border border-white/5">
                <p className="leading-relaxed">
                  ⚠️ <span className="text-warm-white font-semibold">Initial Estimate:</span> Final pricing depends on finalized technical specifications.
                </p>
              </div>
            </div>

            {/* Contact Details Form */}
            <form onSubmit={handleSubmitEstimate} className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-warm-white/90 block font-semibold">
                Where should we send your formal project brief & discuss next steps?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1">
                    Your Name <span className="text-champagne">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-obsidian border border-graphite-border rounded px-4 py-2.5 text-xs text-warm-white placeholder-text-muted/50 focus:border-champagne focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1">
                    Business / Organization Name
                  </label>
                  <input
                    type="text"
                    value={contact.company}
                    onChange={(e) => setContact({ ...contact, company: e.target.value })}
                    placeholder="e.g. Sharma Enterprises"
                    className="w-full bg-obsidian border border-graphite-border rounded px-4 py-2.5 text-xs text-warm-white placeholder-text-muted/50 focus:border-champagne focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1">
                    Email Address <span className="text-champagne">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    placeholder="e.g. rahul@company.in"
                    className="w-full bg-obsidian border border-graphite-border rounded px-4 py-2.5 text-xs text-warm-white placeholder-text-muted/50 focus:border-champagne focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1">
                    WhatsApp / Phone Number <span className="text-champagne">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-obsidian border border-graphite-border rounded px-4 py-2.5 text-xs text-warm-white placeholder-text-muted/50 focus:border-champagne focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-sm bg-obsidian text-text-muted font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:text-warm-white border border-white/5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Modify Scope</span>
                </button>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-6 py-3 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-champagne-light transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Transmitting...' : 'Discuss My Project on WhatsApp →'}</span>
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* STEP 4: Success State */}
        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center flex flex-col items-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-champagne/15 border border-champagne flex items-center justify-center text-champagne">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-3xl font-serif font-bold text-warm-white">
              Project Estimate Dispatched
            </h4>
            <p className="text-sm text-text-muted max-w-md leading-relaxed">
              Your customized scope of <span className="text-champagne font-mono font-bold">{calculation.formatted}</span> has been formatted and opened in WhatsApp (+91 9998160726). Our engineering leads will review and respond shortly!
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setStep(1);
              }}
              className="mt-4 px-5 py-2.5 rounded-sm bg-obsidian border border-graphite-border text-xs font-mono uppercase text-text-muted hover:text-warm-white"
            >
              Calculate Another Estimate
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
