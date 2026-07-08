import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import TechBadge from '@/components/TechBadge';
import Illustration from '@/components/Illustration';
import TechIcon from '@/components/TechIcon';

const ServiceCard = ({ icon: Icon, title, description, benefits, technologies, index, onCTAClick, showIllustration = true, imageUrl }) => {
  const getPartnerName = (title) => {
    const lower = title.toLowerCase();
    if (lower.includes('aws') || lower.includes('amazon')) return 'aws';
    if (lower.includes('azure') || lower.includes('microsoft')) return 'azure';
    if (lower.includes('google cloud') || lower.includes('gcp')) return 'gcp';
    if (lower.includes('databricks')) return 'databricks';
    if (lower.includes('spark')) return 'spark';
    if (lower.includes('kafka')) return 'kafka';
    if (lower.includes('snowflake')) return 'snowflake';
    return null;
  };

  const partnerName = getPartnerName(title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-premium group cursor-pointer flex flex-col h-full"
      style={{ padding: '2rem' }}
    >
      {/* Icon Container (at the top) */}
      <div className="mb-6">
        <div className="icon-box group-hover:shadow-glow transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, hsl(213 94% 38% / 0.1), hsl(199 89% 48% / 0.07))',
            border: '1px solid hsl(213 94% 38% / 0.15)'
          }}
        >
          {partnerName ? (
            <TechIcon name={partnerName} size={24} color="hsl(213 94% 38%)" />
          ) : (
            <Icon className="h-6 w-6" style={{ color: 'hsl(213 94% 38%)' }} />
          )}
        </div>
      </div>

      {/* Service Title */}
      <h3 className="text-xl font-800 text-[hsl(222_47%_11%)] mb-3 leading-snug capitalize"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
        {title}
      </h3>

      {/* Short Description */}
      <p className="text-sm text-[hsl(215_20%_50%)] leading-relaxed mb-6">
        {description}
      </p>

      {/* Image or Illustration */}
      {showIllustration && (
        <div className="w-full h-44 flex items-center justify-center mb-6 bg-gradient-to-br from-slate-50 to-blue-50/20 rounded-xl border border-slate-100/50 overflow-hidden relative group-hover:border-blue-500/10 transition-all duration-300 shadow-sm">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <Illustration title={title} className="w-full h-full max-h-[110px]" />
          )}
        </div>
      )}

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <div className="mb-6">
          <ul className="space-y-2">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-sm text-[hsl(222_47%_25%)]">
                <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Spacer to push technologies/CTA to bottom and align cards */}
      <div className="flex-grow" />

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="mb-6 mt-4">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, idx) => (
              <TechBadge key={idx} name={tech} variant="pill" />
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="pt-2">
        <button
          onClick={onCTAClick}
          className="flex items-center gap-2 text-sm font-700 text-[hsl(213_94%_38%)] group-hover:gap-3 transition-all duration-200"
          style={{ fontWeight: 700, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          Learn more
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;