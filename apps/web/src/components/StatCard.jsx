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

const StatCard = ({ number, label, index, icon: Icon }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const suffix = number.replace(/[0-9.]/g, '');
  const animated = useCounter(number, 1600, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="stat-number text-[hsl(213_94%_38%)] mb-1">
        {inView ? animated : 0}{suffix}
      </div>
      <p className="text-sm font-500 text-[hsl(215_20%_50%)] tracking-wide" style={{ fontWeight: 500 }}>
        {label}
      </p>
    </motion.div>
  );
};

export default StatCard;