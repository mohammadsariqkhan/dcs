import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot, Cpu, Workflow, Zap, Database, Shield, ArrowRight, CheckCircle2,
  Plus, Minus, RefreshCw, MessageSquare, Terminal, Settings2, HelpCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Illustration from '@/components/Illustration';
import TechBadge from '@/components/TechBadge';
import { Link } from 'react-router-dom';

const AgenticAIPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const capabilities = [
    { icon: Bot, title: 'Autonomous AI Agents', desc: 'Deploy single-agent systems that autonomously parse goals, break down sub-tasks, execute code, and reflect on intermediate outputs to achieve complex objectives.' },
    { icon: Workflow, title: 'Multi-Agent Orchestration', desc: 'Design systems where specialized agents (e.g., researcher, writer, editor) collaborate sequentially or in parallel, coordinating via LangGraph.' },
    { icon: Terminal, title: 'Secure Tool Calling & API Actions', desc: 'Securely hook agents into internal databases, email servers, CRM systems, and code compilers with strict validation sandboxes.' },
    { icon: Database, title: 'Cognitive RAG Pipelines', desc: 'Build Retrieval-Augmented Generation architectures using vector search engines to feed context-rich private knowledge to agents.' },
    { icon: Settings2, title: 'Human-in-the-Loop Safeguards', desc: 'Configure safety gates where agents halt execution to request human approval before executing destructive actions (e.g. database updates, large financial transfers).' },
    { icon: RefreshCw, title: 'Enterprise Workflow Automation', desc: 'Replace slow manual operations (like customer support tickets and invoice audits) with loops that run in seconds.' }
  ];

  const challenges = [
    { pain: 'Unreliable LLM Hallucinations', solution: 'We build strict guardrails using validation loops, structured output parsers (Pydantic), and double-check execution steps, reducing hallucinations to near zero.' },
    { pain: 'Brittle, Fixed Code Automation', solution: 'Our agentic systems dynamically construct their execution paths depending on the prompt and system state, handling edge cases that static scripts miss.' },
    { pain: 'Security Risks with Code Execution', solution: 'We deploy agent tools inside containerized, isolated sandboxes, ensuring that database updates or script runs can never compromise core servers.' }
  ];

  const agentSteps = [
    { num: '01', action: 'Parse & Plan', desc: 'The orchestrator agent receives a query, splits it into sub-goals, and initializes the local state storage.' },
    { num: '02', action: 'Tool Selection', desc: 'The agent selects appropriate tools (SQL query, Web Search, PDF parser) depending on the sub-goal.' },
    { num: '03', action: 'Reflect & Verify', desc: 'The agent reads the tool output, checks if the answer answers the prompt, and retries if data is missing.' },
    { num: '04', action: 'Synthesize & Respond', desc: 'The agent formats the final result into structured tables or paragraphs, saving the session history.' }
  ];

  const faqs = [
    { q: 'What is the difference between a standard Chatbot and an AI Agent?', a: 'A standard chatbot is reactive (responding only to direct prompts in a single turn). An AI agent is proactive and autonomous: it can loop, make tool calls, consult vector memory, and choose multiple sequential actions without human intervention to achieve a high-level goal.' },
    { q: 'What is the Model Context Protocol (MCP)?', a: 'MCP is an open standard that allows LLMs and agents to interact with host data sources, file systems, and tools securely through a standardized API contract, streamlining enterprise integrations.' },
    { q: 'How do you ensure agentic systems do not run forever or incur massive token bills?', a: 'We configure strict execution limits (max loops, timeout limits) and implement budget limits at the API gateway layer, automatically terminating loops that exceed limits.' }
  ];

  return (
    <>
      <Helmet>
        <title>Agentic AI & Autonomous Systems – DataCloud Solutions</title>
        <meta name="description" content="Deploy collaborative multi-agent systems, secure tool-calling frameworks, and cognitive RAG pipelines. Built with LangGraph, LangChain, and OpenAI." />
      </Helmet>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-24 relative bg-slate-950 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-6">
                  <Bot size={14} /> Agentic AI
                </span>
                <h1 className="text-4xl md:text-6xl font-800 tracking-tight leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>
                  Automate Complex Workflows with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">Autonomous Agents</span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                  Deploy multi-agent networks, cognitive search indexes, and sandboxed tool-calling systems that act autonomously to execute business processes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, hsl(270 85% 42%), hsl(270 85% 48%))', boxShadow: '0 4px 14px hsl(270 85% 42% / 0.3)' }}>
                    Develop AI Agents <ArrowRight size={16} />
                  </Link>
                  <a href="#workflow" className="btn-outline border-slate-800 text-white hover:bg-slate-900">
                    See Agent Loop
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-slate-900/60 border border-slate-800 p-8 shadow-2xl backdrop-blur-sm">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-3xl opacity-20 blur-md -z-10" />
                  <Illustration title="agentic ai" className="w-full h-full text-purple-500" />
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
                <span className="section-label border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-500/6 mb-4">Overview</span>
                <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Shifting from simple chatbots to cognitive actors
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  While traditional LLM applications are limited to single-turn chats, Agentic AI introduces persistent memory, tool access, and multi-step reasoning, enabling software to complete workflows autonomously.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We build multi-agent networks where individual AI agents are assigned distinct roles, collaborate via state managers like LangGraph, verify outputs with validation models, and request human feedback before critical steps.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-purple-600 dark:text-purple-400 mb-1">92%</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Task Completion Rate</p>
                  <p className="text-xs text-slate-500 mt-1">Achieved on complex customer support runs.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-fuchsia-600 dark:text-fuchsia-400 mb-1">10x</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Process Acceleration</p>
                  <p className="text-xs text-slate-500 mt-1">Replaces manual checks with automated agent steps.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-pink-600 dark:text-pink-400 mb-1">Zero</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Prompt Engineering Needed</p>
                  <p className="text-xs text-slate-500 mt-1">For operators using structured tool interfaces.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <h3 className="text-4xl font-800 text-emerald-600 dark:text-emerald-400 mb-1">100%</h3>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sandboxed Tools</p>
                  <p className="text-xs text-slate-500 mt-1">Guaranteeing zero execution risk to host infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agent workflow */}
        <section id="workflow" className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-label border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-500/6 mb-4">Execution Loop</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                How an AI Agent Executes Tasks
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {agentSteps.map((s, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative flex flex-col justify-between h-full">
                  <div>
                    <span className="text-4xl font-900 text-purple-500/20 block mb-6">{s.num}</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{s.action}</h3>
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
              <span className="section-label border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-500/6 mb-4">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Agentic Competencies
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((c, i) => (
                <div key={i} className="card-premium p-8 group flex flex-col h-full bg-white dark:bg-slate-900">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
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
              <span className="section-label border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-500/6 mb-4">Safeguards</span>
              <h2 className="text-3xl md:text-4xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Solving Agent Risks & Inaccuracies
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {challenges.map((c, i) => (
                <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">Risk</span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">{c.pain}</h3>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 my-4" />
                    <span className="text-xs font-bold text-purple-500 uppercase tracking-widest block mb-2">Engineered Solution</span>
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
              <span className="section-label border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-500/6 mb-4">Framework Stack</span>
              <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Agent Frameworks & Vector DBs
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['LangGraph', 'LangChain', 'OpenAI', 'MCP', 'Pinecone', 'Weaviate', 'ChromaDB', 'CrewAI', 'AutoGen', 'FastAPI', 'GraphQL', 'LlamaIndex'].map((tech, i) => (
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
                <span className="section-label border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-500/6 mb-4">FAQ</span>
                <h2 className="text-3xl font-800 text-slate-900 dark:text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Agent Inquiries
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm">
                  Find answers to agent scaling, safety rules, and token billing here.
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
            <div className="rounded-3xl bg-gradient-to-r from-purple-900 to-fuchsia-950 p-12 md:p-16 text-center relative overflow-hidden shadow-2xl border border-purple-500/10">
              <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Deploy Intelligent AI Agents
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
                  Ready to automate multi-agent workflows, connect cognitive tools, and scale RAG models? Reach out today.
                </p>
                <Link to="/contact" className="btn-white text-purple-900">
                  Request Agent Consultation <ArrowRight size={16} />
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

export default AgenticAIPage;
