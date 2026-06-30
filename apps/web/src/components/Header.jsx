import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-xl shadow-[0_1px_0_0_rgba(10,40,100,0.08),0_4px_24px_rgba(10,40,100,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.svg"
              alt="DataCloud Solutions"
              className={`h-10 w-auto transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? (isScrolled ? 'text-[hsl(213_94%_38%)] bg-[hsl(213_94%_38%/0.07)]' : 'text-white bg-white/15')
                    : (isScrolled ? 'text-[hsl(222_47%_20%)] hover:text-[hsl(213_94%_38%)] hover:bg-[hsl(213_94%_38%/0.06)]' : 'text-white/80 hover:text-white hover:bg-white/10')
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-current opacity-60"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                isScrolled ? 'text-[hsl(222_47%_20%)] hover:text-[hsl(213_94%_38%)]' : 'text-white/80 hover:text-white'
              }`}
            >
              Sign in
            </Link>
            <Link
              to="/contact"
              className="btn-primary text-sm px-5 py-2.5"
              style={{ padding: '0.5625rem 1.25rem', fontSize: '0.875rem' }}
            >
              Get started
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-200 ${
              isScrolled ? 'hover:bg-gray-100 text-[hsl(222_47%_11%)]' : 'hover:bg-white/10 text-white'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <nav className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-[hsl(213_94%_38%)] bg-[hsl(213_94%_38%/0.08)]'
                        : 'text-[hsl(222_47%_20%)] hover:text-[hsl(213_94%_38%)] hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                    <ChevronRight size={15} className="opacity-40" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100">
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