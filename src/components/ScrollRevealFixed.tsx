import React, { useEffect, useRef, useMemo } from 'react';
import type { ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  baseOpacity?: number;
  containerClassName?: string;
  textClassName?: string;
  staggerDelay?: number;
  startTrigger?: string;
  endTrigger?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  baseOpacity = 0.5,
  containerClassName = '',
  textClassName = '',
  staggerDelay = 0.005,
  startTrigger = 'top bottom-=20%',
  endTrigger = 'bottom center+=20%'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitTextByCharacter = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index} style={{ 
          display: 'inline-block', 
          width: '0.25em',
          opacity: baseOpacity 
        }}>&nbsp;</span>;
      }
      return (
        <span 
          key={index} 
          className="reveal-char"
          style={{ 
            display: 'inline-block',
            opacity: baseOpacity,
            willChange: 'opacity'
          }}
        >
          {char}
        </span>
      );
    });
  }, [children, baseOpacity]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const charElements = el.querySelectorAll<HTMLElement>('.reveal-char');

    if (charElements.length === 0) return;

    // Configuração inicial explícita
    charElements.forEach((char) => {
      char.style.opacity = baseOpacity.toString();
    });

    // Animação com GSAP
    const tl = gsap.to(charElements, {
      opacity: 1,
      stagger: staggerDelay,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scroller,
        start: startTrigger,
        end: endTrigger,
        scrub: 0.5,
        toggleActions: "play none none reverse",
        onUpdate: (self) => {
          // Debug: verificar se a animação está funcionando
          console.log('ScrollTrigger progress:', self.progress);
        }
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, baseOpacity, staggerDelay, startTrigger, endTrigger]);

  return (
    <div 
      ref={containerRef} 
      className={`scroll-reveal ${containerClassName}`}
      style={{ 
        display: 'inline-block',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        color: 'inherit',
        lineHeight: 'inherit'
      }}
    >
      <span 
        className={`scroll-reveal-text ${textClassName}`}
        style={{ 
          display: 'inline',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          color: 'inherit'
        }}
      >
        {splitTextByCharacter}
      </span>
    </div>
  );
};

export default ScrollReveal;
