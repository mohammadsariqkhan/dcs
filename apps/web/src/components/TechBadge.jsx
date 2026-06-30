
import React from 'react';
import { motion } from 'framer-motion';

const TechBadge = ({ name, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span className="font-medium text-sm">{name}</span>
    </motion.div>
  );
};

export default TechBadge;
