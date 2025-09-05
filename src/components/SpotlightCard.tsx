import React, { useRef } from 'react';
import './SpotlightCard.css';

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  theme?: 'dark' | 'light';
  backgroundColor?: string;
  borderColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)',
  theme = 'dark',
  backgroundColor,
  borderColor
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  // Define cores baseadas no tema
  const cardBackgroundColor = backgroundColor || (theme === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(0, 0, 0, 0.05)');
    
  const cardBorderColor = borderColor || (theme === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.15)');

  return (
    <div 
      ref={divRef} 
      onMouseMove={handleMouseMove} 
      className={`card-spotlight ${className}`}
      style={{
        backgroundColor: cardBackgroundColor,
        borderColor: cardBorderColor,
      }}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
