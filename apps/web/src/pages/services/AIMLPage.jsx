import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain, Cpu, Sparkles, Database, Shield, Zap, ArrowRight,
  CheckCircle2, Plus, Minus, MessageSquare, Eye, TrendingUp, HelpCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Illustration from '@/components/Illustration';
import TechBadge from '@/components/TechBadge';
import { Link } from 'react-router-dom';

const AIMLPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const capabilities = [
    { icon: Sparkles, title: 'Predictive Analytics', desc: 'Anticipate market trends, customer behavior, and demand patterns with precision regression and time-series modeling.' },
    { icon: MessageSquare, title: 'Natural Language Processing (NLP)', desc: 'Deploy sentiment analysis, named entity recognition, and contextual search tools to unlock unstructured text data.' },
    { icon: Eye, title: 'Computer Vision', desc: 'Deploy automated visual quality control, object detection, and facial recognition models on Edge and Cloud systems.' },
    { icon: Brain, title: 'Generative AI & LLMs', desc: 'Fine-tune large language models for domain-specific automation, interactive agents, and creative asset generation.' },
    { icon: Cpu, title: 'Recommendation Systems', desc: 'Increase digital conversion rates and average order values via highly personalized user content loops.' },
    { icon: Zap, title: 'MLOps & Automation', desc: 'Continuous integration, model versioning, retraining scripts, drift tracking, and automated Kubernetes deployment pipelines.' }
  ];

  const challenges = [
    { pain: 'Unpredictable Customer Churn', solution: 'We deploy custom classification models that identify early indicators of churn, enabling marketing teams to intervene with targeted loyalty campaigns.' },
    { pain: 'Manual Document Classification', solution: 'Our OCR and NLP engines automatically read, classify, and extract key variables from invoices and contracts with 99% accuracy.' },
    { pain: 'Inconsistent Quality Inspection', solution: 'Our Edge computer vision models run real-time visual inspection on conveyor belts, flagging defects in milliseconds.' }
  ];

  const workflow = [
    { phase: '01', title: 'Data Audit & Feasibility Study', desc: 'We assess the quality, structure, and volume of your historical data to construct a clear ROI model.' },
    { phase: '02', title: 'Feature Engineering & Training', desc: 'We prepare baseline architectures, clean features, and train multiple ensemble and neural architectures.' },
    { phase: '03', title: 'Model Evaluation & Tuning', desc: 'Rigorous testing against holdout validation sets, optimizing for recall, precision, and low-latency inference.' },
    { phase: '04', title: 'MLOps Pipeline Deployment', desc: 'Automated CI/CD deployment with drift tracking, alerting, and containerized serving frameworks.' }
  ];

  const faqs = [
    { q: 'What data volume is required for custom machine learning models?', a: 'While deep learning architectures typically require millions of records, ensemble models and transfer learning can be trained with smaller datasets (starting at a few thousand clean entries).' },
    { q: 'How do you prevent model drift over time?', a: 'We build automated drift detection loops within our MLOps frameworks. If validation accuracy falls below a set threshold relative to production data, retraining triggers automatically.' },
    { q: 'Can these AI models run on our local private cloud?', a: 'Yes. We support hybrid cloud and on-premise deployments using containerized environments like Docker, Kubernetes, and specialized edge device runtimes.' }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>AI & Machine Learning Services – DataCloud Solutions</title>
        <meta name="description" content="Unlock enterprise intelligence with custom machine learning models, generative AI, NLP, computer vision, and MLOps deployment." />
      </Helmet>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-24 relative bg-slate-950 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-6">
                  <Brain size={14} /> AI & Machine Learning
                </span>
                <h1 className="text-4xl md:text-6xl font-800 tracking-tight leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                  Empower Your Enterprise With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Predictive Intelligence</span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                  We build custom neural networks, generative AI applications, and robust MLOps pipelines that translate complex business data into concrete competitive advantages.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">
                    Start AI Project <ArrowRight size={16} />
                  </Link>
                  <a href="#overview" className="btn-outline border-slate-800 text-white hover:bg-slate-900">
                    Explore Capabilities
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-slate-900/60 border border-slate-800 p-8 shadow-2xl backdrop-blur-sm">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-md -z-10" />
                  <Illustration title="artificial intelligence" className="w-full h-full text-indigo-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-24 bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-label mb-4">Overview</span>
                <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Translating Algorithmic Innovation into Concrete Business Value
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Modern organizations suffer not from a lack of data, but from a bottleneck in parsing and synthesizing it. Our AI & Machine Learning solutions bypass traditional hurdles by automating analytics and bringing predictive foresight to decision makers.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  From initial proof-of-concept modeling to scaling distributed microservices across millions of daily active users, our engineering team ensures your mathematical models remain accurate, secure, and performant.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-indigo-600 dark:text-indigo-400 mb-2">99.2%</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Extraction Accuracy</p>
                  <p className="text-xs text-slate-500 mt-1">Achieved on unstructured enterprise documents using fine-tuned NLP.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-blue-600 dark:text-blue-400 mb-2">10x</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Retraining Frequency</p>
                  <p className="text-xs text-slate-500 mt-1">Boosted deployment cycles via our custom end-to-end MLOps template.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-emerald-600 dark:text-emerald-400 mb-2">35%</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Inventory Savings</p>
                  <p className="text-xs text-slate-500 mt-1">Attained by client retail units through smart predictive demand metrics.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-purple-600 dark:text-purple-400 mb-2">&lt;50ms</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Inference Latency</p>
                  <p className="text-xs text-slate-500 mt-1">Engineered on edge platforms for real-time video defect flagging.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label mb-4">Key Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Comprehensive AI Capabilities
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm md:text-base">
                We possess deep expertise across mathematical modeling, transformer architectures, and deep neural networks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((c, i) => (
                <div key={i} className="card-premium p-8 group flex flex-col h-full bg-white dark:bg-slate-900">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    <c.icon size={24} />
                  </div>
                  <h3 className="text-lg font-700 text-slate-900 dark:text-white mb-3">{c.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Solved */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="section-label mb-4">Business Case</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Real Challenges. Solved.
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {challenges.map((c, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">Challenge</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">{c.pain}</h3>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 my-4" />
                    <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block mb-2">Solution</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies & Tools */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="section-label mb-4">Toolchain</span>
              <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Technologies & Tools We Trust
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Hugging Face', 'OpenAI APIs', 'Docker', 'Kubernetes', 'FastAPI', 'Ray', 'Jupyter'].map((tech, i) => (
                <TechBadge key={i} name={tech} variant="pill" />
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label mb-4">Lifecycle</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Delivery Process
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflow.map((w, i) => (
                <div key={i} className="relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <div className="text-3xl font-900 text-indigo-500/30 mb-4">{w.phase}</div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{w.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/30 relative">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-label mb-4">Why Partner with Us</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Enterprise Rigor, Scientific Excellence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Math-First Strategy</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    We select algorithm models based on strict validation performance, not buzzwords. If a simple heuristic solves the problem, we recommend that first.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Zero Lock-in Models</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    You own 100% of the custom architectures and weights. Your IP stays entirely within your repository and cloud ecosystem.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">End-to-End MLOps</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    We do not build raw notebooks that collect dust. We deliver auto-scaling APIs, retraining logic, and drift monitoring dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="section-label mb-4">FAQ</span>
                <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Common Inquiries
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm">
                  Got technical questions? Let us answer them right here.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(i)}
                      className="w-full flex items-center justify-between p-5 text-left bg-slate-50 dark:bg-slate-900 hover:bg-slate-100/50 dark:hover:bg-slate-800/80 transition-colors"
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-950 p-12 md:p-16 text-center relative overflow-hidden shadow-2xl border border-indigo-500/10">
              <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Ready to Deploy Custom AI Models?
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
                  Discuss model architecture, deployment latency, and ROI options with our machine learning engineers.
                </p>
                <Link to="/contact" className="btn-white text-indigo-900">
                  Schedule Consultation <ArrowRight size={16} />
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

export default AIMLPage;
