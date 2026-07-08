import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const useCounter = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!start) return;
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [start, target, duration]);

  return count;
};

const StatCard = ({ number, label, index, icon: Icon, variant = 'default' }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const suffix = number.replace(/[0-9.]/g, '');
  const animated = useCounter(number, 1600, inView);
  const isLight = variant === 'light';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="text-center group"
    >
      {Icon && (
        <div className="mb-3 flex justify-center">
          <Icon size={24} className={isLight ? 'text-white/80' : 'text-[hsl(213_94%_38%)]'} />
        </div>
      )}
      <div className={`text-4xl md:text-5xl font-800 mb-2 ${isLight ? 'text-white' : 'text-[hsl(213_94%_38%)]'}`} style={{ fontWeight: 800, letterSpacing: '-0.04em' }}>
        {inView ? animated : 0}{suffix}
      </div>
      <p className={`text-sm font-500 tracking-wide ${isLight ? 'text-white/70' : 'text-[hsl(215_20%_50%)]'}`} style={{ fontWeight: 500 }}>
        {label}
      </p>
    </motion.div>
  );
};

export default StatCard;