import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } })
};

const inputClass = `
  w-full px-4 py-3 rounded-xl border text-sm text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500
  bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700
  focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/12 dark:focus:border-blue-400 dark:focus:ring-blue-400/12
  transition-all duration-200
`.trim();

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "https://dcs-backend-kappa.vercel.app";

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({ variant: 'destructive', title: 'Missing required fields', description: 'Please fill in Name, Email and Message.' });
      setIsSubmitting(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ variant: 'destructive', title: 'Invalid email', description: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast({ title: '✅ Message sent!', description: "Thank you for reaching out. We'll respond within 24 hours." });
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else if (res.status === 429) {
        toast({ variant: 'destructive', title: 'Too many attempts', description: 'Please wait a moment before trying again.' });
      } else {
        toast({ variant: 'destructive', title: 'Something went wrong', description: data.detail || 'Please try again later.' });
      }
    } catch (err) {
      toast({ variant: 'destructive', title: 'Network error', description: 'Could not reach the server. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'nextlevel@datacloud.ae', href: 'mailto:nextlevel@datacloud.ae' },
    { icon: Phone, label: 'Phone', value: '+971-58-543-1985', href: 'tel:+971585431985' },
    { icon: MapPin, label: 'Headquarters', value: 'Business Center, Sharjah Publishing City Free Zone, Sharjah, UAE', href: null },
    { icon: Clock, label: 'Business Hours', value: 'Mon–Fri, 9:00 AM – 6:00 PM GST', href: null },
  ];

  const offices = [
    { city: 'Sharjah Headquarters', address: 'Business Center, Sharjah Publishing City Free Zone, Sharjah, UAE', phone: '+971-58-543-1985', email: 'nextlevel@datacloud.ae' },
  ];

  const services = ['AI & Machine Learning', 'Data Science', 'Data Analytics', 'Data Engineering', 'Cloud Solutions', 'Business Intelligence', 'Digital Transformation', 'Other'];

  return (
    <>
      <Helmet>
        <title>Contact Us – DataCloud Solutions</title>
        <meta name="description" content="Get in touch with DataCloud Solutions. Schedule a consultation to discuss your data, AI, and cloud needs." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-600 tracking-wider uppercase mb-6" style={{ fontWeight: 600 }}>
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-800 text-white mb-5 max-w-2xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                Let's Start a Conversation
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto">
                Ready to transform your data strategy? Reach out and we'll respond within 24 hours.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
              <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20Z" fill="currentColor" className="text-white dark:text-[hsl(var(--background))]" />
            </svg>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12">

              {/* Form — spans 3 cols */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-3"
              >
                <div className="card-premium p-8 md:p-10">
                  <h2 className="text-2xl font-800 text-slate-900 dark:text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Fill out the form below and we'll get back to you within one business day.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-600 text-slate-800 dark:text-slate-200 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 600 }}>
                          Full Name *
                        </label>
                        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="John Smith" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-600 text-slate-800 dark:text-slate-200 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 600 }}>
                          Work Email *
                        </label>
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-600 text-slate-800 dark:text-slate-200 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 600 }}>
                          Phone Number
                        </label>
                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+971 50 000 0000" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-600 text-slate-800 dark:text-slate-200 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 600 }}>
                          Company
                        </label>
                        <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} placeholder="Your company" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-600 text-slate-800 dark:text-slate-200 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 600 }}>
                        Service Interested In
                      </label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}
                        className={inputClass + ' cursor-pointer appearance-none bg-white dark:bg-slate-800'}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-600 text-slate-800 dark:text-slate-200 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 600 }}>
                        Message *
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project or challenge..." className={inputClass} style={{ resize: 'vertical', minHeight: '120px' }} />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center"
                      style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending...</span>
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 dark:text-slate-500 text-center">By submitting, you agree to our Privacy Policy. We respect your data.</p>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info — spans 2 cols */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Contact Details */}
                <div className="card-premium p-7">
                  <h3 className="text-lg font-700 text-slate-900 dark:text-white mb-6" style={{ fontWeight: 700 }}>Contact Information</h3>
                  <div className="space-y-5">
                    {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="icon-box flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                          <Icon size={18} style={{ color: 'hsl(var(--primary))' }} />
                        </div>
                        <div>
                          <p className="text-xs font-600 text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-0.5" style={{ fontWeight: 600 }}>{label}</p>
                          {href ? (
                            <a href={href} className="text-sm font-500 text-slate-850 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200" style={{ fontWeight: 500 }}>{value}</a>
                          ) : (
                            <p className="text-sm font-500 text-slate-850 dark:text-slate-200" style={{ fontWeight: 500 }}>{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800">
                    <p className="text-xs font-600 text-gray-400 dark:text-slate-500 uppercase tracking-wide mb-3" style={{ fontWeight: 600 }}>Follow Us</p>
                    <div className="flex gap-2">
                      {[
                        { icon: Linkedin, href: 'https://www.linkedin.com/company/datacloudsolution/', label: 'LinkedIn' },
                        { icon: XIcon, href: 'https://x.com/datacloudsolutions', label: 'X (Twitter)' },
                        { icon: Instagram, href: 'https://www.instagram.com/datacloudsolution', label: 'Instagram' }
                      ].map(({ icon: Icon, href, label }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                          className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-[hsl(213_94%_38%/0.08)] dark:hover:bg-blue-500/10 hover:text-primary dark:hover:text-blue-400 flex items-center justify-center transition-all duration-200 border border-gray-200 dark:border-slate-700 text-gray-500 dark:text-slate-400">
                          <Icon size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="card-premium p-7">
                  <h3 className="text-base font-700 text-slate-900 dark:text-white mb-4" style={{ fontWeight: 700 }}>What to Expect</h3>
                  <div className="space-y-3">
                    {[
                      'Response within 24 business hours',
                      'Free 30-minute discovery call',
                      'Custom solution proposal within 5 days',
                      'No long-term commitment required',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-slate-655 dark:text-slate-300">
                        <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-elevated group">
                  <img
                    src="/images/hero_workspace.png"
                    alt="Modern AI-inspired office workspace"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ height: '200px' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-20 bg-[hsl(214_32%_97%)] dark:bg-slate-900/50">
          <div className="container-custom">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
              <span className="section-label mb-4 inline-flex">Our Offices</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                Visit Us
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto">
                Our regional headquarters serving clients globally
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 gap-6 max-w-xl mx-auto">
              {offices.map((office, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="card-premium p-7"
                >
                  <h3 className="text-xl font-800 text-slate-900 dark:text-white mb-5" style={{ fontWeight: 800 }}>{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary dark:text-blue-400" />
                      <p className="text-sm text-slate-500 dark:text-slate-400">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="flex-shrink-0 text-primary dark:text-blue-400" />
                      <a href={`tel:${office.phone}`} className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200">{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="flex-shrink-0 text-primary dark:text-blue-400" />
                      <a href={`mailto:${office.email}`} className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors duration-200">{office.email}</a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;