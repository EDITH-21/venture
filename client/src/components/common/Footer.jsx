import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { AsteyaLogo } from './AsteyaLogo';

export const Footer = () => {
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const targetId = href.replace('/#', '').replace('#', '');
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
    <footer className="bg-cosmic-bg text-white border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand & Tagline */}
          <div className="space-y-1.5">
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2.5 w-fit group"
            >
              <AsteyaLogo className="w-7 h-7" showText={true} animated={true} />
            </Link>

            <p className="text-[11px] font-mono text-cosmic-subtle tracking-wider">
              Technology · Innovation · Possibility
            </p>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex items-center gap-6 text-xs font-mono text-cosmic-muted">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#ventures" onClick={(e) => handleNavClick(e, '#ventures')} className="hover:text-white transition-colors">
              Ventures
            </a>
            <a href="#cta" onClick={(e) => handleNavClick(e, '#cta')} className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Social Icons */}
          <div className="flex items-center gap-4 text-cosmic-muted">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
              aria-label="X Twitter"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 hover:text-white flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-cosmic-subtle">
          <p>© {new Date().getFullYear()} Asteya. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-cosmic-muted transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cosmic-muted transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
