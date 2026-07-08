import React from 'react';

const Illustration = ({ title, className = '', color }) => {
  const normTitle = (title || '').toLowerCase().trim();

  // Color values
  const primaryColor = color || '#0369a1'; // Sky-blue / Navy-blue accent
  const secondaryColor = '#06b6d4'; // Cyan accent
  const lightColor = '#e0f2fe'; // Light sky background elements
  const strokeWidth = 1.5;

  // Render SVG based on card title mapping
  if (normTitle.includes('artificial intelligence') || normTitle.includes('generative ai') || normTitle.includes('nlp') || normTitle.includes('computer vision')) {
    // Artificial Intelligence -> AI Brain, Neural Network, Nodes
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
          <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={secondaryColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow background */}
        <circle cx="100" cy="60" r="45" fill="url(#ai-glow)" />

        {/* Brain Silhouette Grid */}
        <path d="M100 25 C75 25, 60 40, 60 55 C60 62, 65 68, 70 72 C68 76, 68 82, 74 88 C80 94, 90 95, 100 95 C110 95, 120 94, 126 88 C132 82, 132 76, 130 72 C135 68, 140 62, 140 55 C140 40, 125 25, 100 25 Z"
          stroke={lightColor} strokeWidth="1" strokeDasharray="3 3" />

        {/* Neural Network Nodes & Connections */}
        <line x1="100" y1="35" x2="80" y2="50" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="100" y1="35" x2="120" y2="50" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="80" y1="50" x2="70" y2="70" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="120" y1="50" x2="130" y2="70" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="70" y1="70" x2="90" y2="85" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="130" y1="70" x2="110" y2="85" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="90" y1="85" x2="100" y2="95" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="110" y1="85" x2="100" y2="95" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />

        {/* Inner brain details */}
        <line x1="100" y1="35" x2="100" y2="60" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="80" y1="50" x2="100" y2="60" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="120" y1="50" x2="100" y2="60" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="70" y1="70" x2="100" y2="60" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="130" y1="70" x2="100" y2="60" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="90" y1="85" x2="100" y2="60" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />
        <line x1="110" y1="85" x2="100" y2="60" stroke="url(#ai-grad)" strokeWidth={strokeWidth} />

        {/* Synapses/Dots */}
        <circle cx="100" cy="35" r="4.5" fill={primaryColor} stroke="#fff" strokeWidth="1.5" />
        <circle cx="80" cy="50" r="4.5" fill={primaryColor} stroke="#fff" strokeWidth="1.5" />
        <circle cx="120" cy="50" r="4.5" fill={primaryColor} stroke="#fff" strokeWidth="1.5" />
        <circle cx="70" cy="70" r="4.5" fill={primaryColor} stroke="#fff" strokeWidth="1.5" />
        <circle cx="130" cy="70" r="4.5" fill={primaryColor} stroke="#fff" strokeWidth="1.5" />
        <circle cx="90" cy="85" r="4.5" fill={primaryColor} stroke="#fff" strokeWidth="1.5" />
        <circle cx="110" cy="85" r="4.5" fill={primaryColor} stroke="#fff" strokeWidth="1.5" />
        <circle cx="100" cy="95" r="4.5" fill={primaryColor} stroke="#fff" strokeWidth="1.5" />
        <circle cx="100" cy="60" r="6" fill="url(#ai-grad)" stroke="#fff" strokeWidth="2" />
      </svg>
    );
  }

  if (normTitle.includes('machine learning') || normTitle.includes('recommendation systems') || normTitle.includes('predictive')) {
    // Machine Learning -> Algorithms, Decision Trees, Data Model
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ml-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>
        {/* Isometric Grid Background */}
        <path d="M40 80 L100 40 L160 80 L100 120 Z" stroke={lightColor} strokeWidth="1" strokeDasharray="2 2" />
        <path d="M40 60 L100 20 L160 60 L100 100 Z" stroke={lightColor} strokeWidth="1" strokeDasharray="2 2" />

        {/* Tree Nodes / Connected Blocks */}
        <g transform="translate(0, 5)">
          {/* Main parent node */}
          <rect x="85" y="15" width="30" height="20" rx="4" fill="url(#ml-grad)" />
          <text x="100" y="29" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">ML</text>

          {/* Branch Lines */}
          <path d="M100 35 L65 60 M100 35 L135 60" stroke={primaryColor} strokeWidth={strokeWidth} />
          <path d="M65 80 L45 100 M65 80 L85 100" stroke={primaryColor} strokeWidth={strokeWidth} strokeDasharray="3 3" />

          {/* Child nodes */}
          <rect x="50" y="60" width="30" height="20" rx="4" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />
          <circle cx="65" cy="70" r="4" fill={secondaryColor} />

          <rect x="120" y="60" width="30" height="20" rx="4" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M130 70 L140 70" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />

          {/* Leaf nodes */}
          <circle cx="45" cy="100" r="5" fill="url(#ml-grad)" />
          <circle cx="85" cy="100" r="5" fill={secondaryColor} />
          <circle cx="135" cy="100" r="5" fill="url(#ml-grad)" />
        </g>
      </svg>
    );
  }

  if (normTitle.includes('data engineering') || normTitle.includes('pipeline') || normTitle.includes('lake') || normTitle.includes('warehouse') || normTitle.includes('spark') || normTitle.includes('kafka') || normTitle.includes('databricks') || normTitle.includes('etl')) {
    // Data Engineering -> Databases, pipelines, ETL flow
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="de-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Database Cylinders */}
        {/* DB 1 (Left) */}
        <g transform="translate(35, 30)">
          <path d="M0 10 A15 5 0 0 0 30 10 A15 5 0 0 0 0 10 Z" fill={lightColor} stroke={primaryColor} strokeWidth="1.5" />
          <path d="M0 10 L0 30 A15 5 0 0 0 30 30 L30 10" fill={lightColor} stroke={primaryColor} strokeWidth="1.5" />
          <path d="M0 20 A15 5 0 0 0 30 20" stroke={primaryColor} strokeWidth="1" />
          <path d="M0 30 L0 50 A15 5 0 0 0 30 50 L30 30" fill={lightColor} stroke={primaryColor} strokeWidth="1.5" />
          <path d="M0 40 A15 5 0 0 0 30 40" stroke={primaryColor} strokeWidth="1" />
        </g>

        {/* DB 2 (Right - Modern Data Cloud) */}
        <g transform="translate(135, 30)">
          <path d="M0 10 A15 5 0 0 0 30 10 A15 5 0 0 0 0 10 Z" fill="url(#de-grad)" stroke="#fff" strokeWidth="1.5" />
          <path d="M0 10 L0 30 A15 5 0 0 0 30 30 L30 10" fill="url(#de-grad)" stroke="#fff" strokeWidth="1.5" />
          <path d="M0 20 A15 5 0 0 0 30 20" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M0 30 L0 50 A15 5 0 0 0 30 50 L30 30" fill="url(#de-grad)" stroke="#fff" strokeWidth="1.5" />
          <path d="M0 40 A15 5 0 0 0 30 40" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
        </g>

        {/* Pipeline / Flowing Arrows */}
        <path d="M72 45 L128 45" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M72 65 L128 65" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />

        {/* Processing Node in Middle */}
        <rect x="90" y="35" width="20" height="40" rx="3" fill="#fff" stroke={secondaryColor} strokeWidth="2" />
        <circle cx="100" cy="47" r="3" fill={primaryColor} />
        <circle cx="100" cy="63" r="3" fill={secondaryColor} />

        {/* Animated-like data particles */}
        <circle cx="82" cy="45" r="2.5" fill={secondaryColor} />
        <circle cx="118" cy="45" r="2.5" fill={primaryColor} />
      </svg>
    );
  }

  if (normTitle.includes('cloud engineering') || normTitle.includes('cloud solutions') || normTitle.includes('aws') || normTitle.includes('azure') || normTitle.includes('gcp') || normTitle.includes('google cloud')) {
    // Cloud Engineering -> Cloud network, servers, infrastructure
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Big Cloud Outline */}
        <path d="M100 25 C82 25, 75 38, 75 48 C65 48, 55 56, 55 67 C55 78, 64 87, 75 87 L125 87 C136 87, 145 78, 145 67 C145 56, 137 48, 127 48 C127 38, 118 25, 100 25 Z"
          fill={lightColor} stroke="url(#cloud-grad)" strokeWidth="2" strokeLinejoin="round" />

        {/* Server Racks inside Cloud */}
        <g transform="translate(78, 50)">
          {/* Server 1 */}
          <rect x="0" y="0" width="44" height="10" rx="2" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />
          <circle cx="6" cy="5" r="1.5" fill={secondaryColor} />
          <line x1="14" y1="5" x2="38" y2="5" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Server 2 */}
          <rect x="0" y="14" width="44" height="10" rx="2" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />
          <circle cx="6" cy="19" r="1.5" fill={secondaryColor} />
          <line x1="14" y1="19" x2="38" y2="19" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Connection wires */}
          <path d="M22 24 L22 30" stroke={secondaryColor} strokeWidth="1.5" />
        </g>
      </svg>
    );
  }

  if (normTitle.includes('data analytics') || normTitle.includes('dashboard') || normTitle.includes('kpi') || normTitle.includes('self-service') || normTitle.includes('prescriptive')) {
    // Data Analytics -> Charts, dashboards, stats
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="da-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Dashboard Grid Frame */}
        <rect x="45" y="25" width="110" height="70" rx="6" fill="#fff" stroke={primaryColor} strokeWidth="2" />
        <line x1="45" y1="40" x2="155" y2="40" stroke={primaryColor} strokeWidth="1.5" />

        {/* Dashboard UI components */}
        <circle cx="55" cy="32.5" r="2.5" fill={secondaryColor} />
        <circle cx="63" cy="32.5" r="2.5" fill={primaryColor} />

        {/* Bar Chart inside Dashboard */}
        <rect x="55" y="55" width="12" height="28" rx="2" fill="url(#da-grad)" />
        <rect x="73" y="47" width="12" height="36" rx="2" fill="url(#da-grad)" />
        <rect x="91" y="62" width="12" height="21" rx="2" fill={lightColor} stroke={primaryColor} strokeWidth="1" />

        {/* Line Chart Sparkline */}
        <path d="M112 75 L122 55 L132 65 L144 48" stroke={secondaryColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="144" cy="48" r="3.5" fill={primaryColor} stroke="#fff" strokeWidth="1.5" />
      </svg>
    );
  }

  if (normTitle.includes('business intelligence') || normTitle.includes('bi ') || normTitle.includes('reporting')) {
    // Business Intelligence -> Interactive reports, dashboards
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bi-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* 3D Dashboard representation */}
        <g transform="translate(10, 5)">
          {/* Background report sheet */}
          <rect x="70" y="15" width="70" height="80" rx="4" fill={lightColor} stroke={primaryColor} strokeWidth="1" />
          <line x1="80" y1="28" x2="130" y2="28" stroke={primaryColor} strokeWidth="1" />
          <line x1="80" y1="36" x2="115" y2="36" stroke={primaryColor} strokeWidth="1" />

          {/* Main foreground interactive report */}
          <rect x="50" y="30" width="80" height="70" rx="6" fill="#fff" stroke="url(#bi-grad)" strokeWidth="2" />

          {/* Analytics dial / pie chart representation */}
          <circle cx="78" cy="65" r="16" stroke={lightColor} strokeWidth="6" />
          <path d="M78 49 A16 16 0 0 1 94 65" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" fill="none" />

          {/* Miniature KPIs */}
          <rect x="102" y="48" width="20" height="10" rx="2" fill={secondaryColor} fillOpacity="0.2" />
          <rect x="102" y="62" width="20" height="10" rx="2" fill={primaryColor} fillOpacity="0.2" />
          <rect x="102" y="76" width="20" height="10" rx="2" fill={secondaryColor} />
        </g>
      </svg>
    );
  }

  if (normTitle.includes('data science') || normTitle.includes('statistical') || normTitle.includes('forecasting') || normTitle.includes('mining') || normTitle.includes('customer')) {
    // Data Science -> Predictive models, scatter plots, trend lines
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ds-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* XY Coordinate Axes */}
        <line x1="45" y1="25" x2="45" y2="95" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="45" y1="95" x2="155" y2="95" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />

        {/* Grid lines */}
        <line x1="45" y1="60" x2="155" y2="60" stroke={lightColor} strokeWidth="0.75" strokeDasharray="3 3" />

        {/* Scatter points representing data */}
        <circle cx="60" cy="80" r="3" fill={primaryColor} />
        <circle cx="75" cy="72" r="3" fill={secondaryColor} />
        <circle cx="90" cy="55" r="3" fill={primaryColor} />
        <circle cx="105" cy="65" r="3" fill={secondaryColor} />
        <circle cx="120" cy="42" r="3" fill={primaryColor} />
        <circle cx="135" cy="46" r="3" fill={secondaryColor} />
        <circle cx="150" cy="30" r="3" fill={primaryColor} />

        {/* Curve of Prediction / Best fit */}
        <path d="M45 90 Q 90 70, 120 45 T 155 25" stroke="url(#ds-grad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Prediction Target Area */}
        <circle cx="120" cy="45" r="10" stroke={secondaryColor} strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="120" cy="45" r="2" fill={secondaryColor} />
      </svg>
    );
  }

  if (normTitle.includes('mlops') || normTitle.includes('devops') || normTitle.includes('ci/cd')) {
    // MLOps -> CI/CD Loop for ML, deployment
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mlops-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Infinity loop - CI/CD */}
        <path d="M60 60 C30 30, 15 60, 60 60 C105 60, 90 30, 60 60" stroke={lightColor} strokeWidth="8" strokeLinecap="round" fill="none" transform="translate(40, 0)" />
        <path d="M60 60 C105 60, 120 90, 75 60 C30 30, 45 60, 60 60" stroke={lightColor} strokeWidth="8" strokeLinecap="round" fill="none" transform="translate(65, 0)" />

        <g transform="translate(30, 0)">
          {/* Main flowing infinity stroke */}
          <path d="M50 60 C25 35, 25 85, 70 60 C115 35, 115 85, 140 60 C165 35, 165 85, 120 60 C75 35, 75 85, 50 60 Z"
            stroke="url(#mlops-grad)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />

          {/* Model Deployment Rocket / Node */}
          <circle cx="95" cy="60" r="7" fill={primaryColor} stroke="#fff" strokeWidth="2" />

          {/* Retraining Gears */}
          <g transform="translate(35, 25) scale(0.6)">
            <circle cx="20" cy="20" r="10" stroke={secondaryColor} strokeWidth="3" strokeDasharray="6 3" />
            <circle cx="20" cy="20" r="4" fill={secondaryColor} />
          </g>

          {/* Monitoring Dial */}
          <g transform="translate(125, 25) scale(0.6)">
            <path d="M10 25 A15 15 0 1 1 30 25" stroke={primaryColor} strokeWidth="3" fill="none" />
            <line x1="20" y1="20" x2="25" y2="12" stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    );
  }

  if (normTitle.includes('data governance') || normTitle.includes('compliance') || normTitle.includes('security') || normTitle.includes('risk')) {
    // Data Governance -> Security, compliance, privacy shield
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gov-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Shield Frame */}
        <path d="M100 20 C120 20, 138 25, 138 25 C138 55, 125 85, 100 97 C75 85, 62 55, 62 25 C62 25, 80 20, 100 20 Z"
          fill={lightColor} stroke="url(#gov-grad)" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Inner Shield Design */}
        <path d="M100 28 L100 88" stroke={primaryColor} strokeWidth="1" strokeDasharray="3 3" />
        <path d="M70 50 L130 50" stroke={primaryColor} strokeWidth="1" strokeDasharray="3 3" />

        {/* Database protected in center */}
        <g transform="translate(86, 38) scale(0.9)">
          <path d="M0 8 A15 4 0 0 0 30 8 A15 4 0 0 0 0 8 Z" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M0 8 L0 24 A15 4 0 0 0 30 24 L30 8" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M0 16 A15 4 0 0 0 30 16" stroke={primaryColor} strokeWidth="1" />
        </g>

        {/* Checkmark of compliance */}
        <circle cx="100" cy="74" r="10" fill="#fff" stroke={secondaryColor} strokeWidth="2" />
        <path d="M96 74 L99 77 L105 71" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (normTitle.includes('data migration') || normTitle.includes('transfer') || normTitle.includes('migration')) {
    // Data Migration -> Database/data transfer between systems
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Legacy Database (Left, simple gray-ish or light blue) */}
        <g transform="translate(30, 35) scale(0.9)">
          <path d="M0 8 A15 4 0 0 0 30 8 A15 4 0 0 0 0 8 Z" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M0 8 L0 32 A15 4 0 0 0 30 32 L30 8" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M0 16 A15 4 0 0 0 30 16" stroke={primaryColor} strokeWidth="1.2" />
          <path d="M0 24 A15 4 0 0 0 30 24" stroke={primaryColor} strokeWidth="1.2" />
        </g>

        {/* Modern Cloud Database (Right, glowing gradient) */}
        <g transform="translate(140, 35) scale(0.9)">
          <path d="M0 8 A15 4 0 0 0 30 8 A15 4 0 0 0 0 8 Z" fill="url(#mig-grad)" stroke="#fff" strokeWidth="1.5" />
          <path d="M0 8 L0 32 A15 4 0 0 0 30 32 L30 8" fill="url(#mig-grad)" stroke="#fff" strokeWidth="1.5" />
          <path d="M0 16 A15 4 0 0 0 30 16" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M0 24 A15 4 0 0 0 30 24" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
        </g>

        {/* Transfer curve with arrows */}
        <path d="M65 52 C90 30, 110 30, 132 52" stroke={secondaryColor} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 4" fill="none" />
        <path d="M124 43 L134 52 L124 55" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Secure key/check particle floating */}
        <circle cx="100" cy="38" r="6" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />
        <path d="M98 38 L100 40 L103 36" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // ── INDUSTRIES ILLUSTRATIONS ──

  if (normTitle.includes('banking') || normTitle.includes('finance')) {
    // Banking & Finance -> Bank building, analytics bars, coins
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Grid Floor */}
        <path d="M30 90 L170 90" stroke={lightColor} strokeWidth="1.5" />

        {/* Bank Building */}
        <g transform="translate(45, 25)">
          {/* Roof */}
          <path d="M0 15 L30 0 L60 15 Z" fill="url(#fin-grad)" />
          {/* Base & Pillars */}
          <rect x="5" y="15" width="50" height="5" fill={primaryColor} />
          <rect x="8" y="20" width="6" height="30" rx="1" fill="url(#fin-grad)" />
          <rect x="22" y="20" width="6" height="30" rx="1" fill="url(#fin-grad)" />
          <rect x="36" y="20" width="6" height="30" rx="1" fill="url(#fin-grad)" />
          <rect x="50" y="20" width="6" height="30" rx="1" fill="url(#fin-grad)" />
          <rect x="3" y="50" width="54" height="6" fill={primaryColor} />
        </g>

        {/* Growing Financial Chart overlay */}
        <path d="M110 80 L130 55 L150 62 L170 35" stroke={secondaryColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="170" cy="35" r="4" fill={primaryColor} stroke="#fff" strokeWidth="1.5" />

        {/* Trend Area under chart */}
        <path d="M110 80 L130 55 L150 62 L170 35 L170 80 L110 80 Z" fill={secondaryColor} fillOpacity="0.08" />
      </svg>
    );
  }

  if (normTitle.includes('healthcare') || normTitle.includes('medical')) {
    // Healthcare -> Heartbeat, EKG line, Shield, cross
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="med-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Glowing health radar circle */}
        <circle cx="100" cy="60" r="38" stroke={lightColor} strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="60" r="28" fill={lightColor} fillOpacity="0.25" />

        {/* Heart beat graph / EKG wave */}
        <path d="M40 60 L75 60 L83 45 L91 75 L99 28 L107 85 L115 50 L123 63 L131 60 L160 60"
          stroke="url(#med-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Health Cross in center */}
        <g transform="translate(93, 53) scale(0.7)">
          <path d="M5 0 L9 0 L9 5 L14 5 L14 9 L9 9 L9 14 L5 14 L5 9 L0 9 L0 5 L5 5 Z" fill={primaryColor} />
        </g>
      </svg>
    );
  }

  if (normTitle.includes('retail') || normTitle.includes('ecommerce') || normTitle.includes('shopping')) {
    // Retail & E-commerce -> Shopping bag, mobile storefront, cart
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ret-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Storefront / Mobile Frame */}
        <rect x="75" y="20" width="50" height="80" rx="6" fill="#fff" stroke={primaryColor} strokeWidth="2" />
        <line x1="75" y1="32" x2="125" y2="32" stroke={primaryColor} strokeWidth="1.5" />

        {/* Store Awning (Striped top) */}
        <path d="M75 32 L83 25 L91 32 L99 25 L107 32 L115 25 L125 32" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" />

        {/* Digital Shopping Bag */}
        <g transform="translate(40, 45) scale(0.9)">
          <path d="M5 10 L25 10 L28 35 L2 35 Z" fill="url(#ret-grad)" />
          <path d="M10 10 C10 4, 20 4, 20 10" stroke={primaryColor} strokeWidth="1.5" fill="none" />
        </g>

        {/* Checkout growth chart */}
        <g transform="translate(132, 45) scale(0.9)">
          <circle cx="15" cy="15" r="15" fill={lightColor} />
          <path d="M7 19 L13 13 L17 17 L23 10" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M18 10 L23 10 L23 15" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    );
  }

  if (normTitle.includes('manufacturing') || normTitle.includes('factory')) {
    // Manufacturing -> Smart factory, Industry 4.0, gears
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="man-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Factory Roof Outline */}
        <path d="M40 85 L40 55 L65 40 L65 55 L90 40 L90 55 L115 40 L115 85 Z" fill={lightColor} stroke={primaryColor} strokeWidth="1.5" strokeLinejoin="round" />

        {/* Factory Door / Detail */}
        <rect x="52" y="68" width="12" height="17" rx="1" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />

        {/* Industry 4.0 Automation Gear */}
        <g transform="translate(125, 35)">
          <circle cx="20" cy="20" r="16" stroke="url(#man-grad)" strokeWidth="4" strokeDasharray="8 4" />
          <circle cx="20" cy="20" r="8" fill="#fff" stroke={primaryColor} strokeWidth="2" />
          <circle cx="20" cy="20" r="2.5" fill={secondaryColor} />
        </g>

        {/* Connective digital lines */}
        <path d="M90 55 L125 55" stroke={secondaryColor} strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M115 70 L145 70 L145 55" stroke={secondaryColor} strokeWidth="1" />
      </svg>
    );
  }

  if (normTitle.includes('logistics') || normTitle.includes('supply chain') || normTitle.includes('delivery')) {
    // Logistics & Supply Chain -> Global route, shipping box, warehouse
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="log-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Globe grid / lines in background */}
        <circle cx="100" cy="60" r="35" stroke={lightColor} strokeWidth="1" />
        <path d="M65 60 C80 75, 120 75, 135 60" stroke={lightColor} strokeWidth="1" />
        <path d="M65 60 C80 45, 120 45, 135 60" stroke={lightColor} strokeWidth="1" />
        <line x1="100" y1="25" x2="100" y2="95" stroke={lightColor} strokeWidth="1" />

        {/* Delivery routes */}
        <path d="M55 45 C75 25, 115 25, 140 40" stroke="url(#log-grad)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" fill="none" />
        <circle cx="140" cy="40" r="3" fill={secondaryColor} />

        {/* Delivery Box (Isometric) */}
        <g transform="translate(85, 45)">
          {/* Left Side */}
          <path d="M15 10 L0 18 L0 34 L15 26 Z" fill={primaryColor} />
          {/* Right Side */}
          <path d="M15 10 L30 18 L30 34 L15 26 Z" fill="url(#log-grad)" fillOpacity="0.85" />
          {/* Top Side */}
          <path d="M15 10 L30 2 L15 -6 L0 2 Z" fill={lightColor} stroke={primaryColor} strokeWidth="1" />
          {/* Box Lines */}
          <path d="M15 10 L15 26" stroke="#fff" strokeWidth="1.2" />
        </g>
      </svg>
    );
  }

  if (normTitle.includes('telecommunications') || normTitle.includes('network') || normTitle.includes('mobile')) {
    // Telecommunications -> Towers, wireless waves, phone
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Radio Tower */}
        <g transform="translate(85, 20)">
          {/* Base legs */}
          <path d="M15 80 L7 80 L11 40 L19 40 Z" fill={primaryColor} />
          <path d="M15 40 L10 40 L15 0 L20 0 L20 40 Z" fill="url(#tel-grad)" />
          {/* Cross braces */}
          <line x1="6" y1="75" x2="24" y2="45" stroke={primaryColor} strokeWidth="1" />
          <line x1="24" y1="75" x2="6" y2="45" stroke={primaryColor} strokeWidth="1" />
          <line x1="10" y1="40" x2="20" y2="15" stroke="#fff" strokeWidth="1.2" />
          <line x1="20" y1="40" x2="10" y2="15" stroke="#fff" strokeWidth="1.2" />

          {/* Signal emitter dot */}
          <circle cx="15" cy="0" r="4.5" fill={secondaryColor} stroke="#fff" strokeWidth="1" />

          {/* Wireless Signals */}
          <path d="M3 0 A18 18 0 0 1 27 0" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" fill="none" transform="rotate(-90, 15, 0)" />
          <path d="M-5 0 A28 28 0 0 1 35 0" stroke={primaryColor} strokeWidth="1.5" strokeLinecap="round" fill="none" transform="rotate(-90, 15, 0)" />
          <path d="M-13 0 A38 38 0 0 1 43 0" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" fill="none" transform="rotate(-90, 15, 0)" />
        </g>
      </svg>
    );
  }

  if (normTitle.includes('energy') || normTitle.includes('utilities') || normTitle.includes('power')) {
    // Energy & Utilities -> Renewable energy, wind turbine, leaf
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nrg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Ground Hill outline */}
        <path d="M20 95 C60 90, 140 90, 180 95" stroke={lightColor} strokeWidth="1.5" />

        {/* Wind Turbine 1 (Left, large) */}
        <g transform="translate(65, 25)">
          {/* Pole */}
          <line x1="20" y1="70" x2="20" y2="25" stroke={primaryColor} strokeWidth="2" />
          {/* Blades */}
          <path d="M20 25 C10 15, 5 20, 20 25 Z" fill="url(#nrg-grad)" />
          <path d="M20 25 C25 10, 30 15, 20 25 Z" fill="url(#nrg-grad)" />
          <path d="M20 25 C20 40, 25 35, 20 25 Z" fill="url(#nrg-grad)" />
          {/* Center pin */}
          <circle cx="20" cy="25" r="3" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />
        </g>

        {/* Wind Turbine 2 (Right, small) */}
        <g transform="translate(115, 45) scale(0.7)">
          {/* Pole */}
          <line x1="20" y1="70" x2="20" y2="25" stroke={secondaryColor} strokeWidth="1.5" />
          {/* Blades */}
          <path d="M20 25 C10 15, 5 20, 20 25 Z" fill={secondaryColor} />
          <path d="M20 25 C25 10, 30 15, 20 25 Z" fill={secondaryColor} />
          <path d="M20 25 C20 40, 25 35, 20 25 Z" fill={secondaryColor} />
          {/* Center pin */}
          <circle cx="20" cy="25" r="2.5" fill="#fff" stroke={secondaryColor} strokeWidth="1" />
        </g>

        {/* Power plug / Energy flash */}
        <path d="M100 25 L88 45 L98 45 L92 65 L112 40 L102 40 Z" fill={secondaryColor} />
      </svg>
    );
  }

  if (normTitle.includes('real estate') || normTitle.includes('building') || normTitle.includes('property')) {
    // Real Estate -> Buildings, skyline, key
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="re-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* House / Buildings Outline */}
        <g transform="translate(55, 30)">
          {/* Small House */}
          <path d="M0 35 L0 60 L40 60 L40 35 L20 20 Z" fill={lightColor} stroke={primaryColor} strokeWidth="1.5" />
          <rect x="15" y="42" width="10" height="18" fill="#fff" stroke={primaryColor} strokeWidth="1.5" />

          {/* Skyscraper behind */}
          <rect x="48" y="5" width="36" height="55" rx="2" fill="url(#re-grad)" stroke="#fff" strokeWidth="1.5" />
          {/* Windows */}
          <rect x="54" y="12" width="6" height="6" rx="1" fill="#fff" fillOpacity="0.4" />
          <rect x="64" y="12" width="6" height="6" rx="1" fill="#fff" fillOpacity="0.4" />
          <rect x="74" y="12" width="6" height="6" rx="1" fill="#fff" fillOpacity="0.4" />
          <rect x="54" y="24" width="6" height="6" rx="1" fill="#fff" fillOpacity="0.4" />
          <rect x="64" y="24" width="6" height="6" rx="1" fill="#fff" fillOpacity="0.4" />
          <rect x="74" y="24" width="6" height="6" rx="1" fill="#fff" fillOpacity="0.4" />
          <rect x="54" y="36" width="6" height="6" rx="1" fill="#fff" fillOpacity="0.4" />
          <rect x="64" y="36" width="6" height="6" rx="1" fill="#fff" fillOpacity="0.4" />
          <rect x="74" y="36" width="6" height="6" rx="1" fill="#fff" fillOpacity="0.4" />
        </g>

        {/* Map Pin on the property */}
        <g transform="translate(68, 20)">
          <path d="M7.5 0 C3.3 0, 0 3.3, 0 7.5 C0 13.1, 7.5 20, 7.5 20 C7.5 20, 15 13.1, 15 7.5 C15 3.3, 11.7 0, 7.5 0 Z" fill={secondaryColor} stroke="#fff" strokeWidth="1.5" />
          <circle cx="7.5" cy="7" r="3.5" fill="#fff" />
        </g>
      </svg>
    );
  }

  if (normTitle.includes('education') || normTitle.includes('learning') || normTitle.includes('classroom')) {
    // Education -> Graduation cap, book, lightbulb
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="edu-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Open Book */}
        <g transform="translate(60, 50)">
          <path d="M0 25 C15 15, 35 15, 40 22 C45 15, 65 15, 80 25 L80 5 L65 -3 C55 -3, 45 2, 40 8 C35 2, 25 -3, 15 -3 L0 5 Z"
            fill={lightColor} stroke={primaryColor} strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="40" y1="8" x2="40" y2="35" stroke={primaryColor} strokeWidth="1.5" />
        </g>

        {/* Graduation Cap */}
        <g transform="translate(75, 20)">
          {/* Diamond top */}
          <path d="M25 0 L50 8 L25 16 L0 8 Z" fill="url(#edu-grad)" stroke="#fff" strokeWidth="1.5" />
          {/* Skull cap */}
          <path d="M10 11.5 L10 20 C10 25, 40 25, 40 20 L40 11.5" fill="url(#edu-grad)" stroke="#fff" strokeWidth="1.5" />
          {/* Tassel */}
          <path d="M25 8 L38 12 L38 22" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <circle cx="38" cy="22" r="2.5" fill={secondaryColor} />
        </g>
      </svg>
    );
  }

  if (normTitle.includes('government') || normTitle.includes('public sector') || normTitle.includes('public services') || normTitle.includes('governance')) {
    // Government -> Classic Dome, Columned building
    return (
      <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="govb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        {/* Columns & Dome */}
        <g transform="translate(60, 25)">
          {/* Base step */}
          <rect x="0" y="55" width="80" height="6" rx="1" fill={primaryColor} />
          <rect x="4" y="50" width="72" height="5" rx="1" fill={primaryColor} />

          {/* Pillars */}
          <rect x="10" y="24" width="8" height="26" fill="url(#govb-grad)" />
          <rect x="26" y="24" width="8" height="26" fill="url(#govb-grad)" />
          <rect x="42" y="24" width="8" height="26" fill="url(#govb-grad)" />
          <rect x="58" y="24" width="8" height="26" fill="url(#govb-grad)" />

          {/* Roof */}
          <rect x="6" y="19" width="68" height="5" rx="1" fill={primaryColor} />
          <path d="M8 19 L40 0 L72 19 Z" fill="url(#govb-grad)" />

          {/* Dome Detail */}
          <path d="M30 0 A10 10 0 0 1 50 0 Z" fill={secondaryColor} transform="translate(0, -3)" />
          <line x1="40" y1="-3" x2="40" y2="-10" stroke={secondaryColor} strokeWidth="1.5" />
        </g>
      </svg>
    );
  }

  // Fallback -> A neat abstract grid/chart with nodes
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
      </defs>
      <rect x="50" y="30" width="100" height="60" rx="6" stroke="url(#fb-grad)" strokeWidth="1.5" strokeDasharray="4 2" />
      <circle cx="100" cy="60" r="15" fill={lightColor} stroke={primaryColor} strokeWidth="1.5" />
      <path d="M80 60 H120" stroke={primaryColor} strokeWidth="1.5" />
      <path d="M100 40 V80" stroke={primaryColor} strokeWidth="1.5" />
      <circle cx="100" cy="60" r="4" fill={secondaryColor} />
    </svg>
  );
};

export default Illustration;
