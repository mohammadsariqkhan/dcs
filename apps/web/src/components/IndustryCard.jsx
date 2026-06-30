
import React from 'react';
import { motion } from 'framer-motion';

const IndustryCard = ({ icon: Icon, name, index, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`bg-card text-card-foreground rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border ${className}`}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-4 rounded-full bg-primary/10">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground">{name}</h3>
      </div>
    </motion.div>
  );
};

export default IndustryCard;
