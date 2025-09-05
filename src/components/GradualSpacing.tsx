import React, { useEffect, useRef, useState } from 'react';

interface GradualSpacingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delayMultiple?: number;
  framerProps?: React.HTMLAttributes<HTMLDivElement>;
}

const GradualSpacing: React.FC<GradualSpacingProps> = ({ 
  text, 
  className = '',
  style = {},
  delayMultiple = 0.04,
  framerProps = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        display: 'flex',
        ...style
      }}
      {...framerProps}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            letterSpacing: isVisible ? '0.1em' : '0.5em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.8s ease-out`,
            transitionDelay: `${index * delayMultiple}s`,
            display: char === ' ' ? 'block' : 'inline-block',
            width: char === ' ' ? '0.3em' : 'auto'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default GradualSpacing;
