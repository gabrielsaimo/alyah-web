import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const FloatingNavbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const { theme, toggleTheme, colors } = useTheme();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(controlNavbar);
        ticking = true;
      }
    };

    // Usa requestAnimationFrame para performance otimizada
    window.addEventListener("scroll", requestTick, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", requestTick);
    };
  }, []);

  // Função para calcular valores com interpolação suave
  const getStageValue = (expandedValue: number, retractedValue: number) => {
    const currentScrollY = scrollY;
    const maxScroll = 300;
    const progress = Math.min(currentScrollY / maxScroll, 1);
    
    // Curva easing cubic-bezier para suavidade profissional
    const easedProgress = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    
    return expandedValue + (retractedValue - expandedValue) * easedProgress;
  };

  // Função para calcular largura com valores mais fluidos
  const getWidth = () => {
    return `${getStageValue(90, 65)}%`; // Redução mais sutil
  };

  // Função para calcular maxWidth
  const getMaxWidth = () => {
    return `${getStageValue(1200, 750)}px`; // Transição mais gradual
  };

  // Função para calcular minWidth
  const getMinWidth = () => {
    return `${getStageValue(600, 520)}px`; // Mudança menor para fluidez
  };

  // Função para calcular tamanho da fonte dos links
  const getLinkFontSize = () => {
    return `${getStageValue(14, 13)}px`; // Diferença menor para suavidade
  };

  // Função para calcular gap entre elementos
  const getNavGap = () => {
    return `${getStageValue(24, 18)}px`; // Redução mais sutil
  };

  // Função para calcular opacidade do fundo com curva suave
  const getBackgroundOpacity = () => {
    return getStageValue(0.25, 0.65); // Valores mais equilibrados
  };

  // Função para calcular blur com progressão natural
  const getBlurAmount = () => {
    return `${getStageValue(6, 18)}px`; // Começar com menos blur
  };

  // Função para calcular opacidade da borda
  const getBorderOpacity = () => {
    return getStageValue(0.08, 0.25); // Progressão mais sutil
  };

  // Função para calcular opacidade da sombra
  const getShadowOpacity = () => {
    return getStageValue(0.05, 0.35); // Sombra mais sutil inicialmente
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Easing profissional
        width: getWidth(),
        maxWidth: getMaxWidth(),
        minWidth: getMinWidth(),
        willChange: "width, max-width, min-width", // Otimização de performance
      }}
    >
      <div
        style={{
          backgroundColor: `rgba(${colors.navBackground}, ${getBackgroundOpacity()})`,
          backdropFilter: `blur(${getBlurAmount()})`,
          border: `1px solid rgba(${colors.navBorder}, ${getBorderOpacity()})`,
          borderRadius: "16px",
          padding: "12px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          boxShadow: `0 8px 32px rgba(${colors.navShadow}, ${getShadowOpacity()})`,
          width: "100%",
          willChange: "background-color, backdrop-filter, border, box-shadow", // Performance
        }}
      >
        {/* Logo - sempre visível */}
        <div
          style={{
            whiteSpace: "nowrap",
            transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = "scale(1)";
            }}
          >
            <img
              src="/alyah_logo.png"
              alt="Alyah"
              style={{
                height: scrollY <= 150 ? "40px" : "30px",
                width: "auto",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                willChange: "height",
                filter: theme === 'light' ? 'invert(1)' : 'none',
              }}
              onError={(e) => {
                // Fallback para texto se a imagem não carregar
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallbackText = document.createElement('span');
                fallbackText.textContent = 'ALYAH';
                fallbackText.style.fontSize = scrollY <= 150 ? "24px" : "20px";
                fallbackText.style.fontWeight = "bold";
                fallbackText.style.color = colors.text;
                fallbackText.style.transition = "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
                target.parentNode?.appendChild(fallbackText);
              }}
            />
          </Link>
        </div>

        {/* Navigation Items - sempre centralizados */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: getNavGap(),
            transition: "gap 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "gap",
          }}
        >
          <Link
            to="/"
            style={{
              color: isActive("/") ? colors.accent : colors.text,
              textDecoration: "none",
              fontSize: getLinkFontSize(),
              fontWeight: "500",
              padding: "8px 16px",
              borderRadius: "8px",
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              backgroundColor: isActive("/")
                ? "rgba(52, 152, 219, 0.1)"
                : "transparent",
              border: isActive("/")
                ? "1px solid rgba(52, 152, 219, 0.3)"
                : "1px solid transparent",
              willChange: "color, background-color, border",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/")) {
                target.style.color = colors.accent;
                target.style.backgroundColor = "rgba(52, 152, 219, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/")) {
                target.style.color = colors.text;
                target.style.backgroundColor = "transparent";
              }
            }}
          >
            Home
          </Link>

          <Link
            to="/sobre"
            style={{
              color: isActive("/sobre") ? colors.accent : colors.text,
              textDecoration: "none",
              fontSize: getLinkFontSize(),
              fontWeight: "500",
              padding: "8px 16px",
              borderRadius: "8px",
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              backgroundColor: isActive("/sobre")
                ? "rgba(52, 152, 219, 0.1)"
                : "transparent",
              border: isActive("/sobre")
                ? "1px solid rgba(52, 152, 219, 0.3)"
                : "1px solid transparent",
              willChange: "color, background-color, border",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/sobre")) {
                target.style.color = colors.accent;
                target.style.backgroundColor = "rgba(52, 152, 219, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/sobre")) {
                target.style.color = colors.text;
                target.style.backgroundColor = "transparent";
              }
            }}
          >
            Sobre
          </Link>

          <Link
            to="/contato"
            style={{
              color: isActive("/contato") ? colors.accent : colors.text,
              textDecoration: "none",
              fontSize: getLinkFontSize(),
              fontWeight: "500",
              padding: "8px 16px",
              borderRadius: "8px",
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              backgroundColor: isActive("/contato")
                ? "rgba(52, 152, 219, 0.1)"
                : "transparent",
              border: isActive("/contato")
                ? "1px solid rgba(52, 152, 219, 0.3)"
                : "1px solid transparent",
              willChange: "color, background-color, border",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/contato")) {
                target.style.color = colors.accent;
                target.style.backgroundColor = "rgba(52, 152, 219, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/contato")) {
                target.style.color = colors.text;
                target.style.backgroundColor = "transparent";
              }
            }}
          >
            Contato
          </Link>
        </nav>

        {/* Theme Toggle Icon - sempre visível */}
        <div
          style={{
            whiteSpace: "nowrap",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <span
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fontSize: scrollY <= 150 ? "20px" : "18px",
              padding: "8px",
              userSelect: "none",
              willChange: "transform, font-size",
              color: colors.text,
              filter: "grayscale(1)",
            }}
            onClick={toggleTheme}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = "scale(1)";
            }}
            title={`Trocar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </span>
        </div>
      </div>
    </header>
  );
};

export default FloatingNavbar;
