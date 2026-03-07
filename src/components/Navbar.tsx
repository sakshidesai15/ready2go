import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Updates', href: '/updates' },
    { name: 'Referral', href: '/referral' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className={`hidden lg:block bg-brand-blue py-2 text-white/90 text-xs border-b border-white/10 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-brand-orange" />
              <span>+91 98470 55221</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-brand-orange" />
              <span>hello@ready2gooverseas.com</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span>Mon-Sat: 9:00 am - 7:00 pm</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-orange transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-xl py-3' : 'bg-white/85 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-3 bg-white/80 border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all ${
                  location.pathname === link.href
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'text-slate-700 hover:text-brand-blue hover:bg-brand-blue/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="inline-flex">
              <button className="bg-brand-orange text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-blue transition-all hover:shadow-xl active:scale-95">
                Book Consultation
              </button>
            </Link>
            <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-brand-blue transition-colors">
              Login
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-base font-semibold px-3 py-2 rounded-xl transition-all ${
                      location.pathname === link.href
                        ? 'bg-brand-blue text-white'
                        : 'text-slate-700 hover:text-brand-blue hover:bg-brand-blue/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact">
                  <button className="bg-brand-orange text-white px-6 py-3 rounded-xl text-sm font-semibold w-full">
                    Book Consultation
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
