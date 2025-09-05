import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0,
  className = '',
  style = {}
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, delay);
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
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal-simple ${className}`}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
