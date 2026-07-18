import React from 'react';
import { resolveTechIcon } from '@/lib/techIconMap';
import { useTheme } from '@/contexts/ThemeContext';

const TechIcon = ({
  name,
  size = 20,
  className = '',
  color,
}) => {
  const config = resolveTechIcon(name);
  const { theme } = useTheme();

  if (!config) return null;

  if (config.type === 'lucide') {
    const { Icon, title } = config;
    return (
      <Icon
        size={size}
        className={`flex-shrink-0 tech-icon-lucide transition-all duration-200 ${className}`}
        style={{ color: color ?? 'hsl(var(--primary))' }}
        aria-label={title}
        role="img"
      />
    );
  }

  let fillColor = color ?? `#${config.hex}`;
  if (!color && config.hex && theme === 'dark') {
    try {
      const hex = config.hex.toLowerCase().padStart(6, '0');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      if (yiq < 80) {
        fillColor = 'currentColor';
      }
    } catch (e) {
      // fallback
    }
  }

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
