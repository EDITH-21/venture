import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { AsteyaLogo } from './AsteyaLogo';

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
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Ventures', href: '#ventures' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cosmic-bg/85 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 focus:outline-none group"
        >
          <AsteyaLogo className="w-8 h-8" showText={true} animated={true} />
        </Link>

        {/* Center Navigation Links (Pill Style) */}
        <nav className="hidden md:flex items-center gap-1 bg-cosmic-card/60 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 text-xs font-sans font-medium text-cosmic-muted">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all cursor-pointer relative"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={onOpenProjectModal}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet/80 to-cyan/80 hover:from-violet hover:to-cyan text-white text-xs font-mono font-semibold tracking-wider transition-all shadow-card-glow hover:scale-105 active:scale-95 border border-white/20"
          >
            <span>Let's Build</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-cosmic-muted hover:text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cosmic-bg/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <nav className="flex flex-col gap-4 text-sm font-mono font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-cosmic-muted hover:text-white py-1.5 border-b border-white/5"
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
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-violet to-cyan text-white text-xs font-mono font-semibold shadow-card-glow"
              >
                <span>Let's Build</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
