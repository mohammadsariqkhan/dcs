import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Company', path: '/company' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesList = [
    '/services/ai-ml',
    '/services/data-engineering',
    '/services/cloud-solutions',
    '/services/advanced-analytics',
    '/services/data-analytics',
    '/services/agentic-ai'
  ];

  const isActive = (path) => location.pathname === path;

  const isLinkActive = (link) => {
    if (link.name === 'Services') {
      return servicesList.some(path => isActive(path)) || isActive('/services');
    }
    return isActive(link.path);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-100/80 dark:border-slate-800/80 shadow-[0_4px_30px_rgba(10,40,100,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.25)]'
        : 'bg-transparent border-transparent'
        }`}
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-[64px] lg:h-[76px]' : 'h-[80px] lg:h-[96px]'
          }`}>

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.svg"
              alt="DataCloud Solutions"
              className={`w-auto transition-all duration-500 ${isScrolled ? 'h-[40px] lg:h-[48px]' : 'h-[52px] lg:h-[64px]'
                } ${isScrolled ? 'dark:brightness-0 dark:invert' : 'brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5 h-full">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-250 ${active
                    ? (isScrolled ? 'text-primary dark:text-blue-400 bg-primary/6 dark:bg-blue-500/10' : 'text-white bg-white/12')
                    : (isScrolled ? 'text-[hsl(222_47%_20%)] dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-primary/4 dark:hover:bg-blue-500/8' : 'text-white/75 hover:text-white hover:bg-white/8')
                    }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-current opacity-70"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-250 ${isScrolled
                ? 'hover:bg-slate-100 text-[hsl(222_47%_11%)] dark:hover:bg-slate-800 dark:text-slate-100'
                : 'hover:bg-white/8 text-white'
                }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
            </button>
            <Link
              to="/contact"
              className="btn-primary text-sm"
              style={{ padding: '0.5625rem 1.25rem', fontSize: '0.875rem', borderRadius: '0.625rem' }}
            >
              Get started
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* Mobile Actions (Theme Toggle + Menu Toggle) */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-250 ${isScrolled
                ? 'hover:bg-slate-100 text-[hsl(222_47%_11%)] dark:hover:bg-slate-800 dark:text-slate-100'
                : 'hover:bg-white/8 text-white'
                }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-all duration-250 ${isScrolled
                ? 'hover:bg-slate-100 text-[hsl(222_47%_11%)] dark:hover:bg-slate-800 dark:text-slate-100'
                : 'hover:bg-white/8 text-white'
                }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 shadow-xl"
          >
            <nav className="container-custom py-5 flex flex-col gap-1.5">
              {navLinks.map((link, i) => {
                const active = isLinkActive(link);
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25, ease: 'easeOut' }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${active
                        ? 'text-primary dark:text-blue-400 bg-primary/6 dark:bg-blue-500/10'
                        : 'text-[hsl(222_47%_20%)] dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                    >
                      {link.name}
                      <ChevronRight size={15} className="opacity-45" />
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Schedule Consultation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;