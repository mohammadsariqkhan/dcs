import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain, Database, BarChart3, Cog, Cloud, TrendingUp,
  Heart, Building2, ShoppingBag, Factory, Radio, Zap, Truck,
  ArrowRight, CheckCircle2, Users, Award, Lightbulb, Star,
  ChevronRight, Shield, Globe, Layers
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';
import ServiceCard from '@/components/ServiceCard';
import TechBadge from '@/components/TechBadge';
import TechIcon from '@/components/TechIcon';
import LogoMarquee from '@/components/LogoMarquee';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } })
};

const HomePage = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems with predictive analytics, NLP, computer vision, and generative AI solutions.',
      benefits: ['Automated decision-making', 'Pattern recognition', 'Predictive insights'],
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Extract actionable insights through statistical modeling, forecasting, and advanced analytics.',
      benefits: ['Data-driven decisions', 'Customer insights', 'Risk assessment'],
      technologies: ['Python', 'R', 'SQL'],
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into visual dashboards, KPI tracking, and self-service analytics platforms.',
      benefits: ['Real-time reporting', 'Performance tracking', 'Business intelligence'],
      technologies: ['Power BI', 'Tableau', 'Looker'],
    },
    {
      icon: Cog,
      title: 'Data Engineering',
      description: 'Build scalable data pipelines, warehouses, and real-time streaming architectures.',
      benefits: ['Automated data flows', 'Scalable infrastructure', 'Data quality'],
      technologies: ['Spark', 'Kafka', 'Databricks'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate and modernize applications on AWS, Azure, and GCP with DevOps automation.',
      benefits: ['Cost optimization', 'Scalability', 'High availability'],
      technologies: ['AWS', 'Azure', 'GCP'],
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Create comprehensive BI strategies with enterprise reporting and analytics governance.',
      benefits: ['Strategic insights', 'Data governance', 'Executive dashboards'],
      technologies: ['Power BI', 'Tableau', 'Qlik'],
    },
  ];

  const industries = [
    { icon: Heart, name: 'Healthcare', color: '#e11d48' },
    { icon: Building2, name: 'Banking & Finance', color: '#0284c7' },
    { icon: ShoppingBag, name: 'Retail & E-commerce', color: '#7c3aed' },
    { icon: Factory, name: 'Manufacturing', color: '#b45309' },
    { icon: Radio, name: 'Telecommunications', color: '#0891b2' },
    { icon: Zap, name: 'Energy & Utilities', color: '#d97706' },
    { icon: Truck, name: 'Logistics & Supply Chain', color: '#16a34a' },
    { icon: Globe, name: 'Public Sector', color: '#4f46e5' },
  ];

  const testimonials = [
    {
      quote: 'DataCloud Solutions transformed our data infrastructure. Their ML models increased our forecast accuracy by 34% and reduced operational costs significantly.',
      name: 'Maya Chen',
      title: 'VP of Analytics',
      company: 'TechFlow Industries',
      rating: 5,
      avatar: 'MC',
    },
    {
      quote: 'The team delivered a real-time analytics platform that processes 2.4M transactions daily. Their expertise in Kafka and Spark was exceptional.',
      name: 'Raj Patel',
      title: 'Chief Technology Officer',
      company: 'FinanceHub',
      rating: 5,
      avatar: 'RP',
    },
    {
      quote: 'Our cloud migration to AWS was seamless. DataCloud reduced our infrastructure costs by 47% while improving performance and reliability.',
      name: 'Lucia Torres',
      title: 'Director of IT',
      company: 'GlobalRetail Corp',
      rating: 5,
      avatar: 'LT',
    },
  ];

  const whyChooseUs = [
    { icon: Users, title: 'Deep Technical Expertise', description: '15+ years of experience in data engineering, data analytics, data science, ML engineering, and cloud architecture across Fortune 50 companies.' },
    { icon: Award, title: 'Proven Track Record', description: 'Delivered 100+ successful projects with measurable business impact, from POCs to enterprise-scale deployments.' },
    { icon: Lightbulb, title: 'Innovation-First Approach', description: 'We stay ahead with cutting-edge technologies like generative AI, MLOps, and modern data stacks.' },
    { icon: Shield, title: 'Enterprise-Grade Security', description: 'Every solution is designed with security, compliance, and data governance as first-class requirements.' },
  ];

  const partners = ['AWS', 'Azure', 'GCP', 'Databricks', 'Snowflake', 'dbt', 'Cloudera', 'Confluent Kafka', 'Qlik'];

  return (
    <>
      <Helmet>
        <title>DataCloud Solutions – AI, Data & Cloud Consulting</title>
        <meta name="description" content="Transform your business with AI, data science, analytics, and cloud solutions. Expert consulting for enterprise data transformation." />
      </Helmet>

      <Header />

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
          {/* Background mesh */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px] animate-float-slow pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-400/15 blur-[100px] animate-float pointer-events-none" />

          <div className="container-custom relative z-10 py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-600 tracking-wider uppercase" style={{ fontWeight: 600 }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Trusted by 10+ enterprises
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-[3.5rem] font-800 text-white leading-[1.12] mb-6"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
                >
                  Transforming Businesses with{' '}
                  <span className="text-gradient-white">Data, AI & Cloud</span>{' '}
                  Innovation
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base md:text-lg text-white/65 leading-relaxed mb-8 max-w-xl"
                >
                  We help organizations unlock the full power of their data through AI, advanced analytics, engineering, and cloud-native solutions — delivering measurable ROI from day one.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3 mb-10"
                >
                  <Link to="/services" className="btn-primary">
                    Explore Services <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    Schedule Consultation
                  </Link>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex items-center gap-4 flex-wrap"
                >
                  {[
                    { label: 'SOC 2 Certified' },
                    { label: 'ISO 27001' },
                    { label: 'AWS Partner', tech: 'AWS' },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-1.5 text-xs text-white/50">
                      {badge.tech ? (
                        <TechIcon name={badge.tech} size={14} color="#FF9900" className="opacity-90" />
                      ) : (
                        <CheckCircle2 size={13} className="text-emerald-400" />
                      )}
                      {badge.label}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right — floating card visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80&auto=format&fit=crop"
                    alt="Data professionals collaborating"
                    className="rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.4)] w-full object-cover"
                    style={{ height: '460px' }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[hsl(222_47%_8%)/60%] via-transparent to-transparent" />

                  {/* Floating metric cards */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -left-6 top-8 glass rounded-xl px-4 py-3 shadow-elevated"
                  >
                    <div className="text-xs text-gray-500 mb-0.5">Accuracy Improvement</div>
                    <div className="text-2xl font-800 text-[hsl(213_94%_38%)]" style={{ fontWeight: 800 }}>+34%</div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute -right-6 bottom-16 glass rounded-xl px-4 py-3 shadow-elevated"
                  >
                    <div className="text-xs text-gray-500 mb-0.5">Cost Reduction</div>
                    <div className="text-2xl font-800 text-emerald-600" style={{ fontWeight: 800 }}>-47%</div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute left-1/2 -translate-x-1/2 -bottom-5 glass rounded-xl px-4 py-3 shadow-elevated"
                  >
                    <div className="text-xs text-gray-500 mb-0.5">Client Satisfaction</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-amber-400 fill-amber-400" />)}
                      <span className="text-sm font-700 text-gray-700 ml-1" style={{ fontWeight: 700 }}>99%</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
              <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ── PARTNER LOGOS ── */}
        <section className="py-12 border-b border-gray-100">
          <div className="container-custom">
            <p className="text-center text-xs font-600 text-gray-400 uppercase tracking-widest mb-8" style={{ fontWeight: 600 }}>
              Trusted technology partnerships
            </p>
            <LogoMarquee items={partners} speed="25s" />
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-20">
          <div className="container-custom">
            <div className="rounded-2xl bg-gradient-to-br from-[hsl(213_94%_38%)] to-[hsl(220_90%_50%)] p-10 md:p-14">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                  { number: '100+', label: 'Projects Delivered' },
                  { number: '10+', label: 'Enterprise Clients' },
                  { number: '10+', label: 'Industries Served' },
                  { number: '99%', label: 'Client Satisfaction' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl md:text-5xl font-800 text-white mb-2" style={{ fontWeight: 800, letterSpacing: '-0.04em' }}>
                      {stat.number}
                    </div>
                    <p className="text-sm text-white/70 font-500" style={{ fontWeight: 500 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-24 bg-[hsl(214_32%_97%)]">
          <div className="container-custom">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="section-label mb-4 inline-flex">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-800 text-[hsl(222_47%_11%)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                End-to-End Data & AI Solutions
              </h2>
              <p className="text-[hsl(215_20%_50%)] max-w-2xl mx-auto text-lg">
                From strategy to implementation, we deliver solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  index={index}
                  onCTAClick={() => window.location.href = '/services'}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/services" className="btn-outline">
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <span className="section-label mb-4 inline-flex">Why DataCloud</span>
                  <h2 className="text-3xl md:text-4xl font-800 text-[hsl(222_47%_11%)] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                    What Sets Us Apart in Data & AI Consulting
                  </h2>
                  <p className="text-[hsl(215_20%_50%)] mb-10 text-base leading-relaxed">
                    We combine deep technical expertise with business acumen to deliver solutions that create measurable, lasting impact for our clients.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {whyChooseUs.map((item, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                      className="flex gap-4 group"
                    >
                      <div className="icon-box flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                        <item.icon size={22} style={{ color: 'hsl(213 94% 38%)' }} />
                      </div>
                      <div>
                        <h3 className="text-base font-700 text-[hsl(222_47%_11%)] mb-1.5" style={{ fontWeight: 700 }}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-[hsl(215_20%_50%)] leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=700&q=80&auto=format&fit=crop"
                  alt="Data analytics dashboard"
                  className="rounded-2xl shadow-elevated w-full object-cover"
                  style={{ height: '500px' }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-[hsl(213_94%_38%/0.1)]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section className="py-24 bg-[hsl(214_32%_97%)]">
          <div className="container-custom">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label mb-4 inline-flex">Industries</span>
              <h2 className="text-3xl md:text-4xl font-800 text-[hsl(222_47%_11%)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                Serving Diverse Sectors
              </h2>
              <p className="text-[hsl(215_20%_50%)] max-w-xl mx-auto">
                Deep domain expertise across the industries that matter most
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="card-premium p-5 flex items-center gap-3 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `${industry.color}14`, border: `1px solid ${industry.color}28` }}>
                    <industry.icon size={18} style={{ color: industry.color }} />
                  </div>
                  <span className="text-sm font-600 text-[hsl(222_47%_18%)]" style={{ fontWeight: 600 }}>
                    {industry.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        {/* <section className="py-24">
          <div className="container-custom">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label mb-4 inline-flex">Client Stories</span>
              <h2 className="text-3xl md:text-4xl font-800 text-[hsl(222_47%_11%)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                Real Results, Real Partnerships
              </h2>
              <p className="text-[hsl(215_20%_50%)] max-w-xl mx-auto">
                See how we've helped enterprises unlock the power of their data
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="card-premium p-7 flex flex-col"
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} size={15} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[hsl(215_20%_40%)] leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-700 flex-shrink-0"
                      style={{ fontWeight: 700 }}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-700 text-[hsl(222_47%_11%)]" style={{ fontWeight: 700 }}>{t.name}</p>
                      <p className="text-xs text-[hsl(215_20%_55%)]">{t.title}, {t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ── CTA ── */}
        <section className="py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl gradient-cta p-12 md:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-white/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-white/10 blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white/90 text-xs font-600 tracking-wider uppercase mb-5" style={{ fontWeight: 600 }}>
                  Get Started Today
                </span>
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                  Ready to Transform Your Data Strategy?
                </h2>
                <p className="text-white/75 max-w-xl mx-auto mb-8 text-base leading-relaxed">
                  Schedule a free consultation with our experts to discuss how we can help you achieve your data and AI goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="btn-white">
                    Schedule Consultation <ArrowRight size={16} />
                  </Link>
                  <Link to="/services" className="btn-outline"
                    style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;