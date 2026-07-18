import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, BarChart3, LineChart, Target, Zap, Shield, ArrowRight,
  CheckCircle2, Plus, Minus, Calculator, Brain, PieChart, HelpCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Illustration from '@/components/Illustration';
import TechBadge from '@/components/TechBadge';
import { Link } from 'react-router-dom';

const AdvancedAnalyticsPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const capabilities = [
    { icon: TrendingUp, title: 'Time Series & Forecasting', desc: 'Predict future revenue, resource needs, and seasonal product demands with Prophet, ARIMA, and LSTM architectures.' },
    { icon: Target, title: 'Customer Segmentation & LTV', desc: 'Cluster buyers by behaviors and purchase history using K-Means and RFM metrics to maximize campaign conversions.' },
    { icon: Shield, title: 'Risk & Fraud Analytics', desc: 'Construct statistical classification models to monitor transaction risk and flag potentially fraudulent events in real-time.' },
    { icon: Calculator, title: 'Mathematical Optimization', desc: 'Determine the best resource allocation paths, pricing tiers, and delivery routes using linear programming solvers.' },
    { icon: LineChart, title: 'Rigorous Statistical Modeling', desc: 'Verify statistical assumptions, conduct A/B testing, run multivariate regression analyses, and measure confidence levels.' },
    { icon: Brain, title: 'Decision Intelligence Systems', desc: 'Connect mathematical predictions directly to automated decision trees, giving operators recommended actions.' }
  ];

  const challenges = [
    { pain: 'Brittle, Spreadsheet-Based Planning', solution: 'We replace manually linked Excel sheets with automated forecasting scripts that process raw warehouse data and spit out confidence intervals.' },
    { pain: 'Untargeted, Costly Marketing Campaigns', solution: 'Our behavioral segmentation clustering identifies high-value customer cohorts, raising ROI on marketing spend by 40%.' },
    { pain: 'Sub-Optimal Inventory Distribution', solution: 'We deploy custom linear optimization solvers that balance warehouse holding costs and shipping costs, reducing logistics expenses.' }
  ];

  const analyticalStages = [
    { name: 'Descriptive', desc: 'What happened? We parse historical logs, cleaning records to establish a reliable baseline database.', color: 'border-orange-500/20 text-orange-500' },
    { name: 'Diagnostic', desc: 'Why did it happen? We run correlation testing and ANOVA metrics to identify core drivers behind variations.', color: 'border-amber-500/20 text-amber-500' },
    { name: 'Predictive', desc: 'What will happen? We deploy time-series and regression algorithms to forecast future trends with accuracy bounds.', color: 'border-yellow-500/20 text-yellow-500' },
    { name: 'Prescriptive', desc: 'How can we make it happen? We apply linear programming and simulations to recommend the optimal business actions.', color: 'border-red-500/20 text-red-500' }
  ];

  const faqs = [
    { q: 'How do you measure the accuracy of your forecasting models?', a: 'We measure model performance using standard metrics like MAPE (Mean Absolute Percentage Error) and RMSE (Root Mean Squared Error) on holdout validation data, aiming for under 5% deviation on core business KPIs.' },
    { q: 'Can you work with unstructured data, or does it all have to be in tables?', a: 'While tables are easiest, we build specialized pipelines that convert unstructured files (customer support calls, reviews, log files) into numeric features for modeling.' },
    { q: 'What tools do you use for mathematical optimization?', a: 'We construct solvers using specialized libraries like SciPy, PuLP, Gurobi, and Pyomo, depending on model complexity and linear/integer requirements.' }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Analytics Services – DataCloud Solutions</title>
        <meta name="description" content="Go beyond descriptive BI. We deliver time-series forecasting, behavioral customer segmentation, risk models, and prescriptive optimization solutions." />
      </Helmet>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-24 relative bg-slate-950 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-6">
                  <TrendingUp size={14} /> Advanced Analytics
                </span>
                <h1 className="text-4xl md:text-6xl font-800 tracking-tight leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                  Optimize Decisions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">Decision Science</span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                  Replace guesses with statistics. We deploy predictive demand planning, optimization models, and cluster metrics to build actionable ROI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, hsl(24 95% 36%), hsl(24 95% 42%))', boxShadow: '0 4px 14px hsl(24 95% 36% / 0.3)' }}>
                    Schedule Analytics Consultation <ArrowRight size={16} />
                  </Link>
                  <a href="#stages" className="btn-outline border-slate-800 text-white hover:bg-slate-900">
                    See Analytical Stages
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-slate-900/60 border border-slate-800 p-8 shadow-2xl backdrop-blur-sm">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl opacity-20 blur-md -z-10" />
                  <Illustration title="data science" className="w-full h-full text-orange-500" />
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
                <span className="section-label border-orange-500/20 text-orange-600 dark:text-orange-400 bg-orange-500/6 mb-4">Overview</span>
                <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Describing what happened is only the first step.
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Standard BI dashboards are excellent at displaying historical metrics. However, driving meaningful efficiency gains requires understanding the root causes of metrics and anticipating what lies ahead.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our advanced analytics frameworks extract data from modern warehouses, run mathematical simulations, identify optimal pricing strategies, and flag anomalies to deliver concrete prescriptive outcomes.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Advanced Analytics Metrics</h3>
                <ul className="space-y-4">
                  {[
                    '95%+ forecasting precision (MAPE) on monthly sales',
                    '20%+ reduction in shipping mileage via routing optimization',
                    '40% higher email conversions through RFM customer clusters',
                    'A/B test configurations with strict sample size estimations',
                    'Prescriptive simulation engines built for scenario modeling'
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Four Stages of Analytics */}
        <section id="stages" className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label border-orange-500/20 text-orange-600 dark:text-orange-400 bg-orange-500/6 mb-4">Analytical Maturity</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Four Levels of Analytical Maturity
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analyticalStages.map((s, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Level 0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-4">{s.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label border-orange-500/20 text-orange-600 dark:text-orange-400 bg-orange-500/6 mb-4">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Analytical Competencies
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((c, i) => (
                <div key={i} className="card-premium p-8 group flex flex-col h-full bg-white dark:bg-slate-900">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    <c.icon size={24} />
                  </div>
                  <h3 className="text-lg font-700 text-slate-900 dark:text-white mb-3">{c.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Challenges Solved */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="section-label border-orange-500/20 text-orange-600 dark:text-orange-400 bg-orange-500/6 mb-4">Case Studies</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Overcoming Business Bottlenecks
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {challenges.map((c, i) => (
                <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">Pain Point</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">{c.pain}</h3>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 my-4" />
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">Engineered Solution</span>
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
              <span className="section-label border-orange-500/20 text-orange-600 dark:text-orange-400 bg-orange-500/6 mb-4">Analytical Stack</span>
              <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Tools & Frameworks We Employ
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['Python', 'R', 'SQL', 'Power BI', 'Tableau', 'Looker', 'Statsmodels', 'SciPy', 'PuLP', 'Gurobi', 'Excel', 'Jupyter'].map((tech, i) => (
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
                <span className="section-label border-orange-500/20 text-orange-600 dark:text-orange-400 bg-orange-500/6 mb-4">FAQ</span>
                <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Analytics Inquiries
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm">
                  Frequently asked questions about statistical modeling and decision tools.
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
            <div className="rounded-3xl bg-gradient-to-r from-orange-900 to-amber-950 p-12 md:p-16 text-center relative overflow-hidden shadow-2xl border border-orange-500/10">
              <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-orange-500/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Unlock Predictive Value
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
                  Ready to upgrade your dashboards with custom statistical forecasts and resource optimization solvers? Connect with us.
                </p>
                <Link to="/contact" className="btn-white text-orange-900">
                  Request Analytics Strategy <ArrowRight size={16} />
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

export default AdvancedAnalyticsPage;
