import React, { useEffect, useRef, useMemo } from 'react';

interface TextRevealProps {
  children: string;
  baseOpacity?: number;
  revealColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TextReveal: React.FC<TextRevealProps> = ({ 
  children, 
  baseOpacity = 0.08,
  revealColor = 'inherit',
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Divide o texto em caracteres
  const characters = useMemo(() => {
    return children.split('').map((char, index) => ({
      char: char === ' ' ? '\u00A0' : char, // Usa espaço não-quebrable
      index
    }));
  }, [children]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.reveal-char');
    
    // Define opacidade inicial para todos os caracteres
    chars.forEach((char) => {
      (char as HTMLElement).style.opacity = baseOpacity.toString();
    });

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcula o progresso baseado na posição do elemento na tela
      const startTrigger = windowHeight * 0.9; // Começa quando o elemento está 90% visível na tela
      const endTrigger = windowHeight * 0.1;   // Termina quando o elemento está 10% da tela
      
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calcula o progresso de 0 a 1
      let progress = 0;
      
      if (elementTop <= startTrigger && elementTop >= endTrigger - elementHeight) {
        progress = Math.min(1, Math.max(0, (startTrigger - elementTop) / (startTrigger - endTrigger + elementHeight)));
      } else if (elementTop < endTrigger - elementHeight) {
        progress = 1;
      }

      // Aplica a opacidade para cada caractere com delay progressivo mais acentuado
      chars.forEach((char, index) => {
        const charProgress = Math.max(0, Math.min(1, progress * 2 - (index / chars.length) * 0.8));
        const opacity = baseOpacity + (1 - baseOpacity) * Math.pow(charProgress, 0.8); // Curva mais suave
        (char as HTMLElement).style.opacity = opacity.toString();
        
        // Quando completamente revelado, garante que a cor seja a especificada
        if (opacity > 0.9) {
          (char as HTMLElement).style.color = revealColor;
        }
      });
    };

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Chama uma vez para estado inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [baseOpacity, revealColor]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{
        display: 'inline',
        ...style
      }}
    >
      {characters.map(({ char, index }) => (
        <span
          key={index}
          className="reveal-char"
          style={{
            display: 'inline-block',
            opacity: baseOpacity,
            transition: 'opacity 0.1s ease-out, color 0.1s ease-out',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            color: 'inherit',
            lineHeight: 'inherit',
            fontFamily: 'inherit'
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextReveal;
