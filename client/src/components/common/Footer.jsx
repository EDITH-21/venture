import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Mail, Phone, Instagram, Linkedin, ArrowUpRight, Sparkles } from 'lucide-react';

export const Footer = () => {
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const targetId = href.replace('/#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-obsidian-deep text-warm-white border-t border-graphite-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-graphite-border">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, '/#home')}
              className="flex items-center gap-3 w-fit group"
            >
              <div className="w-10 h-10 rounded-lg bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne group-hover:bg-champagne group-hover:text-obsidian transition-colors">
                <span className="font-serif font-bold text-xl">V</span>
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight text-warm-white group-hover:text-champagne transition-colors">
                Vanguard <span className="text-champagne italic font-light">Digital</span>
              </span>
            </Link>

            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              Building better digital experiences. Websites and digital solutions engineered for businesses, schools, cinemas and growing brands.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-champagne/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new projects & consultations</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted font-mono">
              <li>
                <a
                  href="/#home"
                  onClick={(e) => handleNavClick(e, '/#home')}
                  className="hover:text-warm-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={(e) => handleNavClick(e, '/#about')}
                  className="hover:text-warm-white transition-colors"
                >
                  About Vanguard
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleNavClick(e, '/#services')}
                  className="hover:text-warm-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#process"
                  onClick={(e) => handleNavClick(e, '/#process')}
                  className="hover:text-warm-white transition-colors"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="hover:text-warm-white transition-colors"
                >
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold">
              Connect With Us
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted font-mono">
              <li>
                <a
                  href="https://wa.me/919998160726?text=Hi%20Vanguard%20Digital,%20I'd%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-champagne transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-champagne" />
                  <span>WhatsApp (+91 9998160726)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:shivamgate21@gmail.com"
                  className="flex items-center gap-2 hover:text-champagne transition-colors group"
                >
                  <Mail className="w-4 h-4 text-champagne" />
                  <span>shivamgate21@gmail.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-champagne transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-champagne" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-champagne transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-champagne" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono">
          <p>© {new Date().getFullYear()} Vanguard Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-warm-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-warm-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
