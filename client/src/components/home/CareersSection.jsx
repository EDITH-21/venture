import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const CareersSection = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Engineering', message: '' });

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowApplyModal(false);
      setFormData({ name: '', email: '', role: 'Engineering', message: '' });
    }, 2500);
  };

  return (
    <section id="careers" className="bg-cream-surface py-28 sm:py-36 relative border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white border border-cream-border rounded-3xl p-10 sm:p-14 lg:p-16 shadow-card relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-forest font-bold block mb-4">
              People & Culture
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-charcoal tracking-tight mb-6">
              Build the future with us.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans mb-10">
              We are seeking ambitious engineers, interface designers, systems architects, and technical researchers who take pride in high-craft execution and want to work on problems that matter.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setShowApplyModal(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-forest text-cream font-sans font-semibold text-xs tracking-wide hover:bg-forest-light transition-all shadow-subtle"
              >
                <span>Join Asteya</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="mailto:careers@asteya.tech"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-cream-surface border border-cream-border text-charcoal font-sans font-semibold text-xs tracking-wide hover:bg-cream transition-all"
              >
                <Mail className="w-4 h-4 text-forest" />
                <span>careers@asteya.tech</span>
              </a>
            </div>
          </div>

          {/* Discipline Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 mt-12 border-t border-cream-border text-xs font-mono text-charcoal-muted">
            <div className="p-3 bg-cream rounded-lg border border-cream-border text-center">
              <span className="font-bold text-charcoal block mb-0.5">Systems</span>
              <span>Distributed Engines</span>
            </div>
            <div className="p-3 bg-cream rounded-lg border border-cream-border text-center">
              <span className="font-bold text-charcoal block mb-0.5">Interfaces</span>
              <span>Design & Craft</span>
            </div>
            <div className="p-3 bg-cream rounded-lg border border-cream-border text-center">
              <span className="font-bold text-charcoal block mb-0.5">Applied AI</span>
              <span>Reasoning Models</span>
            </div>
            <div className="p-3 bg-cream rounded-lg border border-cream-border text-center">
              <span className="font-bold text-charcoal block mb-0.5">Protocols</span>
              <span>Data & Infra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Join Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-cream-border rounded-2xl max-w-lg w-full p-8 shadow-elevation animate-in fade-in zoom-in-95 duration-200">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-forest-subtle text-forest flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-charcoal font-sans">Thank You for Reaching Out</h3>
                <p className="text-xs text-charcoal-muted">
                  Your details have been received. Our leadership team will review your profile.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-cream-border">
                  <h3 className="text-xl font-bold text-charcoal font-sans">Join the Asteya Team</h3>
                  <button
                    type="button"
                    onClick={() => setShowApplyModal(false)}
                    className="text-xs font-mono text-charcoal-muted hover:text-charcoal"
                  >
                    Close [ESC]
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-charcoal-muted mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-cream border border-cream-border rounded-lg px-3.5 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:border-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-charcoal-muted mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full bg-cream border border-cream-border rounded-lg px-3.5 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:border-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-charcoal-muted mb-1.5">Primary Discipline</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-cream border border-cream-border rounded-lg px-3.5 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:border-forest"
                  >
                    <option value="Engineering">Systems & Software Engineering</option>
                    <option value="Design">Interface & Product Design</option>
                    <option value="AI">Applied AI & Machine Learning</option>
                    <option value="Research">Technical Research</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-charcoal-muted mb-1.5">Portfolio / GitHub / Note</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Links to your work or what you'd like to build at Asteya..."
                    className="w-full bg-cream border border-cream-border rounded-lg px-3.5 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:border-forest"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-forest text-cream font-sans font-semibold text-xs tracking-wide rounded-lg hover:bg-forest-light transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
