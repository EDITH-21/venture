import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar = ({ onOpenProjectModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#capabilities' },
    { name: 'Solutions', href: '#system' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#cta' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }

    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3.5 border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-2.5 focus:outline-none group"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-600 transition-colors">
            <span className="font-display font-bold text-base leading-none">A</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            ASTEYA
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-slate-900 transition-colors py-1 relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-slate-900 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Pill Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenProjectModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-black text-white text-xs font-mono font-semibold tracking-wider transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>LET'S BUILD</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <nav className="flex flex-col gap-4 text-sm font-mono font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 hover:text-slate-900 py-1.5 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjectModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-slate-900 text-white text-xs font-mono font-semibold"
              >
                <span>LET'S BUILD</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
