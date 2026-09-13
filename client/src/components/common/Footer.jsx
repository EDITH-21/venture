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
    <footer className="bg-darkness-deep text-white border-t border-darkness-border py-16 sm:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, '#')}
              className="flex items-center gap-2.5 w-fit group"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-slate-950 flex items-center justify-center font-display font-bold text-base">
                A
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-sky-400 transition-colors">
                ASTEYA
              </span>
            </Link>

            <p className="text-xs font-mono text-slate-400 tracking-wider uppercase">
              Technology · Design · Business
            </p>

            <p className="text-xs text-slate-400 max-w-sm font-sans leading-relaxed pt-2">
              Building scalable digital foundations, bespoke web systems, and high-impact software ventures for ambitious organizations.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-1">
              Company & Work
            </span>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <a href="#capabilities" onClick={(e) => handleNavClick(e, '#capabilities')} className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#system" onClick={(e) => handleNavClick(e, '#system')} className="hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#ventures" onClick={(e) => handleNavClick(e, '#ventures')} className="hover:text-white transition-colors">
                  Ventures
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#ventures" onClick={(e) => handleNavClick(e, '#ventures')} className="hover:text-sky-400 transition-colors inline-flex items-center gap-1">
                  <span>BingeBlocker</span>
                  <span className="text-[9px] bg-sky-950 text-sky-400 px-1.5 py-0.2 rounded border border-sky-800">New</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-1">
              Connect
            </span>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <a
                  href="https://wa.me/919998160726?text=Hi%20Asteya,%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <span>WhatsApp (+91 9998160726)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:shivamgate21@gmail.com"
                  className="hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Email (shivamgate21@gmail.com)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} ASTEYA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
