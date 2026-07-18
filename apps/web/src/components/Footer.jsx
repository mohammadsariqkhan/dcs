import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const XIcon = ({ size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill="currentColor"
    />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'AI & Machine Learning', path: '/services#ai-ml' },
    { label: 'Data Engineering', path: '/services#data-engineering' },
    { label: 'Data Science', path: '/services#data-science' },
    { label: 'Data Analytics', path: '/services#data-analytics' },
    { label: 'Cloud Solutions', path: '/services#cloud-solutions' },
    { label: 'Business Intelligence', path: '/services#business-intelligence' },
  ];

  const company = [
    { label: 'About Us', path: '/about' },
    { label: 'Company', path: '/company' },
    { label: 'Contact', path: '/contact' },
  ];

  const social = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/datacloudsolution/', label: 'LinkedIn' },
    { icon: XIcon, href: 'https://x.com/datacloudsolutions', label: 'X (Twitter)' },
    { icon: Instagram, href: 'https://www.instagram.com/datacloudsolution', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-[hsl(222_47%_9%)] text-white/70 overflow-hidden">
      {/* Subtle tech background illustration */}
      <div 
        className="absolute inset-0 bg-[url('/images/hero_data_flow.png')] bg-no-repeat bg-right-bottom bg-contain opacity-[0.03] pointer-events-none" 
        style={{ mixBlendMode: 'screen' }}
      />

      {/* CTA Banner */}
      <div className="border-b border-white/8">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white/5 border border-white/10 px-8 py-8 backdrop-blur-sm">
            <div>
              <h3 className="text-xl font-700 text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                Ready to transform your business?
              </h3>
              <p className="text-white/60 text-sm">Let's discuss your data and AI goals today.</p>
            </div>
            <Link
              to="/contact"
              className="btn-white whitespace-nowrap"
              style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, borderRadius: '0.625rem' }}
            >
              Get started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/logo.svg"
                alt="DataCloud Solutions"
                className="h-[52px] lg:h-[64px] w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-white/55">
              Empowering enterprises with AI, data engineering, analytics, and cloud solutions for the data-driven era.
            </p>
            <div className="flex gap-2">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-blue-500/20 hover:text-blue-400 flex items-center justify-center transition-all duration-200 border border-white/8 hover:border-blue-500/30"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-600 text-white/90 mb-4 uppercase tracking-wider" style={{ fontWeight: 600 }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors duration-200 flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-600 text-white/90 mb-4 uppercase tracking-wider" style={{ fontWeight: 600 }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/60 group-hover:bg-blue-400 transition-colors duration-200 flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-600 text-white/90 mb-4 uppercase tracking-wider mt-8" style={{ fontWeight: 600 }}>
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy" className="text-sm text-white/55 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-white/55 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-600 text-white/90 mb-4 uppercase tracking-wider" style={{ fontWeight: 600 }}>
              Contact Us
            </h4>
            <div className="space-y-4">
              <a href="mailto:nextlevel@datacloud.ae" className="flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center border border-white/8 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-200 flex-shrink-0">
                  <Mail size={14} />
                </div>
                nextlevel@datacloud.ae
              </a>
              <a href="tel:+971585431985" className="flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center border border-white/8 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-200 flex-shrink-0">
                  <Phone size={14} />
                </div>
                +971-58-543-1985
              </a>
              <div className="flex items-start gap-3 text-sm text-white/55">
                <div className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center border border-white/8 flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <span>Business Center<br />Sharjah Publishing City Free Zone<br />Sharjah, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {currentYear} DataCloud Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Built with precision · Powered by innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;