import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { useSettings } from '../../context/SettingsContext';
import { Button } from './Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { settings } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Estimator', path: '/estimator' },
    { name: 'Work', path: '/work' },
    { name: 'Portal', path: '/portal' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-obsidian/85 backdrop-blur-xl border-b border-champagne/15 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm bg-graphite border border-champagne/30 flex items-center justify-center transition-transform duration-300 group-hover:border-champagne group-hover:scale-105">
            <span className="font-serif text-lg font-bold text-champagne">V</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-[0.2em] uppercase text-warm-white transition-colors group-hover:text-champagne">
              {settings.companyName || 'Vanguard'}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-text-muted uppercase font-light">
              Digital & Ventures
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.18em] transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-champagne font-semibold'
                    : 'text-warm-white/70 hover:text-warm-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-champagne"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button
              to="/start-project"
              variant="champagne"
              size="sm"
              icon={ArrowRight}
              className="text-xs uppercase tracking-wider font-semibold"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm text-warm-white hover:text-champagne hover:bg-graphite transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-champagne" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-obsidian/95 backdrop-blur-2xl border-b border-champagne/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center justify-between text-base uppercase tracking-[0.15em] py-2 border-b border-white/5 ${
                      isActive
                        ? 'text-champagne font-bold'
                        : 'text-warm-white/80 hover:text-champagne'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-champagne/60" />
                  </Link>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <Button
                  to="/start-project"
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  className="w-full justify-center"
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
