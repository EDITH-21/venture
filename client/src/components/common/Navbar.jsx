import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
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
    { name: 'Vision', href: '#vision' },
    { name: 'What We Build', href: '#build' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Research', href: '#research' },
    { name: 'Careers', href: '#careers' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-cream py-3.5 shadow-subtle'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleScrollTo(e, '#')}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-7 h-7 rounded-md bg-forest flex items-center justify-center text-cream shadow-sm group-hover:bg-forest-light transition-colors">
            <span className="font-sans font-bold text-sm leading-none tracking-tighter">A</span>
          </div>
          <span className="font-sans font-bold text-lg tracking-tight text-charcoal group-hover:text-forest transition-colors">
            Asteya
          </span>
        </Link>

        {/* Center / Right Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-sans font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-charcoal-muted hover:text-charcoal transition-colors py-1 relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-forest transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#build"
            onClick={(e) => handleScrollTo(e, '#build')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-forest text-cream text-xs font-sans font-medium hover:bg-forest-light transition-all shadow-subtle"
          >
            <span>Explore</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal hover:text-forest focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-cream-border px-6 py-6 animate-in slide-in-from-top-2 duration-200 shadow-elevation">
          <nav className="flex flex-col gap-4 text-sm font-sans font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-charcoal-muted hover:text-charcoal py-1.5 border-b border-cream-border/50"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#build"
                onClick={(e) => handleScrollTo(e, '#build')}
                className="w-full inline-flex items-center justify-center py-2.5 rounded-md bg-forest text-cream text-xs font-sans font-semibold"
              >
                Explore Asteya
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
