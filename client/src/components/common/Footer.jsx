import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

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
    <footer className="bg-cream-surface border-t border-cream-border text-charcoal py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-cream-border/70">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, '#')}
              className="flex items-center gap-2.5 w-fit group"
            >
              <div className="w-7 h-7 rounded-md bg-forest flex items-center justify-center text-cream shadow-sm">
                <span className="font-sans font-bold text-sm leading-none">A</span>
              </div>
              <span className="font-sans font-bold text-lg tracking-tight text-charcoal group-hover:text-forest transition-colors">
                Asteya
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed max-w-sm font-sans">
              Building products, platforms, and intelligent systems designed to solve meaningful problems and create lasting impact.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-forest">
              <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
              <span>Multi-decade technological horizon</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-forest font-bold mb-1">
              Company
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-sans text-charcoal-muted">
              <li>
                <a
                  href="#vision"
                  onClick={(e) => handleNavClick(e, '#vision')}
                  className="hover:text-charcoal transition-colors"
                >
                  Vision
                </a>
              </li>
              <li>
                <a
                  href="#build"
                  onClick={(e) => handleNavClick(e, '#build')}
                  className="hover:text-charcoal transition-colors"
                >
                  What We Build
                </a>
              </li>
              <li>
                <a
                  href="#philosophy"
                  onClick={(e) => handleNavClick(e, '#philosophy')}
                  className="hover:text-charcoal transition-colors"
                >
                  Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  onClick={(e) => handleNavClick(e, '#research')}
                  className="hover:text-charcoal transition-colors"
                >
                  Research & Future
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  onClick={(e) => handleNavClick(e, '#careers')}
                  className="hover:text-charcoal transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-forest font-bold mb-1">
              Connect
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-sans text-charcoal-muted">
              <li>
                <a
                  href="mailto:contact@asteya.tech"
                  className="hover:text-charcoal transition-colors inline-flex items-center gap-1 group"
                >
                  <span>contact@asteya.tech</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-forest" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@asteya.tech"
                  className="hover:text-charcoal transition-colors inline-flex items-center gap-1 group"
                >
                  <span>careers@asteya.tech</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-forest" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal transition-colors inline-flex items-center gap-1 group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-forest" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal transition-colors inline-flex items-center gap-1 group"
                >
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-forest" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-muted">
          <p>© {new Date().getFullYear()} Asteya Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-charcoal transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-charcoal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
