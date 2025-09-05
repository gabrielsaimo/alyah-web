import React, { useEffect, useRef, useMemo } from 'react';
import type { ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

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
  baseOpacity = 0.3,
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
        return <span key={index} className="char space">&nbsp;</span>;
      }
      return (
        <span className="char" key={index}>
          {char}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const charElements = el.querySelectorAll<HTMLElement>('.char');

    // Configuração inicial - todas as letras já visíveis mas com opacidade baixa
    gsap.set(charElements, { 
      opacity: baseOpacity,
      willChange: 'opacity'
    });

    // Animação suave e fluida - apenas opacidade, sem movimento ou blur
    gsap.to(charElements, {
      opacity: 1,
      stagger: staggerDelay,
      ease: "none", // Linear para máxima fluidez
      scrollTrigger: {
        trigger: el,
        scroller,
        start: startTrigger,
        end: endTrigger,
        scrub: 0.3, // Muito responsivo e fluido
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, baseOpacity, staggerDelay, startTrigger, endTrigger]);

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <div className={`scroll-reveal-text ${textClassName}`}>
        {splitTextByCharacter}
      </div>
    </div>
  );
};

export default ScrollReveal;