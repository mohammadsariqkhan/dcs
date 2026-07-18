import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud, Server, Settings, Zap, Shield, ArrowRight, CheckCircle2,
  Plus, Minus, Globe, Lock, Cpu, CloudLightning, HelpCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Illustration from '@/components/Illustration';
import TechBadge from '@/components/TechBadge';
import { Link } from 'react-router-dom';

const CloudSolutionsPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const capabilities = [
    { icon: Globe, title: 'Cloud Migration & Hybrid Cloud', desc: 'Securely transfer legacy monolithic database engines and files onto public cloud nodes with minimal service downtime.' },
    { icon: Server, title: 'Cloud Architecture Advisory', desc: 'Design high-availability cloud topologies complete with automated load balancing, VPC networks, and multi-region database replication.' },
    { icon: Settings, title: 'Infrastructure as Code (IaC)', desc: 'Define your complete networking, VM, and database environments in Terraform, enabling repeatable single-click environment provisioning.' },
    { icon: Zap, title: 'DevOps & CI/CD Pipelines', desc: 'Automate static code testing, Docker image building, artifact registering, and Blue-Green Kubernetes rollouts.' },
    { icon: Cpu, title: 'Kubernetes & Serverless Orchestration', desc: 'Configure cluster autoscaling, microservice boundaries, service meshes, and autoscaling serverless functions.' },
    { icon: Lock, title: 'Security, Monitoring & Compliance', desc: 'Audit cloud policies, isolate network subnets, and configure unified monitoring dashboards using Prometheus and Datadog.' }
  ];

  const challenges = [
    { pain: 'Exploding Monthly Cloud Bills', solution: 'We perform cloud cost sanitation audits, implement spot instance clusters, delete orphan volumes, and set up auto-shutdown timers to slash compute costs.' },
    { pain: 'Brittle Deployments & Downtimes', solution: 'We rewrite deployment tasks using Docker, Github Actions, and Kubernetes, implementing zero-downtime rolling updates.' },
    { pain: 'Strict Compliance & Security Audits', solution: 'We configure IAM credentials, encryptions at rest and in transit, and isolate databases in private subnets, ensuring SOC2 compliance.' }
  ];

  const devopsLoop = [
    { phase: 'Code & Test', desc: 'Developer commits code; static analyzers and lint checkers trigger automatically via GitHub Actions.' },
    { phase: 'Build & Package', desc: 'The application compiles into lightweight container images registered inside secure container repositories.' },
    { phase: 'Deploy & Verify', desc: 'Kubernetes rolls out the container using rolling strategy, checking health check endpoints before shifting traffic.' },
    { phase: 'Monitor & Alert', desc: 'Prometheus collects metrics, notifying engineers via PagerDuty in case of spikes in error codes or RAM usage.' }
  ];

  const faqs = [
    { q: 'How do you prevent vendor lock-in when building cloud applications?', a: 'We construct containerized apps using Docker and orchestration systems like Kubernetes. Combined with provider-agnostic Infrastructure as Code (Terraform), your systems can move between AWS, Azure, and GCP with minimal code changes.' },
    { q: 'What is your approach to cost optimization?', a: 'We start by tracking down resource waste: over-provisioned VMs, unattached block storages, and idle databases. Next, we transition suitable workloads to serverless structures (AWS Lambda / Cloud Run) and scale-down clusters outside business hours.' },
    { q: 'Do you assist with existing SOC2 and ISO compliance certifications?', a: 'Yes. We build infrastructure that conforms to strict security regulations, implementing IAM controls, encrypted storage partitions, log streams, and vulnerability scans.' }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Solutions & DevOps Services – DataCloud Solutions</title>
        <meta name="description" content="Accelerate cloud adoption with AWS, Azure, and GCP. Kubernetes orchestration, DevOps CI/CD pipelines, and cost optimization audits." />
      </Helmet>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-24 relative bg-slate-950 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
                  <Cloud size={14} /> Cloud Solutions
                </span>
                <h1 className="text-4xl md:text-6xl font-800 tracking-tight leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                  Build High-Availability <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400">Cloud Infrastructure</span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                  Automate deployments, secure microservices, and optimize compute budgets with our certified cloud architects and DevOps experts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, hsl(200 90% 36%), hsl(200 90% 42%))', boxShadow: '0 4px 14px hsl(200 90% 36% / 0.3)' }}>
                    Schedule Cloud Audit <ArrowRight size={16} />
                  </Link>
                  <a href="#devops" className="btn-outline border-slate-800 text-white hover:bg-slate-900">
                    Explore CI/CD Loop
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-slate-900/60 border border-slate-800 p-8 shadow-2xl backdrop-blur-sm">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-sky-500 rounded-3xl opacity-20 blur-md -z-10" />
                  <Illustration title="cloud solutions" className="w-full h-full text-blue-500" />
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
                <span className="section-label border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-500/6 mb-4">Overview</span>
                <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Fast deployments, zero downtime, and solid resource utilization
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Managing modern web applications requires cloud topologies that automatically scale up under spikes and scale back down to conserve budget. We build these self-healing topologies.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  By standardizing infrastructure configuration inside Git repositories (GitOps), we enable your teams to audit cloud changes, roll back failures instantly, and establish isolated staging servers in under five minutes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-blue-600 dark:text-blue-400 mb-1">99.99%</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Uptime SLA</p>
                  <p className="text-xs text-slate-500 mt-1">Delivered via multi-region failover network clusters.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-sky-600 dark:text-sky-400 mb-1">45%</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Average Cost Reduction</p>
                  <p className="text-xs text-slate-500 mt-1">Slashed from monthly computing bills post cost-audit.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-cyan-600 dark:text-cyan-400 mb-1">10 min</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Environment Spin-up</p>
                  <p className="text-xs text-slate-500 mt-1">Deploy new VPCs and databases automatically using Terraform.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-emerald-600 dark:text-emerald-400 mb-1">Zero</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Downtime Deployments</p>
                  <p className="text-xs text-slate-500 mt-1">Ensured using automated rolling update deployment tasks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DevOps Loop */}
        <section id="devops" className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-500/6 mb-4">Automation Flow</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Automated DevOps Pipeline
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {devopsLoop.map((l, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{l.phase}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-500/6 mb-4">Key Offerings</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Cloud & Platform Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((c, i) => (
                <div key={i} className="card-premium p-8 group flex flex-col h-full bg-white dark:bg-slate-900">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    <c.icon size={24} />
                  </div>
                  <h3 className="text-lg font-700 text-slate-900 dark:text-white mb-3">{c.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational challenges solved */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="section-label border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-500/6 mb-4">Troubleshooting</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Resolving Complex Cloud Issues
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {challenges.map((c, i) => (
                <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">Issue</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">{c.pain}</h3>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 my-4" />
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2">Engineered Solution</span>
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
              <span className="section-label border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-500/6 mb-4">Partner Matrix</span>
              <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Supported Platforms & Frameworks
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'Datadog', 'Ansible'].map((tech, i) => (
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
                <span className="section-label border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-500/6 mb-4">FAQ</span>
                <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Cloud Inquiries
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm">
                  Find answers to network routing and server configurations here.
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
            <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-sky-950 p-12 md:p-16 text-center relative overflow-hidden shadow-2xl border border-blue-500/10">
              <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Modernize Your Deployments
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
                  Ready to deploy high-availability clusters and automate infrastructure configurations? Contact us.
                </p>
                <Link to="/contact" className="btn-white text-blue-900">
                  Request DevOps Consultation <ArrowRight size={16} />
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

export default CloudSolutionsPage;
