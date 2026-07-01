import React from 'react';
import { resolveTechIcon } from '@/lib/techIconMap';

const TechIcon = ({
  name,
  size = 20,
  className = '',
  color,
}) => {
  const config = resolveTechIcon(name);
  if (!config) return null;

  if (config.type === 'lucide') {
    const { Icon, title } = config;
    return (
      <Icon
        size={size}
        className={`flex-shrink-0 tech-icon-lucide transition-all duration-200 ${className}`}
        style={{ color: color ?? 'hsl(213 94% 38%)' }}
        aria-label={title}
        role="img"
      />
    );
  }

  const fillColor = color ?? `#${config.hex}`;

  return (
    <svg
      role="img"
      aria-label={config.title}
      viewBox={config.viewBox || "0 0 24 24"}
      width={size}
      height={size}
      className={`flex-shrink-0 tech-icon-svg transition-all duration-200 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={config.path} fill={fillColor} />
    </svg>
  );
};

export default TechIcon;
