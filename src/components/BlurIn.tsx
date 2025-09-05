import React, { useEffect, useRef, useState } from 'react';

interface BlurInProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  blur?: string;
}

const BlurIn: React.FC<BlurInProps> = ({ 
  children, 
  className = '',
  style = {},
  delay = 0,
  duration = 1000,
  blur = '6px'
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
            setTimeout(() => {
              setIsVisible(true);
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
      className={className}
      style={{
        filter: isVisible ? 'blur(0px)' : `blur(${blur})`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all ${duration}ms ease-out`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default BlurIn;
