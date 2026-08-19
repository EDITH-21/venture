import React from 'react';
import { Mail, Phone, MessageSquare, Instagram, MapPin, Sparkles } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import { SEOHead } from '../components/common/SEOHead';
import { InquiryForm } from '../components/forms/InquiryForm';

export const ContactPage = () => {
  const { settings } = useSettings();
  const whatsappNum = (settings.whatsapp || '9998160726').replace(/[^0-9]/g, '');

  return (
    <>
      <SEOHead
        title="Start a Project — Connect With Our Team"
        description="Initiate a project inquiry with Vanguard Digital. We engineer custom software solutions and build transformative ventures."
      />

      {/* Header */}
      <section className="bg-obsidian text-warm-white pt-36 pb-20 border-b border-graphite-border/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne font-semibold block mb-4">
              Direct Access
            </span>
            <h1 className="text-5xl sm:text-6xl font-serif font-normal text-warm-white leading-tight mb-6">
              Let's Build Something Useful.
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
              Have an idea, business requirement or digital challenge? Let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Channels Section */}
      <section className="bg-obsidian-deep text-warm-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-8">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-champagne block mb-2 font-semibold">
                  Project Inquiry Intake
                </span>
                <h2 className="text-3xl font-serif font-normal text-warm-white">
                  Send Your Project Brief
                </h2>
              </div>

              <InquiryForm />
            </div>

            {/* Right Column: Direct Channels */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-graphite/50 p-8 rounded-sm border border-graphite-border space-y-6">
                <h3 className="text-xl font-serif font-semibold text-warm-white pb-4 border-b border-white/5">
                  Direct Channels
                </h3>

                <div className="space-y-4 text-xs font-mono">
                  {/* Email */}
                  <div>
                    <span className="text-text-muted uppercase tracking-wider block mb-1">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${settings.email || 'shivamgate21@gmail.com'}`}
                      className="text-warm-white hover:text-champagne transition-colors flex items-center gap-2 font-sans text-sm"
                    >
                      <Mail className="w-4 h-4 text-champagne" />
                      <span>{settings.email || 'shivamgate21@gmail.com'}</span>
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="pt-2">
                    <span className="text-text-muted uppercase tracking-wider block mb-1">
                      Phone / Call
                    </span>
                    <a
                      href={`tel:+91${whatsappNum}`}
                      className="text-warm-white hover:text-champagne transition-colors flex items-center gap-2 font-sans text-sm"
                    >
                      <Phone className="w-4 h-4 text-champagne" />
                      <span>{settings.phone || '+91 99981 60726'}</span>
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="pt-2">
                    <span className="text-text-muted uppercase tracking-wider block mb-1">
                      WhatsApp Business
                    </span>
                    <a
                      href={`https://wa.me/${whatsappNum}?text=Hi%2C%20I%20want%20to%20enquire%20about%20your%20services`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-white hover:text-champagne transition-colors flex items-center gap-2 font-sans text-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-champagne" />
                      <span>+91 {whatsappNum}</span>
                    </a>
                  </div>
                </div>

                {/* Social Networks — no LinkedIn */}
                {settings.instagram && (
                  <div className="pt-6 border-t border-white/5 space-y-3">
                    <span className="text-text-muted text-[10px] font-mono uppercase tracking-wider block">
                      Social Networks
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={settings.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-sm bg-obsidian border border-graphite-border flex items-center justify-center text-champagne hover:border-champagne hover:scale-105 transition-all"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Response SLA Box */}
              <div className="bg-graphite/30 p-6 rounded-sm border border-champagne/20 space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-champagne font-bold block">
                  Response SLA
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  All inquiries are personally reviewed and responded to within 24 hours. You can also reach us instantly on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
