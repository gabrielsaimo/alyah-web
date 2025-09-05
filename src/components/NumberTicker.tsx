import React, { useEffect, useRef, useState } from 'react';

interface NumberTickerProps {
  value: number;
  direction?: 'up' | 'down';
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  direction = 'up',
  delay = 0,
  className = '',
  style = {},
  prefix = '',
  suffix = '',
  duration = 2000
}) => {
  const [displayValue, setDisplayValue] = useState(direction === 'up' ? 0 : value);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animateValue = () => {
      const startValue = direction === 'up' ? 0 : value;
      const endValue = direction === 'up' ? value : 0;
      const startTime = Date.now();

      const updateValue = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;
        setDisplayValue(Math.floor(currentValue));

        if (progress < 1) {
          requestAnimationFrame(updateValue);
        } else {
          setDisplayValue(endValue);
        }
      };

      requestAnimationFrame(updateValue);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true);
              animateValue();
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
  }, [isVisible, delay, direction, value, duration]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style
      }}
    >
      {prefix}{displayValue.toLocaleString()}{suffix}
    </div>
  );
};

export default NumberTicker;
