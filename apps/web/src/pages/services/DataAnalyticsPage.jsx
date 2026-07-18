import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3, PieChart, Gauge, Database, ArrowRight, CheckCircle2,
  Plus, Minus, LayoutGrid, Award, ShieldAlert, Monitor, HelpCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Illustration from '@/components/Illustration';
import TechBadge from '@/components/TechBadge';
import { Link } from 'react-router-dom';

const DataAnalyticsPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const capabilities = [
    { icon: Monitor, title: 'Interactive Dashboards', desc: 'Craft stunning, interactive canvases in Power BI, Tableau, and Looker that allow executives to slice-and-dice data by region, segment, and time.' },
    { icon: Gauge, title: 'Real-time KPI Monitoring', desc: 'Establish live connection layers that refresh metrics continuously, alerting managers if metrics drop below target ranges.' },
    { icon: Award, title: 'Enterprise BI Reporting', desc: 'Automate weekly PDF summaries, email reports, and scheduled Slack updates so everyone stays on top of performance.' },
    { icon: LayoutGrid, title: 'Self-Service Analytics Platforms', desc: 'Construct clean semantic models and custom data catalogs, empowering business analysts to write queries without relying on IT.' },
    { icon: Database, title: 'SQL Performance Optimization', desc: 'Optimize heavy analytical SQL queries, replace complex joins with indexed views, and reduce warehouse scanning costs.' },
    { icon: ShieldAlert, title: 'Data Governance & Access Roles', desc: 'Design row-level security (RLS) policies, separating data access permissions for regional directors and client accounts.' }
  ];

  const challenges = [
    { pain: 'Dashboards Take Minutes to Load', solution: 'We rebuild backend query structures, pre-aggregate historical summaries, and implement query caching to reduce dashboard load times to under two seconds.' },
    { pain: 'Cluttered, Overwhelming UI Visuals', solution: 'We follow strict dashboard design systems, placing main summary metrics at the top and secondary filters in collapsible sidebars.' },
    { pain: 'Stale Data Discrepancies', solution: 'We synchronize automated pipeline schedules with warehouse refresh timers, guaranteeing that reports match source data.' }
  ];

  const dashboardWorkflow = [
    { step: '1. Mockup & Layout', desc: 'We gather user stories, defining core KPIs and designing low-fidelity layouts before connecting data engines.' },
    { step: '2. Semantic Modeling', desc: 'We build clean star-schema relationships, calculate DAX/LOD measures, and format dates consistently.' },
    { step: '3. Visual Styling', desc: 'We apply company styling, select color-blind friendly palettes, and format numbers cleanly (e.g., $1.2M).' },
    { step: '4. Publish & Refresh', desc: 'We publish workspaces, configure cloud gateway bridges, and set up automated daily data syncs.' }
  ];

  const faqs = [
    { q: 'Can you migrate our reports from Tableau to Power BI?', a: 'Yes. We map your existing Tableau calculations (LOD expressions) to Power BI DAX models, re-build dashboard canvases to match company styles, and configure access permissions.' },
    { q: 'How does Row-Level Security (RLS) work in dashboards?', a: 'RLS filters dashboard rows dynamically based on the current user login. For example, a sales manager in the Western region only sees West region metrics, while executives see global data.' },
    { q: 'Do you charge per-user licensing fees for dashboards?', a: 'No. You pay only for our engineering time. Standard licensing is handled through your existing Microsoft Power BI or Tableau corporate licenses.' }
  ];

  return (
    <>
      <Helmet>
        <title>Data Analytics & Business Intelligence – DataCloud Solutions</title>
        <meta name="description" content="Transform raw database tables into stunning interactive dashboards. Experts in Power BI, Tableau, Looker Studio, and self-service analytics." />
      </Helmet>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-24 relative bg-slate-950 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-rose-500/10 blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-6">
                  <BarChart3 size={14} /> Data Analytics
                </span>
                <h1 className="text-4xl md:text-6xl font-800 tracking-tight leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                  Make Data Visual & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400">Decision-Ready</span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                  Replace confusing spreadsheets with fast, interactive business dashboards. We translate raw database columns into clean visuals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, hsl(340 85% 42%), hsl(340 85% 48%))', boxShadow: '0 4px 14px hsl(340 85% 42% / 0.3)' }}>
                    Schedule Dashboard Demo <ArrowRight size={16} />
                  </Link>
                  <a href="#workflow" className="btn-outline border-slate-800 text-white hover:bg-slate-900">
                    See Design Process
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-slate-900/60 border border-slate-800 p-8 shadow-2xl backdrop-blur-sm">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl opacity-20 blur-md -z-10" />
                  <Illustration title="data analytics" className="w-full h-full text-rose-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-label border-rose-500/20 text-rose-600 dark:text-rose-400 bg-rose-500/6 mb-4">Overview</span>
                <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  A dashboard is only useful if it drives action
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Many companies invest thousands in BI tools only to end up with slow reports that nobody looks at. We focus on visual simplicity, high-performance data modeling, and immediate answers.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our dashboard templates isolate critical KPIs at first glance, enable deep filtering for curious analysts, and load instantly on both mobile browsers and desktop monitors.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-rose-600 dark:text-rose-400 mb-1">&lt;2s</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Load Latency</p>
                  <p className="text-xs text-slate-500 mt-1">Ensured using pre-aggregated data extracts.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-pink-600 dark:text-pink-400 mb-1">85%</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Adoption Rate</p>
                  <p className="text-xs text-slate-500 mt-1">Achieved via interactive user training programs.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-red-600 dark:text-red-400 mb-1">100%</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Automated Syncs</p>
                  <p className="text-xs text-slate-500 mt-1">No more manual CSV file uploads or copy-pasting.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-emerald-600 dark:text-emerald-400 mb-1">Zero</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">IT Dependency</p>
                  <p className="text-xs text-slate-500 mt-1">For business managers using self-service data models.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label border-rose-500/20 text-rose-600 dark:text-rose-400 bg-rose-500/6 mb-4">Design Process</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                How We Build Dashboards
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dashboardWorkflow.map((d, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{d.step}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label border-rose-500/20 text-rose-600 dark:text-rose-400 bg-rose-500/6 mb-4">Key Offerings</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Data Visualization Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((c, i) => (
                <div key={i} className="card-premium p-8 group flex flex-col h-full bg-white dark:bg-slate-900">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    <c.icon size={24} />
                  </div>
                  <h3 className="text-lg font-700 text-slate-900 dark:text-white mb-3">{c.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges solved */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="section-label border-rose-500/20 text-rose-600 dark:text-rose-400 bg-rose-500/6 mb-4">BI Obstacles</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Overcoming Common Reporting Hurdles
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {challenges.map((c, i) => (
                <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">Problem</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">{c.pain}</h3>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 my-4" />
                    <span className="text-xs font-bold text-rose-500 uppercase tracking-widest block mb-2">Engineered Solution</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Badges */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="section-label border-rose-500/20 text-rose-600 dark:text-rose-400 bg-rose-500/6 mb-4">Analytics Stack</span>
              <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                BI Technologies We Deploy
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['Power BI', 'Tableau', 'Looker Studio', 'Excel', 'SQL', 'Snowflake', 'BigQuery', 'dbt', 'D3.js', 'Python DataFrames'].map((tech, i) => (
                <TechBadge key={i} name={tech} variant="pill" />
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="section-label border-rose-500/20 text-rose-600 dark:text-rose-400 bg-rose-500/6 mb-4">FAQ</span>
                <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  BI Inquiries
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm">
                  Find answers to report scaling and server connections here.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-slate-900 hover:bg-slate-50/50 dark:hover:bg-slate-800/80 transition-colors"
                    >
                      <span className="text-sm font-semibold text-slate-950 dark:text-slate-100">{faq.q}</span>
                      {activeFAQ === i ? <Minus size={16} /> : <Plus size={16} />}
                    </button>
                    <AnimatePresence>
                      {activeFAQ === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom">
            <div className="rounded-3xl bg-gradient-to-r from-rose-900 to-pink-950 p-12 md:p-16 text-center relative overflow-hidden shadow-2xl border border-rose-500/10">
              <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-rose-500/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Upgrade Your Business Reporting
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
                  Ready to deploy high-speed, interactive dashboards and automate weekly PDF reports? Get in touch today.
                </p>
                <Link to="/contact" className="btn-white text-rose-900">
                  Request BI Audit <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DataAnalyticsPage;
