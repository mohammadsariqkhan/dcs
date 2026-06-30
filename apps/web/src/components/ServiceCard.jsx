import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, benefits, technologies, index, onCTAClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-premium group cursor-pointer flex flex-col h-full"
      style={{ padding: '1.75rem' }}
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-4 mb-4">
        <div className="icon-box group-hover:shadow-glow transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, hsl(213 94% 38% / 0.1), hsl(199 89% 48% / 0.07))',
            border: '1px solid hsl(213 94% 38% / 0.15)'
          }}
        >
          <Icon className="h-6 w-6" style={{ color: 'hsl(213 94% 38%)' }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-700 text-[hsl(222_47%_11%)] mb-1.5 leading-snug capitalize"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
            {title}
          </h3>
          <p className="text-sm text-[hsl(215_20%_50%)] leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <div className="mb-4">
          <ul className="space-y-1.5">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-[hsl(222_47%_25%)]">
                <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="mb-5">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-full bg-[hsl(213_94%_38%/0.06)] text-[hsl(213_94%_38%)] border border-[hsl(213_94%_38%/0.12)] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <button
        onClick={onCTAClick}
        className="flex items-center gap-2 text-sm font-600 text-[hsl(213_94%_38%)] group-hover:gap-3 transition-all duration-200 mt-1"
        style={{ fontWeight: 600, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
      >
        Learn more
        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
};

export default ServiceCard;