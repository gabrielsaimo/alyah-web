import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const FloatingNavbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // Controla expansão - expande quando rola para baixo
        setIsExpanded(currentScrollY > 80);

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

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
        transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        width: isExpanded ? "90%" : "70%",
        maxWidth: isExpanded ? "1200px" : "800px",
        minWidth: "600px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          padding: "12px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          width: "100%",
        }}
      >
        {/* Logo - sempre visível */}
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#ffffff",
            whiteSpace: "nowrap",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.color = "#3498db";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.color = "#ffffff";
            }}
          >
            Alyah Web
          </Link>
        </div>

        {/* Navigation Items - sempre centralizados */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Link
            to="/"
            style={{
              color: isActive("/") ? "#3498db" : "#ffffff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "500",
              padding: "8px 16px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              backgroundColor: isActive("/")
                ? "rgba(52, 152, 219, 0.1)"
                : "transparent",
              border: isActive("/")
                ? "1px solid rgba(52, 152, 219, 0.3)"
                : "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/")) {
                target.style.color = "#3498db";
                target.style.backgroundColor = "rgba(52, 152, 219, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/")) {
                target.style.color = "#ffffff";
                target.style.backgroundColor = "transparent";
              }
            }}
          >
            Home
          </Link>

          <Link
            to="/sobre"
            style={{
              color: isActive("/sobre") ? "#3498db" : "#ffffff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "500",
              padding: "8px 16px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              backgroundColor: isActive("/sobre")
                ? "rgba(52, 152, 219, 0.1)"
                : "transparent",
              border: isActive("/sobre")
                ? "1px solid rgba(52, 152, 219, 0.3)"
                : "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/sobre")) {
                target.style.color = "#3498db";
                target.style.backgroundColor = "rgba(52, 152, 219, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/sobre")) {
                target.style.color = "#ffffff";
                target.style.backgroundColor = "transparent";
              }
            }}
          >
            Sobre
          </Link>

          <Link
            to="/contato"
            style={{
              color: isActive("/contato") ? "#3498db" : "#ffffff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "500",
              padding: "8px 16px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              backgroundColor: isActive("/contato")
                ? "rgba(52, 152, 219, 0.1)"
                : "transparent",
              border: isActive("/contato")
                ? "1px solid rgba(52, 152, 219, 0.3)"
                : "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/contato")) {
                target.style.color = "#3498db";
                target.style.backgroundColor = "rgba(52, 152, 219, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              if (!isActive("/contato")) {
                target.style.color = "#ffffff";
                target.style.backgroundColor = "transparent";
              }
            }}
          >
            Contato
          </Link>
        </nav>

        {/* CTA Button - sempre visível */}
        <div
          style={{
            whiteSpace: "nowrap",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <button
            style={{
              backgroundColor: "#3498db",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
            onClick={() => (window.location.href = "/contato")}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = "#2980b9";
              target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = "#3498db";
              target.style.transform = "translateY(0)";
            }}
          >
            Orçamento
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FloatingNavbar;
