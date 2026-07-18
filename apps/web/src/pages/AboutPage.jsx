import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechIcon from '@/components/TechIcon';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } })
};

const AboutPage = () => {
  const [activeStoryTab, setActiveStoryTab] = React.useState(0);
  const storyVisuals = [
    {
      title: 'Team Collaboration',
      tabLabel: 'Collaboration',
      image: '/images/about_team.png',
      caption: 'A world-class team of data engineers and scientists collaborating to deliver premium AI solutions.'
    },
    {
      title: 'Cloud Platforms & Analytics',
      tabLabel: 'Engineering',
      image: '/images/about_dashboard.png',
      caption: 'Building real-time data streaming and secure analytics dashboard environments on major clouds.'
    },
    {
      title: 'Digital Transformation',
      tabLabel: 'Transformation',
      image: '/images/about_transformation.png',
      caption: 'Helping enterprises modernize their data architecture and capture business value from day one.'
    }
  ];

  const values = [
    { icon: Target, title: 'Client-First Approach', description: 'Your success drives everything we do. We partner closely with clients to understand their unique challenges and deliver solutions that create measurable impact.', color: '#0369a1' },
    { icon: Lightbulb, title: 'Innovation Mindset', description: 'We stay at the forefront of data science, AI, and cloud technologies, continuously exploring new methods to solve complex business problems.', color: '#7c3aed' },
    { icon: CheckCircle2, title: 'Technical Excellence', description: 'Our team maintains the highest standards of code quality, architecture design, and engineering practices across all projects.', color: '#059669' },
    { icon: Users, title: 'Collaborative Culture', description: 'We believe in knowledge sharing, cross-functional collaboration, and building long-term partnerships with our clients.', color: '#d97706' },
  ];

  const achievements = [
    { text: '100+ successful data transformation projects' },
    { text: '10+ enterprise clients across 10+ industries' },
    { text: 'AWS, Azure, and GCP certified team members', techs: ['AWS', 'Azure', 'GCP'] },
    { text: 'Published research in ML and data engineering', techs: ['Python'] },
    { text: 'Databricks and Snowflake partner certifications', techs: ['Databricks', 'Snowflake'] },
    { text: '99% client satisfaction rating' },
  ];

  const approach = [
    { num: '01', title: 'Understand', description: 'We start by deeply understanding your business objectives, data landscape, and technical constraints through discovery workshops and stakeholder interviews.' },
    { num: '02', title: 'Design', description: 'Our architects design scalable, maintainable solutions using industry best practices and modern data stacks tailored to your specific needs.' },
    { num: '03', title: 'Deliver', description: 'We build, test, and deploy solutions using agile methodologies, ensuring continuous feedback and iterative improvements throughout the project lifecycle.' },
    { num: '04', title: 'Optimize', description: 'Post-launch, we continuously monitor, optimize, and evolve your solution to ensure long-term value and adapt to changing business needs.' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us – DataCloud Solutions</title>
        <meta name="description" content="Learn about DataCloud Solutions, our mission, values, and the team behind our data and AI consulting services." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-500/15 blur-[100px] pointer-events-none" />
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-600 tracking-wider uppercase mb-6" style={{ fontWeight: 600 }}>
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-800 text-white mb-5 max-w-3xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                Transforming Businesses Through Data
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
                A team of data engineers,data scientists, ML engineers, and cloud architects united by a passion for making data work for your business.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
              <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20Z" fill="currentColor" className="text-white dark:text-[hsl(var(--background))]" />
            </svg>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <span className="section-label mb-5 inline-flex">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                  Born from a Vision to Make Data Work
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                  <p>Founded in 2015, DataCloud Solutions emerged from a simple observation: organizations were sitting on vast amounts of data but struggling to extract meaningful value from it.</p>
                  <p>Our founding team of data engineers,data scientists, ML engineers, and cloud architects came together with a shared vision: to help businesses unlock the power of their data through cutting-edge AI, analytics, and cloud technologies.</p>
                  <p>Today, we've grown into a trusted partner for 10+ enterprise clients across healthcare, finance, retail, manufacturing, and more. Our team has delivered 100+ successful projects, from building real-time ML pipelines to migrating petabyte-scale data warehouses to the cloud.</p>
                </div>
                <div className="mt-8">
                  <Link to="/company" className="btn-primary">
                    Meet Our Team <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col gap-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-100 dark:border-slate-800 bg-slate-900 group" style={{ height: '440px' }}>
                  <motion.img
                    key={activeStoryTab}
                    src={storyVisuals[activeStoryTab].image}
                    alt={storyVisuals[activeStoryTab].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                  {/* Image overlay caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                    <p className="text-xs font-600 text-blue-400 uppercase tracking-widest mb-1.5" style={{ fontWeight: 600 }}>{storyVisuals[activeStoryTab].title}</p>
                    <p className="text-sm text-white/80 leading-relaxed font-500" style={{ fontWeight: 500 }}>{storyVisuals[activeStoryTab].caption}</p>
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-4 right-4 glass rounded-xl shadow-elevated px-3 py-1.5 border border-white/10"
                  >
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5" style={{ fontWeight: 600 }}>Founded</p>
                    <p className="text-lg font-800 text-primary dark:text-blue-400 leading-none" style={{ fontWeight: 800 }}>2015</p>
                  </motion.div>
                </div>

                {/* Switcher buttons */}
                <div className="flex gap-2 flex-wrap">
                  {storyVisuals.map((visual, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStoryTab(idx)}
                      className={`px-4 py-2 rounded-xl text-xs font-700 border transition-all duration-200 ${activeStoryTab === idx
                        ? 'bg-[hsl(213_94%_38%)] border-[hsl(213_94%_38%)] text-white shadow-soft'
                        : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-500 dark:text-slate-400 hover:border-gray-300 dark:hover:border-slate-655 hover:bg-gray-50 dark:hover:bg-slate-700'
                        }`}
                      style={{ fontWeight: 700 }}
                    >
                      {visual.tabLabel}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 bg-[hsl(214_32%_97%)] dark:bg-slate-900/50">
          <div className="container-custom">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label mb-4 inline-flex">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                How We Deliver Success
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">A proven methodology built on transparency, collaboration, and measurable outcomes</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approach.map((step, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="card-premium p-7 relative group"
                >
                  <div className="text-5xl font-800 mb-4 leading-none"
                    style={{ fontWeight: 800, color: 'hsl(213 94% 38% / 0.80)', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {step.num}
                  </div>
                  <h3 className="text-lg font-700 text-slate-900 dark:text-white mb-3" style={{ fontWeight: 700 }}>{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-primary" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24">
          <div className="container-custom">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label mb-4 inline-flex">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                Principles That Guide Our Work
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">The core beliefs that shape every project and partnership</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="card-premium p-7 flex gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${value.color}14`, border: `1px solid ${value.color}28` }}>
                    <value.icon size={22} style={{ color: value.color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-700 text-slate-900 dark:text-white mb-2" style={{ fontWeight: 700 }}>{value.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-24 bg-[hsl(214_32%_97%)] dark:bg-slate-900/50">
          <div className="container-custom">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label mb-4 inline-flex">Track Record</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                Certifications & Achievements
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Recognition of our expertise and commitment to excellence</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="card-premium p-5 flex items-center gap-3"
                >
                  {item.techs ? (
                    <div className="flex items-center gap-1 flex-shrink-0" aria-label={`Technologies: ${item.techs.join(', ')}`}>
                      {item.techs.map((tech) => (
                        <TechIcon key={tech} name={tech} size={18} />
                      ))}
                    </div>
                  ) : (
                    <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                  )}
                  <span className="text-sm font-500 text-slate-800 dark:text-slate-200" style={{ fontWeight: 500 }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
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
                <TrendingUp size={40} className="mx-auto mb-4 text-white/80" />
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                  Join Us on Your Data Journey
                </h2>
                <p className="text-white/75 max-w-xl mx-auto mb-8 text-base">
                  Whether you're just starting or looking to scale, we're here to help you succeed.
                </p>
                <Link to="/contact" className="btn-white">
                  Get in Touch <ArrowRight size={16} />
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

export default AboutPage;