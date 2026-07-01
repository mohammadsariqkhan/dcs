import React from 'react';
import TechBadge from '@/components/TechBadge';

const LogoMarquee = ({ items, reverse = false, speed = '30s', className = '' }) => {
  // If items length is small, repeat it more times to ensure it covers screens of all sizes.
  const repetitions = items.length < 10 ? 4 : 2;
  const listCopies = Array.from({ length: repetitions });

  return (
    <div className={`relative w-full overflow-hidden mask-marquee py-4 select-none ${className}`}>
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} pause-on-hover`}
        style={{ animationDuration: speed }}
      >
        {listCopies.map((_, copyIdx) => (
          <div
            key={copyIdx}
            className="flex shrink-0 items-center gap-6 pr-6"
            aria-hidden={copyIdx > 0 ? "true" : undefined}
          >
            {items.map((item, idx) => (
              (
                item === "AWS" ? (
                  <TechBadge
                    key={`copy-${copyIdx}-${item}-${idx}`}
                    name={item}
                    color="#FF9900"
                    className="text-md shadow-soft"
                  />
                ) :
                  <TechBadge
                    key={`copy-${copyIdx}-${item}-${idx}`}
                    name={item}
                    className="text-md shadow-soft"
                  />
              )

            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
