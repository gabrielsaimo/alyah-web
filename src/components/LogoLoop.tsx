import React from "react";

interface LogoLoopProps {
  items: string[];
  className?: string;
  speed?: number;
  backgroundColor?: string;
  textColor?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({ 
  items, 
  className = "", 
  speed = 20,
  backgroundColor = "#3498db",
  textColor = "#ffffff"
}) => {
  return (
    <div 
      className={className}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div 
        style={{
          display: "inline-flex",
          gap: "15px",
          animationName: "loop",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDuration: `${speed}s`,
        }}
      >
        {/* Primeira instância dos itens */}
        {items.map((item, index) => (
          <span
            key={`first-${index}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: backgroundColor,
              color: textColor,
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "500",
              opacity: 0.9,
              transition: "all 0.3s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
        {/* Segunda instância para loop contínuo */}
        {items.map((item, index) => (
          <span
            key={`second-${index}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: backgroundColor,
              color: textColor,
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "500",
              opacity: 0.9,
              transition: "all 0.3s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
