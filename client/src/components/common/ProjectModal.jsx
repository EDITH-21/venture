import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { inquiriesAPI } from '../../services/api';

export const ProjectModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: 'Web Systems & Platforms',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // 1. Try sending to backend API if active
      await inquiriesAPI.create({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: `${formData.business ? `[${formData.business}] ` : ''}${formData.message}`,
      });
    } catch {
      // 2. Local fallback storage
      try {
        const stored = JSON.parse(localStorage.getItem('vanguard_managed_inquiries') || '[]');
        const newInq = {
          _id: `inq-${Date.now()}`,
          name: formData.name,
          business: formData.business || 'Direct Project',
          email: formData.email,
          phone: formData.phone || '+91 9998160726',
          message: formData.message,
          service: formData.service,
          status: 'New',
          createdAt: new Date().toISOString(),
        };
        localStorage.setItem('vanguard_managed_inquiries', JSON.stringify([newInq, ...stored]));
      } catch (e) {
        console.warn(e);
      }
    } finally {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
        setFormData({ name: '', business: '', email: '', phone: '', service: 'Web Systems & Platforms', message: '' });
      }, 2500);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Asteya, I would like to start a project.\nName: ${formData.name || 'Client'}\nOrganization: ${formData.business || 'N/A'}\nService: ${formData.service}\nDetails: ${formData.message || 'Discussion'}`
    );
    window.open(`https://wa.me/919998160726?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
        >
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />

          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  ASTEYA INITIATION
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight">
                Let's Build What's Next.
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {success ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Project Brief Received</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you. Our technology and strategy team will review your requirements and connect within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-slate-500 mb-1.5 font-medium tracking-wider text-[11px]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-slate-500 mb-1.5 font-medium tracking-wider text-[11px]">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    placeholder="e.g. Acme Labs"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-slate-500 mb-1.5 font-medium tracking-wider text-[11px]">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-slate-500 mb-1.5 font-medium tracking-wider text-[11px]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9998160726"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono uppercase text-slate-500 mb-1.5 font-medium tracking-wider text-[11px]">
                  Project Capability / Scope
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                >
                  <option value="Web Systems & Platforms">Web Systems & Scalable Platforms</option>
                  <option value="Brand Systems & Identity">Brand Systems & Interactive Design</option>
                  <option value="Digital Business & Automation">Digital Business Infrastructure & Tools</option>
                  <option value="Intelligent Systems & AI">Intelligent Systems & AI Workflows</option>
                  <option value="Full Venture Build">Full End-to-End Technology Venture</option>
                </select>
              </div>

              <div>
                <label className="block font-mono uppercase text-slate-500 mb-1.5 font-medium tracking-wider text-[11px]">
                  Project Overview & Goals *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the challenge, scope, and timeline..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3.5 px-6 rounded-full bg-slate-900 hover:bg-black text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting Brief...' : 'Submit Project Brief →'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3.5 px-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
