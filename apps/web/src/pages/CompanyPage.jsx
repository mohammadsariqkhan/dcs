import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Globe, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechBadge from '@/components/TechBadge';
import { Link } from 'react-router-dom';
import LogoMarquee from '@/components/LogoMarquee';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } })
};

const technologies1 = [
  'Python', 'SQL', 'Apache Spark', 'Databricks', 'Snowflake',
  'Azure', 'AWS', 'GCP', 'TensorFlow', 'PyTorch'
];

const technologies2 = [
  'Docker', 'Kubernetes', 'Terraform', 'Airflow', 'dbt', 'MLflow',
  'Cloudera', 'Confluent Kafka', 'Qlik', 'Power BI'

];

const CompanyPage = () => {
  const leadership = [
    { name: 'Anika Bergström', role: 'Chief Executive Officer', bio: 'Former VP of Data Science at a Fortune 500 tech company. 15+ years leading data transformation initiatives across global enterprises.', initials: 'AB', color: '#0369a1' },
    { name: 'Raj Patel', role: 'Chief Technology Officer', bio: 'Ex-Google ML engineer with expertise in distributed systems and cloud architecture. PhD in Computer Science from Stanford.', initials: 'RP', color: '#7c3aed' },
    { name: 'Maya Chen', role: 'VP of Data Engineering', bio: 'Built data platforms processing 10B+ events daily. Previously at Uber and Airbnb driving petabyte-scale engineering solutions.', initials: 'MC', color: '#059669' },
    { name: 'Kwame Asante', role: 'VP of AI & Machine Learning', bio: 'Published researcher in deep learning and NLP. Led AI initiatives at Microsoft Research and delivered enterprise AI at scale.', initials: 'KA', color: '#d97706' },
  ];

  const companyValues = [
    { icon: Target, title: 'Mission', description: 'To empower organizations with data-driven decision-making capabilities through cutting-edge AI, analytics, and cloud technologies.', color: '#0369a1' },
    { icon: Eye, title: 'Vision', description: 'To be the most trusted partner for enterprise data transformation, recognized for technical excellence and measurable business impact.', color: '#7c3aed' },
  ];

  const milestones = [

    { year: '2015', event: 'Company founded by data science veterans with a shared vision for enterprise data transformation' },
    { year: '2016', event: 'Reached 10 enterprise clients milestone, expanded service offerings to include cloud solutions' },
    { year: '2018', event: 'Established our UAE operations, launched dedicated ML practice and AI center of excellence' },
    { year: '2020', event: 'Achieved AWS Advanced Partner and Azure Expert Partner status, team grew to 50+ specialists' },
    { year: '2022', event: 'Delivered our 100th project successfully, expanded to 50+ enterprise clients across 10+ industries' },
    { year: '2024', event: 'Launched Generative AI practice, established Databricks Elite partnership, opened APAC operations' },
  ];

  return (
    <>
      <Helmet>
        <title>Company – DataCloud Solutions</title>
        <meta name="description" content="Learn about DataCloud Solutions company, our leadership team, mission, vision, and technology partnerships." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-blue-500/15 blur-[100px] pointer-events-none" />
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-600 tracking-wider uppercase mb-6" style={{ fontWeight: 600 }}>
                Our Company
              </span>
              <h1 className="text-4xl md:text-5xl font-800 text-white mb-5 max-w-3xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                Building the Future of Data-Driven Business
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
                25+ data engineers, data scientists, ML engineers, and cloud architects delivering transformative outcomes for global enterprises.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
              <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <span className="section-label mb-5 inline-flex">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-800 text-[hsl(222_47%_11%)] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                  A Specialized Data Analytics, AI & Cloud Advisory Firm
                </h2>
                <div className="space-y-4 text-[hsl(215_20%_42%)] leading-relaxed text-base mb-8">
                  <p>DataCloud Solutions is a specialized advisory firm focused on helping enterprises unlock the value of their data through AI, analytics, and cloud technologies.</p>
                  <p>Our team of data engineers, data scientists, ML engineers, and cloud architects has delivered transformative projects for clients across healthcare, finance, retail, manufacturing, and more.</p>
                  <p>We combine deep technical expertise with business acumen to design and implement solutions that drive measurable ROI. From building real-time ML pipelines to migrating petabyte-scale data warehouses, we've tackled some of the most complex data challenges in the industry.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {companyValues.map((v, i) => (
                    <div key={i} className="card-premium p-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ background: `${v.color}14`, border: `1px solid ${v.color}28` }}>
                        <v.icon size={18} style={{ color: v.color }} />
                      </div>
                      <h4 className="text-sm font-700 text-[hsl(222_47%_11%)] mb-1.5" style={{ fontWeight: 700 }}>{v.title}</h4>
                      <p className="text-xs text-[hsl(215_20%_50%)] leading-relaxed">{v.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&auto=format&fit=crop"
                  alt="Modern office environment"
                  className="rounded-2xl shadow-elevated w-full object-cover"
                  style={{ height: '500px' }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-[hsl(214_32%_97%)]">
          <div className="container-custom">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label mb-4 inline-flex">Leadership</span>
              <h2 className="text-3xl md:text-4xl font-800 text-[hsl(222_47%_11%)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                Meet Our Leadership Team
              </h2>
              <p className="text-[hsl(215_20%_50%)] max-w-xl mx-auto">Experienced leaders driving innovation and client success</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((leader, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="card-premium p-7 flex gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-sm font-800 flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${leader.color}, ${leader.color}cc)`, fontWeight: 800 }}>
                    {leader.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-700 text-[hsl(222_47%_11%)] mb-0.5" style={{ fontWeight: 700 }}>{leader.name}</h3>
                    <p className="text-xs font-600 mb-3" style={{ color: leader.color, fontWeight: 600 }}>{leader.role}</p>
                    <p className="text-sm text-[hsl(215_20%_50%)] leading-relaxed">{leader.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey / Timeline */}
        <section className="py-24">
          <div className="container-custom">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label mb-4 inline-flex">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-800 text-[hsl(222_47%_11%)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                A Decade of Growth
              </h2>
              <p className="text-[hsl(215_20%_50%)] max-w-xl mx-auto">Key milestones in our growth and evolution</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="flex gap-6 mb-6 last:mb-0"
                >
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-sm font-800 text-[hsl(213_94%_38%)]" style={{ fontWeight: 800 }}>{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full mt-0.5 flex-shrink-0" style={{ background: 'hsl(213 94% 38%)' }} />
                    {i < milestones.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: 'hsl(213 94% 38% / 0.2)', minHeight: '32px' }} />}
                  </div>
                  <div className="flex-1 pb-6">
                    <p className="text-sm text-[hsl(215_20%_40%)] leading-relaxed">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 bg-[hsl(214_32%_97%)]">
          <div className="container-custom">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label mb-4 inline-flex">Technology</span>
              <h2 className="text-3xl md:text-4xl font-800 text-[hsl(222_47%_11%)] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                Our Technology Stack
              </h2>
              <p className="text-[hsl(215_20%_50%)] max-w-xl mx-auto">We work with industry-leading platforms and tools</p>
            </motion.div>

            <LogoMarquee items={technologies1} speed="35s" />
            <LogoMarquee items={technologies2} reverse={true} speed="35s" />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl gradient-cta p-12 md:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-white/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <Globe size={40} className="mx-auto mb-4 text-white/80" />
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                  Global Presence, Local Expertise
                </h2>
                <p className="text-white/75 max-w-xl mx-auto mb-8 text-base">
                  Headquartered in Sharjah, UAE, we serve clients globally.
                </p>
                <Link to="/contact" className="btn-white">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CompanyPage;