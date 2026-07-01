import React from 'react';
import { motion } from 'framer-motion';
import TechIcon from '@/components/TechIcon';

const TechBadge = ({
  name,
  variant = 'default',
  index = 0,
  animated = false,
  className = '',
  color,
}) => {
  const iconSize = variant === 'pill' ? 16 : 40;
  const Tag = animated ? motion.span : 'span';

  const animationProps = animated
    ? {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { delay: index * 0.03, duration: 0.3 },
    }
    : {};

  const variantClasses =
    variant === 'pill'
      ? 'tech-pill'
      : 'tech-badge';
  const badges_name = ['AWS']

  return (
    <Tag
      {...animationProps}
      className={`${variantClasses} tech-badge-with-icon group/tech ${className}`}
      title={name}
    >
      <TechIcon
        name={name}
        size={iconSize}
        color={color}
        className="tech-badge-icon group-hover/tech:scale-110 group-hover/tech:brightness-110"
      />
      {
        !badges_name.includes(name) ? (
          <span>{name}</span>
        ) :
          (null)
      }

    </Tag>
  );
};

export default TechBadge;
