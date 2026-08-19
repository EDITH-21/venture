import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { inquiriesAPI } from '../../services/api';
import { Button } from '../common/Button';

export const InquiryForm = ({ initialService = '' }) => {
  const [searchParams] = useSearchParams();
  const queryService = searchParams.get('service') || initialService || 'Web Development';
  const querySelected = searchParams.get('selected');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: queryService,
    budget: '₹25,000 – ₹1,00,000',
    message: querySelected
      ? `Selected Services / Requirements:\n- ${querySelected.split(',').join('\n- ')}\n\nAdditional notes:`
      : '',
  });

  useEffect(() => {
    if (querySelected) {
      setFormData((prev) => ({
        ...prev,
        message: `Selected Services / Requirements:\n- ${querySelected.split(',').join('\n- ')}\n\nAdditional notes:`,
      }));
    }
    if (searchParams.get('service')) {
      setFormData((prev) => ({
        ...prev,
        service: searchParams.get('service'),
      }));
    }
  }, [searchParams, querySelected]);

  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    'Web Development',
    'Business Websites',
    'Landing Pages',
    'Portfolio Websites',
    'E-commerce Websites',
    'Web Applications',
    'Admin Dashboards',
    'Website Maintenance',
    'Custom Web Applications',
    'Business Management Systems',
    'Internal Business Tools',
    'Automation Solutions',
    'Database Solutions',
    'API Integration',
    'Custom Technology Solutions',
    'Graphic Design',
    'Logo Design',
    'Poster Design',
    'Banner Design',
    'Flyer Design',
    'Brochure Design',
    'Business Card Design',
    'Catalogue Design',
    'Social Media Creatives',
    'Marketing Materials',
    'Event & Invitation Design',
    'Branding',
    'Brand Identity',
    'Brand Guidelines',
    'Letterhead Design',
    'Invoice Design',
    'Company Profile Design',
    'Business Stationery',
    'WhatsApp Business Setup',
    'Digital Business Cards',
    'QR Code Solutions',
    'Digital Menus',
    'Online Forms',
    'Digital Business Presence',
    'Digital Setup & Support',
    'Resume / CV Creation',
    'PDF Creation',
    'PDF Editing',
    'Document Formatting',
    'Excel Work',
    'Data Entry',
    'Digital Documentation',
    'Business Documents',
  ];

  const budgetOptions = [
    '< ₹15,000',
    '₹15,000 – ₹50,000',
    '₹50,000 – ₹1,50,000',
    '₹1,50,000 – ₹5,00,000',
    '₹5,00,000+',
    'Flexible / Custom Scope',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const OWNER_WHATSAPP = '919998160726';

  const buildWhatsAppMessage = (data) => {
    const lines = [
      `🔔 *New Project Inquiry*`,
      ``,
      `👤 *Name:* ${data.name}`,
      `📧 *Email:* ${data.email}`,
      `📱 *Phone:* ${data.phone}`,
      data.company ? `🏢 *Company:* ${data.company}` : '',
      `🛠️ *Service:* ${data.service}`,
      `💰 *Budget:* ${data.budget}`,
      ``,
      `📋 *Project Details:*`,
      data.message,
    ].filter(Boolean).join('\n');
    return encodeURIComponent(lines);
  };

  const openWhatsApp = (data) => {
    const msg = buildWhatsAppMessage(data);
    const url = `https://wa.me/${OWNER_WHATSAPP}?text=${msg}`;
    window.open(url, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await inquiriesAPI.submit(formData);
      if (res.data?.success) {
        // Auto-open WhatsApp with inquiry details
        openWhatsApp(formData);
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: initialService || 'Web Development',
          budget: '₹25,000 – ₹1,00,000',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(res.data?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please check your inputs and try again.');
    }
  };

  return (
    <div className="bg-graphite/70 backdrop-blur-md rounded-md border border-graphite-border p-8 sm:p-12 relative overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-16 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-champagne/15 border border-champagne flex items-center justify-center text-champagne mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-serif font-semibold text-warm-white mb-3">
              Inquiry Received
            </h3>
            <p className="text-text-muted text-base max-w-md mb-4">
              Your inquiry has been submitted and sent via WhatsApp. We'll get back to you shortly!
            </p>
            <p className="text-champagne text-sm font-mono mb-8">
              💬 WhatsApp: +91 99981 60726
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStatus('idle')}
                className="text-xs uppercase tracking-wider font-semibold"
              >
                Submit Another Message
              </Button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2">
                  Full Name <span className="text-champagne">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-obsidian/90 border border-graphite-border rounded-sm px-4 py-3 text-sm text-warm-white placeholder-text-muted/50 focus:outline-none focus:border-champagne transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2">
                  Work Email <span className="text-champagne">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@company.in"
                  className="w-full bg-obsidian/90 border border-graphite-border rounded-sm px-4 py-3 text-sm text-warm-white placeholder-text-muted/50 focus:outline-none focus:border-champagne transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2">
                  Phone / WhatsApp Number <span className="text-champagne">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-obsidian/90 border border-graphite-border rounded-sm px-4 py-3 text-sm text-warm-white placeholder-text-muted/50 focus:outline-none focus:border-champagne transition-colors"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2">
                  Company / Business Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Sharma Digital / Tech Corp"
                  className="w-full bg-obsidian/90 border border-graphite-border rounded-sm px-4 py-3 text-sm text-warm-white placeholder-text-muted/50 focus:outline-none focus:border-champagne transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Required */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2">
                  Primary Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-obsidian/90 border border-graphite-border rounded-sm px-4 py-3 text-sm text-warm-white focus:outline-none focus:border-champagne transition-colors cursor-pointer"
                >
                  {servicesList.map((svc) => (
                    <option key={svc} value={svc} className="bg-obsidian text-warm-white">
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2">
                  Project Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-obsidian/90 border border-graphite-border rounded-sm px-4 py-3 text-sm text-warm-white focus:outline-none focus:border-champagne transition-colors cursor-pointer"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-obsidian text-warm-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-warm-white/90 mb-2">
                Project Description & Requirements <span className="text-champagne">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project, objectives, desired timeline, or current technical bottlenecks..."
                className="w-full bg-obsidian/90 border border-graphite-border rounded-sm p-4 text-sm text-warm-white placeholder-text-muted/50 focus:outline-none focus:border-champagne transition-colors resize-y"
              />
            </div>

            {/* Error Banner */}
            {status === 'error' && (
              <div className="p-4 rounded-sm bg-red-950/40 border border-red-800/60 text-red-200 text-xs flex items-center gap-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                <span>{errorMessage || 'Something went wrong. Please check your inputs and try again.'}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === 'submitting'}
                className="w-full justify-center text-xs uppercase tracking-widest font-bold py-4"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Transmit Inquiry →
                  </span>
                )}
              </Button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
