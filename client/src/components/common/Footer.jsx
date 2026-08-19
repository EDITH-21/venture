import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MessageSquare, Instagram, Shield } from 'lucide-react';
import { useSettings } from '../../context/SettingsContext';

export const Footer = () => {
  const { settings } = useSettings();
  const whatsappNum = (settings.whatsapp || '9998160726').replace(/[^0-9]/g, '');

  return (
    <footer className="bg-obsidian border-t border-graphite-border/60 text-warm-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-sm bg-graphite border border-champagne/30 flex items-center justify-center transition-transform duration-300 group-hover:border-champagne">
                <span className="font-serif text-xl font-bold text-champagne">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-base tracking-[0.2em] uppercase text-warm-white group-hover:text-champagne transition-colors">
                  {settings.companyName || 'Vanguard Digital'}
                </span>
                <span className="text-[11px] tracking-[0.25em] text-text-muted uppercase font-light">
                  Venture Architecture
                </span>
              </div>
            </Link>

            <p className="text-text-muted text-sm max-w-sm leading-relaxed">
              {settings.tagline || "Technology, creativity and digital solutions for what's next."}
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-text-muted">
              <a
                href={`mailto:${settings.email || 'shivamgate21@gmail.com'}`}
                className="flex items-center gap-2 hover:text-champagne transition-colors"
              >
                <Mail className="w-4 h-4 text-champagne" />
                <span>{settings.email || 'shivamgate21@gmail.com'}</span>
              </a>
              <a
                href={`tel:${(settings.phone || '+919998160726').replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 hover:text-champagne transition-colors"
              >
                <Phone className="w-4 h-4 text-champagne" />
                <span>{settings.phone || '+91 99981 60726'}</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNum}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-champagne transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-champagne" />
                <span>WhatsApp: +91 {whatsappNum}</span>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-text-muted">
              <li>
                <Link to="/about" className="hover:text-warm-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-warm-white transition-colors">
                  Solutions & Services
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="hover:text-warm-white transition-colors">
                  Ventures & R&D
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-warm-white transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold">
              Solutions
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-text-muted">
              <li>
                <Link to="/solutions/technology" className="hover:text-warm-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/solutions/creative" className="hover:text-warm-white transition-colors">
                  Creative
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital" className="hover:text-warm-white transition-colors">
                  Digital
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-warm-white transition-colors">
                  All 48 Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold">
              Quick Connect
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              {/* WhatsApp — always visible */}
              <li>
                <a
                  href={`https://wa.me/${whatsappNum}?text=Hi%2C%20I%20want%20to%20enquire%20about%20your%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-champagne transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-champagne" />
                  <span>WhatsApp Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${settings.email || 'shivamgate21@gmail.com'}`}
                  className="flex items-center gap-2 hover:text-champagne transition-colors group"
                >
                  <Mail className="w-4 h-4 text-champagne" />
                  <span>Email Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
              {settings.instagram && (
                <li>
                  <a
                    href={settings.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-champagne transition-colors group"
                  >
                    <Instagram className="w-4 h-4 text-champagne" />
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} {settings.companyName || 'Vanguard Digital'}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-warm-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-warm-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/admin/login" className="text-graphite-border hover:text-champagne transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
