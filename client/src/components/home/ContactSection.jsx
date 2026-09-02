import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Clock,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { inquiriesAPI } from '../../services/api';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      // 1. Store in local enquiries store for admin panel immediate view
      try {
        const storedInquiries = JSON.parse(localStorage.getItem('vanguard_managed_inquiries') || '[]');
        const newInquiry = {
          _id: `inq-${Date.now()}`,
          name: formData.name,
          business: formData.business || 'Not Specified',
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service: 'Website Enquiry',
          status: 'New',
          createdAt: new Date().toISOString(),
        };
        localStorage.setItem('vanguard_managed_inquiries', JSON.stringify([newInquiry, ...storedInquiries]));
      } catch (err) {
        console.warn('Local storage inquiry save error:', err);
      }

      // 2. Send to API if backend available
      try {
        await inquiriesAPI.submit({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `[Business: ${formData.business || 'N/A'}] ${formData.message}`,
          service: 'General Website Enquiry',
        });
      } catch (err) {
        console.warn('API submission fallback to local:', err);
      }

      setSubmitted(true);
      setFormData({
        name: '',
        business: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setError('Could not submit form. Please reach us directly via WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-obsidian text-warm-white py-24 sm:py-32 relative border-t border-graphite-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-bold block mb-3">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-warm-white leading-tight mb-4">
            Start Your Website Conversation
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Tell us about your organization and goals. We respond promptly with actionable ideas and straightforward estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-warm-white mb-2">
              Direct Contact
            </h3>
            <p className="text-sm text-text-muted mb-8 leading-relaxed">
              Prefer direct messaging or an immediate phone conversation? Contact us directly:
            </p>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/919998160726?text=Hi%20Vanguard%20Digital,%20I'd%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-graphite/50 border border-graphite-border hover:border-champagne/40 rounded-xl p-6 flex items-start gap-4 transition-all duration-300 group hover:-translate-y-1 block shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-obsidian border border-champagne/20 flex items-center justify-center text-champagne group-hover:border-champagne group-hover:bg-champagne/10 transition-colors flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-serif font-bold text-lg text-warm-white group-hover:text-champagne transition-colors">
                    WhatsApp Chat
                  </span>
                  <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                    Fastest
                  </span>
                </div>
                <div className="text-xs font-mono text-champagne mb-1">+91 9998160726</div>
                <p className="text-xs text-text-muted">Instant response during business hours</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:shivamgate21@gmail.com?subject=Website%20Inquiry%20-%20Vanguard%20Digital"
              className="bg-graphite/50 border border-graphite-border hover:border-champagne/40 rounded-xl p-6 flex items-start gap-4 transition-all duration-300 group hover:-translate-y-1 block shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-obsidian border border-champagne/20 flex items-center justify-center text-champagne group-hover:border-champagne group-hover:bg-champagne/10 transition-colors flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-warm-white group-hover:text-champagne transition-colors block mb-1">
                  Email Us
                </span>
                <div className="text-xs font-mono text-champagne mb-1">shivamgate21@gmail.com</div>
                <p className="text-xs text-text-muted">Send detailed RFPs and project briefs</p>
              </div>
            </a>

            {/* Direct Call Card */}
            <a
              href="tel:+919998160726"
              className="bg-graphite/50 border border-graphite-border hover:border-champagne/40 rounded-xl p-6 flex items-start gap-4 transition-all duration-300 group hover:-translate-y-1 block shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-obsidian border border-champagne/20 flex items-center justify-center text-champagne group-hover:border-champagne group-hover:bg-champagne/10 transition-colors flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-warm-white group-hover:text-champagne transition-colors block mb-1">
                  Call Us
                </span>
                <div className="text-xs font-mono text-champagne mb-1">+91 9998160726</div>
                <p className="text-xs text-text-muted">Direct discussion with lead developer</p>
              </div>
            </a>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-graphite/60 backdrop-blur-xl border border-graphite-border rounded-xl p-8 sm:p-10 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-warm-white mb-2">
                Send an Enquiry
              </h3>
              <p className="text-xs text-text-muted mb-8 font-mono">
                Fill in the details below and we will contact you within 24 hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-warm-white">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We have logged your enquiry and will be in touch shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded bg-graphite border border-champagne/30 text-champagne text-xs font-mono uppercase tracking-wider font-bold hover:bg-graphite/80"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono">
                  {error && (
                    <div className="p-3.5 rounded bg-red-950/40 border border-red-800/60 text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-muted uppercase mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-warm-white font-sans text-sm placeholder-text-muted/40 focus:outline-none focus:border-champagne transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-text-muted uppercase mb-2">
                        Business / Organization
                      </label>
                      <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="e.g. Apex High School / Cinema"
                        className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-warm-white font-sans text-sm placeholder-text-muted/40 focus:outline-none focus:border-champagne transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-muted uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-warm-white font-sans text-sm placeholder-text-muted/40 focus:outline-none focus:border-champagne transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-text-muted uppercase mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9998160726"
                        className="w-full bg-obsidian border border-graphite-border rounded px-4 py-3 text-warm-white font-sans text-sm placeholder-text-muted/40 focus:outline-none focus:border-champagne transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-muted uppercase mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your requirements, goals, preferred timeline, or any reference websites..."
                      className="w-full bg-obsidian border border-graphite-border rounded p-4 text-warm-white font-sans text-sm placeholder-text-muted/40 focus:outline-none focus:border-champagne transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-champagne text-obsidian font-bold text-xs uppercase tracking-widest hover:bg-champagne-light transition-all shadow-xl disabled:opacity-50"
                    >
                      <span>{submitting ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
