import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Shield, 
  Clock,
  Send,
  User,
  Building,
  Mail,
  Phone,
  FileText
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { inquiriesAPI } from '../services/api';

export const StartProjectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialPackage = searchParams.get('package');
  const initialType = initialPackage === 'starter' 
    ? 'Website' 
    : initialPackage === 'business' 
    ? 'E-commerce' 
    : 'Web Application';

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: initialType,
    requirements: '',
    references: '',
    budget: initialPackage === 'starter' ? '₹15,000 – ₹30,000' : '₹30,000 – ₹75,000',
    timeline: '2–4 weeks',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    { id: 'Website', label: 'Business Website', desc: 'Corporate, brand or portfolio site' },
    { id: 'E-commerce', label: 'E-Commerce Store', desc: 'Online store with payments & products' },
    { id: 'Web Application', label: 'Web Application', desc: 'SaaS platform, portal or custom tool' },
    { id: 'Dashboard', label: 'Admin Dashboard', desc: 'Analytics and internal business system' },
    { id: 'Custom Software', label: 'Custom Software', desc: 'API integration & workflow automation' },
    { id: 'Other', label: 'Other Digital Project', desc: 'Specialized digital engineering' },
  ];

  const budgetRanges = [
    '< ₹15,000',
    '₹15,000 – ₹30,000',
    '₹30,000 – ₹75,000',
    '₹75,000 – ₹1,50,000',
    '₹1,50,000+',
    'Flexible / Undetermined',
  ];

  const timelineOptions = [
    'ASAP (1–2 Weeks)',
    '2–4 Weeks (Standard)',
    '1–2 Months',
    'Flexible / Planning Phase',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.requirements) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const formattedWhatsAppMsg = [
      `🚀 *New Project Intake Submission*`,
      ``,
      `👤 *Name:* ${formData.name}`,
      `🏢 *Company:* ${formData.company || 'Not Specified'}`,
      `📧 *Email:* ${formData.email}`,
      `📱 *Phone / WhatsApp:* ${formData.phone}`,
      ``,
      `🛠️ *Project Type:* ${formData.projectType}`,
      `💰 *Budget Range:* ${formData.budget}`,
      `⏱️ *Timeline:* ${formData.timeline}`,
      ``,
      `📋 *Project Requirements:*`,
      formData.requirements,
      formData.references ? `\n🔗 *Reference Links:* ${formData.references}` : '',
    ].filter(Boolean).join('\n');

    try {
      await inquiriesAPI.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.projectType,
        budget: formData.budget,
        message: `${formData.requirements}\n\nTimeline: ${formData.timeline}\nReferences: ${formData.references || 'None'}`,
      });
    } catch (err) {
      console.warn('API submission note:', err.message);
    }

    // Always dispatch WhatsApp
    const whatsappUrl = `https://wa.me/919998160726?text=${encodeURIComponent(formattedWhatsAppMsg)}`;
    window.open(whatsappUrl, '_blank');
    setStatus('success');
  };

  return (
    <>
      <SEOHead
        title="Start Your Project — Vanguard Digital"
        description="Initiate your web development, e-commerce, or custom digital application project with Vanguard Digital. Fast review within 24 hours."
      />

      {/* Header Banner */}
      <section className="bg-obsidian text-warm-white pt-36 pb-16 border-b border-graphite-border/60 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/20">
              <Rocket className="w-3.5 h-3.5 text-champagne" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne font-bold">
                Project Intake
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-warm-white leading-tight mb-4">
              Start Your Project.
            </h1>
            <p className="text-base text-text-muted leading-relaxed max-w-2xl">
              Share your requirements with our engineering leads. We review every brief and return a structured project proposal within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Multi-Step Form */}
      <section className="bg-obsidian-deep text-warm-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="bg-graphite/70 backdrop-blur-xl rounded-2xl border border-champagne/30 p-6 sm:p-12 shadow-2xl relative">
            
            {status !== 'success' && (
              <div className="mb-10 pb-6 border-b border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-champagne uppercase tracking-widest block font-bold">
                    Step {step} of 3
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-warm-white">
                    {step === 1 && 'Step 1: Contact & Project Type'}
                    {step === 2 && 'Step 2: Requirements & References'}
                    {step === 3 && 'Step 3: Budget, Timeline & Review'}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all ${
                        step === s
                          ? 'bg-champagne text-obsidian shadow-md'
                          : step > s
                          ? 'bg-sage/20 text-sage border border-sage/40'
                          : 'bg-obsidian text-text-muted border border-white/5'
                      }`}
                    >
                      {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* STEP 1: About You + Project Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-4 font-semibold">
                      Your Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-text-muted font-mono mb-1.5">
                          Full Name <span className="text-champagne">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-xs text-warm-white focus:border-champagne focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-text-muted font-mono mb-1.5">
                          Company / Business Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Sharma Enterprises"
                          className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-xs text-warm-white focus:border-champagne focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-text-muted font-mono mb-1.5">
                          Email Address <span className="text-champagne">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. rahul@company.in"
                          className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-xs text-warm-white focus:border-champagne focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-text-muted font-mono mb-1.5">
                          Phone / WhatsApp Number <span className="text-champagne">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-xs text-warm-white focus:border-champagne focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-4 font-semibold">
                      What are you looking to build?
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type.id;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type.id })}
                            className={`p-4 rounded-xl text-left border transition-all ${
                              isSelected
                                ? 'bg-graphite border-champagne ring-1 ring-champagne/40 shadow-md'
                                : 'bg-obsidian/80 border-graphite-border hover:border-champagne/30'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-serif font-bold text-sm text-warm-white">
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
                            <p className="text-[11px] text-text-muted">
                              {type.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (!formData.name || !formData.email || !formData.phone) {
                          alert('Please enter your name, email, and phone number.');
                          return;
                        }
                        setStep(2);
                      }}
                      className="px-6 py-3.5 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-champagne-light transition-all shadow-lg"
                    >
                      <span>Next: Requirements</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Requirements & Scope */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2 font-semibold">
                      Describe your project, goals, and key features <span className="text-champagne">*</span>
                    </label>
                    <textarea
                      required
                      name="requirements"
                      rows={6}
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Tell us about what you want to achieve, who your users are, key features needed (e.g. login, payment gateway, online booking, admin dashboard)..."
                      className="w-full bg-obsidian border border-graphite-border rounded p-4 text-xs text-warm-white leading-relaxed focus:border-champagne focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2 font-semibold">
                      Reference websites or inspirations (optional)
                    </label>
                    <input
                      type="text"
                      name="references"
                      value={formData.references}
                      onChange={handleChange}
                      placeholder="e.g. stripe.com, apple.com/in, or existing website url"
                      className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-xs text-warm-white focus:border-champagne focus:outline-none"
                    />
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
                      onClick={() => {
                        if (!formData.requirements.trim()) {
                          alert('Please provide a brief description of your project requirements.');
                          return;
                        }
                        setStep(3);
                      }}
                      className="px-6 py-3.5 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-champagne-light transition-all shadow-lg"
                    >
                      <span>Next: Budget & Timeline</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Budget & Timeline + Submit */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-3 font-semibold">
                      Approximate Budget (₹ INR)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-3 px-4 rounded-lg text-center font-mono text-xs border transition-all ${
                            formData.budget === b
                              ? 'bg-champagne text-obsidian font-bold border-champagne shadow-md'
                              : 'bg-obsidian/80 text-text-muted hover:text-warm-white border-graphite-border'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-3 font-semibold">
                      Target Launch Timeline
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timelineOptions.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`py-3 px-4 rounded-lg text-center font-mono text-xs border transition-all ${
                            formData.timeline === t
                              ? 'bg-champagne text-obsidian font-bold border-champagne shadow-md'
                              : 'bg-obsidian/80 text-text-muted hover:text-warm-white border-graphite-border'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-lg bg-obsidian border border-white/10 text-xs text-text-muted space-y-1.5 font-mono">
                    <div className="text-warm-white font-bold pb-1 border-b border-white/5">
                      Ready to submit:
                    </div>
                    <div>• Client: <span className="text-champagne">{formData.name}</span> ({formData.email} / {formData.phone})</div>
                    <div>• Project: <span className="text-champagne">{formData.projectType}</span> · {formData.budget} · {formData.timeline}</div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 rounded-sm bg-obsidian text-text-muted font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:text-warm-white border border-white/5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleFinalSubmit}
                      disabled={status === 'submitting'}
                      className="px-8 py-3.5 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-champagne-light transition-all shadow-xl"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === 'submitting' ? 'Submitting...' : 'Submit Project Request →'}</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* SUCCESS STATE */}
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-champagne/15 border border-champagne flex items-center justify-center text-champagne mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-warm-white">
                    Project Request Received.
                  </h3>
                  <p className="text-sm text-text-muted max-w-lg leading-relaxed">
                    Thank you for sharing your requirements, <span className="text-warm-white font-semibold">{formData.name}</span>. Vanguard Digital will review your project and get back to you shortly. A direct WhatsApp thread has also been prepared for instant communication.
                  </p>
                  <p className="text-champagne font-mono text-xs pt-2">
                    💬 Direct WhatsApp: +91 99981 60726 · ✉️ shivamgate21@gmail.com
                  </p>
                  <div className="pt-6 flex gap-4">
                    <Link
                      to="/"
                      className="px-6 py-3 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-wider hover:bg-champagne-light transition-all"
                    >
                      Return to Homepage
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};
