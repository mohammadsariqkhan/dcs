import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, GitBranch, HardDrive, Server, Workflow, Radio, Cog, Shield,
  ArrowRight, CheckCircle2, Plus, Minus, Layers, AlertCircle, RefreshCw
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Illustration from '@/components/Illustration';
import TechBadge from '@/components/TechBadge';
import { Link } from 'react-router-dom';

const DataEngineeringPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const capabilities = [
    { icon: Workflow, title: 'ETL/ELT Pipelines', desc: 'Design, write, and optimize modular pipelines that extract, transform, and load massive scale datasets with high reliability.' },
    { icon: Layers, title: 'Lakehouse Architectures', desc: 'Merge the reliability and transactional support of data warehouses with the cost-efficiency of massive object store data lakes.' },
    { icon: Server, title: 'Modern Data Warehouses', desc: 'Build cloud-optimized relational analytical systems designed for rapid sub-second dashboard queries.' },
    { icon: Radio, title: 'Real-time Streaming', desc: 'Deploy low-latency event processing architectures with Apache Kafka for real-time customer event streaming and anomaly detection.' },
    { icon: Shield, title: 'Data Quality & Governance', desc: 'Automate row-level check constraints, data sanitization, schema validation rules, and columns metadata lineage tracing.' },
    { icon: RefreshCw, title: 'Batch Processing', desc: 'Optimize Apache Spark cluster profiles, reduce Shuffle overheads, and coordinate large batch runs via Airflow.' }
  ];

  const challenges = [
    { pain: 'Unreliable Data Ingest & Retries', solution: 'We implement idempotent data pipeline designs with automatic exponential backoff retry loops, ensuring data is never duplicated or lost during API drops.' },
    { pain: 'Slow, Costly Analytics Queries', solution: 'We rebuild query indexes, partition partitioning keys, optimize Delta cluster file sizes, and configure query caching to slash computing bills by up to 60%.' },
    { pain: 'Data Quality & Column Silent Drops', solution: 'We integrate automated schema testing using tools like dbt and Great Expectations, raising Instant PagerDuty alerts if anomalies violate rules.' }
  ];

  const pipelineStages = [
    { stage: 'Ingest', desc: 'Source files, live Webhook streams, database replicas, and third-party APIs ingest continuously into landing object storage.', color: 'border-blue-500 text-blue-500 bg-blue-500/10' },
    { stage: 'Process', desc: 'Apache Spark cleans columns, runs join operations, converts data types, and validates schemas against catalog contracts.', color: 'border-teal-500 text-teal-500 bg-teal-500/10' },
    { stage: 'Store', desc: 'Data is written to Delta Lake formats or loaded into highly structured schemas in cloud warehouses.', color: 'border-indigo-500 text-indigo-500 bg-indigo-500/10' },
    { stage: 'Serve', desc: 'Sub-second analytic views, aggregated summary tables, and semantic layers feed directly into dashboards and machine learning APIs.', color: 'border-purple-500 text-purple-500 bg-purple-500/10' }
  ];

  const faqs = [
    { q: 'What is the advantage of a Data Lakehouse over a standard Data Lake?', a: 'A Lakehouse provides ACID transaction support, schema enforcement, and version travel (Time Travel queries) on top of cheap cloud object storage, meaning you get the speed of SQL warehouses alongside storage price savings.' },
    { q: 'How do you handle schema changes (schema evolution) in pipelines?', a: 'We utilize Delta Lake and schema auto-merge capabilities, combined with dbt test scripts, to catch column name changes or type changes at ingestion, notifying data engineers immediately without breaking the database.' },
    { q: 'What tools do you use for scheduling and orchestration?', a: 'Our primary orchestrators are Apache Airflow, Prefect, and Databricks Workflows, which allow us to define pipelines as code (DAGs) and monitor pipeline state visually.' }
  ];

  return (
    <>
      <Helmet>
        <title>Data Engineering Services – DataCloud Solutions</title>
        <meta name="description" content="Build reliable, scalable cloud data infrastructure. Specialists in ETL/ELT, Lakehouses, Databricks, Snowflake, and streaming architectures." />
      </Helmet>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-24 relative bg-slate-950 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-400 text-xs font-semibold tracking-wider uppercase mb-6">
                  <Database size={14} /> Data Engineering
                </span>
                <h1 className="text-4xl md:text-6xl font-800 tracking-tight leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                  Construct Scalable & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400">Resilient Data Pipelines</span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                  Eliminate down-time, query timeouts, and schema drops. We build fault-tolerant data infrastructure that powers high-fidelity analytics and machine learning.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, hsl(171 90% 36%), hsl(171 90% 42%))', boxShadow: '0 4px 14px hsl(171 90% 36% / 0.3)' }}>
                    Build Data Infrastructure <ArrowRight size={16} />
                  </Link>
                  <a href="#pipeline" className="btn-outline border-slate-800 text-white hover:bg-slate-900">
                    See Architecture Stages
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-slate-900/60 border border-slate-800 p-8 shadow-2xl backdrop-blur-sm">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl opacity-20 blur-md -z-10" />
                  <Illustration title="data engineering" className="w-full h-full text-teal-500" />
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
                <span className="section-label border-teal-500/20 text-teal-600 dark:text-teal-400 bg-teal-500/6 mb-4">Core Principles</span>
                <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Data is only as valuable as its availability and trustworthiness
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Stale datasets, manual csv transfers, and failing workflows frustrate users and cost companies millions. We replace duct-tape connections with production-grade data automation.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our systems enforce strict unit tests on column types, handle automatic schema evolutionary changes, run partition optimizations, and catalog data lineages so that developers and compliance audits can query logs in seconds.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Standard SLA Guarantees</h3>
                <ul className="space-y-4">
                  {[
                    '99.9% Pipeline Uptime SLA configurations',
                    'Zero Data Loss guarantees using idempotent task runs',
                    'Up to 80% reduction in cluster operational spend',
                    'Time Travel database version logs up to 90 days back',
                    'Fully version-controlled ETL workflows as code'
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline visualization section */}
        <section id="pipeline" className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label border-teal-500/20 text-teal-600 dark:text-teal-400 bg-teal-500/6 mb-4">Workflow Architecture</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Modern End-to-End Data Lifecycle
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {pipelineStages.map((stage, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative flex flex-col justify-between h-full">
                  <div>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold border mb-6 ${stage.color}`}>
                      {stage.stage}
                    </span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                      {stage.desc}
                    </p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      <ArrowRight size={12} className="text-slate-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label border-teal-500/20 text-teal-600 dark:text-teal-400 bg-teal-500/6 mb-4">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Data Infrastructure Engineering
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((c, i) => (
                <div key={i} className="card-premium p-8 group flex flex-col h-full bg-white dark:bg-slate-900">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    <c.icon size={24} />
                  </div>
                  <h3 className="text-lg font-700 text-slate-900 dark:text-white mb-3">{c.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Challenges solved */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="section-label border-teal-500/20 text-teal-600 dark:text-teal-400 bg-teal-500/6 mb-4">Operational Challenges</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Solving Heavy Data Pain Points
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {challenges.map((c, i) => (
                <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">Pain Point</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">{c.pain}</h3>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 my-4" />
                    <span className="text-xs font-bold text-teal-500 uppercase tracking-widest block mb-2">Engineered Solution</span>
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
              <span className="section-label border-teal-500/20 text-teal-600 dark:text-teal-400 bg-teal-500/6 mb-4">Infrastructure Stack</span>
              <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Supported Frameworks & Partners
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['Spark', 'Kafka', 'Airflow', 'Databricks', 'Snowflake', 'Delta Lake', 'AWS Glue', 'Azure Data Factory', 'dbt', 'BigQuery', 'Apache Iceberg', 'Kubernetes'].map((tech, i) => (
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
                <span className="section-label border-teal-500/20 text-teal-600 dark:text-teal-400 bg-teal-500/6 mb-4">FAQ</span>
                <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Engineering Inquiries
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm">
                  Frequently asked questions about database configurations and architecture designs.
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
            <div className="rounded-3xl bg-gradient-to-r from-teal-900 to-emerald-950 p-12 md:p-16 text-center relative overflow-hidden shadow-2xl border border-teal-500/10">
              <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-teal-500/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Build a Robust Cloud Data Foundation
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
                  Ready to optimize cluster costs, automate workflows, and clean database structures? Get in touch today.
                </p>
                <Link to="/contact" className="btn-white text-teal-900">
                  Schedule Architecture Review <ArrowRight size={16} />
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

export default DataEngineeringPage;
