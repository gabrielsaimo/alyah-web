import { useTheme } from "../context/ThemeContext";
import Threads from "../components/Threads";
import ScrollReveal from "../components/ScrollRevealSimple";
import TextReveal from "../components/TextReveal";
import LogoLoop from "../components/LogoLoop";
import SpotlightCard from "../components/SpotlightCard";

const Home = () => {
  const { theme, colors } = useTheme();

  return (
    <div style={{ backgroundColor: colors.background, minHeight: "100vh" }}>
      {/* Seção Hero com Threads como fundo */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Threads como fundo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Threads
            amplitude={1.5}
            distance={0.4}
            enableMouseInteraction={true}
          />
        </div>

        {/* Overlay para melhor legibilidade */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor:
              theme === "dark"
                ? "rgba(0, 0, 0, 0.6)"
                : "rgba(255, 255, 255, 0.3)",
            zIndex: 2,
          }}
        />

        {/* Conteúdo principal */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            color: colors.text,
            maxWidth: "800px",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              marginBottom: "20px",
              textShadow:
                theme === "dark"
                  ? "2px 2px 4px rgba(0,0,0,0.8)"
                  : "2px 2px 4px rgba(255,255,255,0.8)",
            }}
          >
            Bem-vindo à Alyah Web
          </h1>

          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.6",
              marginBottom: "40px",
              textShadow:
                theme === "dark"
                  ? "1px 1px 2px rgba(0,0,0,0.8)"
                  : "1px 1px 2px rgba(255,255,255,0.8)",
            }}
          >
            Criamos experiências digitais inovadoras com as mais modernas
            tecnologias
          </p>

          <button
            style={{
              backgroundColor: colors.accent,
              color: colors.text,
              border: "none",
              padding: "15px 30px",
              fontSize: "18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s",
              boxShadow: `0 4px 15px rgba(52, 152, 219, 0.4)`,
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = colors.accentHover;
              target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = colors.accent;
              target.style.transform = "translateY(0)";
            }}
          >
            Descubra Nossos Serviços
          </button>
        </div>
      </div>

      {/* Seção Sobre Mim */}
      <div
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "40px",
            color: colors.text,
            textAlign: "center",
          }}
        >
         Sobre Mim
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          <div style={{ maxWidth: "800px", textAlign: "center" }}>
            <p
              style={{
                fontSize: "22px",
                color: colors.textSecondary,
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              <TextReveal 
                baseOpacity={0.06}
                revealColor={theme === "dark" ? "#ffffff" : "#000000"}
              >
                Olá! Sou um desenvolvedor apaixonado por criar experiências
                digitais incríveis. Com mais de 5 anos de experiência,
                especializo-me em tecnologias modernas como React, TypeScript,
                Node.js e design responsivo. Minha missão é transformar ideias
                em soluções digitais funcionais e elegantes, sempre focando na
                melhor experiência do usuário e nas melhores práticas de
                desenvolvimento. Quando não estou codando, gosto de explorar
                novas tecnologias, contribuir para projetos open source e
                compartilhar conhecimento com a comunidade de desenvolvedores.
              </TextReveal>
            </p>

            <ScrollReveal delay={600}>
              <LogoLoop
                items={["React", "TypeScript", "Node.js", "Vite", "Design UX/UI", "JavaScript", "CSS", "HTML", "Git", "MongoDB"]}
                speed={25}
                backgroundColor={colors.accent}
                textColor={colors.text}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Seção Meus Trabalhos */}
      <div
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "40px",
            color: colors.text,
            textAlign: "center",
          }}
        >
          <TextReveal baseOpacity={0.05}>Meus Trabalhos</TextReveal>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            marginTop: "50px",
          }}
        >
          <ScrollReveal delay={200}>
            <SpotlightCard 
              spotlightColor="rgba(52, 152, 219, 0.3)"
              theme={theme}
              backgroundColor={theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}
              borderColor={theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
            >
              <div style={{ textAlign: "center", height: "100%", display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    backgroundColor: colors.surface,
                    border: `2px dashed ${colors.border}`,
                    borderRadius: "12px",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: colors.textSecondary,
                  }}
                >
                  Imagem do Projeto
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: colors.text,
                    marginBottom: "15px",
                  }}
                >
                  E-commerce Moderno
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: colors.textSecondary,
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    flex: "1",
                  }}
                >
                  Plataforma completa de e-commerce com React, TypeScript e Node.js. 
                  Sistema de pagamentos integrado e painel administrativo avançado.
                </p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                  <span style={{ 
                    backgroundColor: colors.accent, 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>React</span>
                  <span style={{ 
                    backgroundColor: colors.accent, 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>TypeScript</span>
                  <span style={{ 
                    backgroundColor: colors.accent, 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>Node.js</span>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <SpotlightCard 
              spotlightColor="rgba(231, 76, 60, 0.3)"
              theme={theme}
              backgroundColor={theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}
              borderColor={theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
            >
              <div style={{ textAlign: "center", height: "100%", display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    backgroundColor: colors.surface,
                    border: `2px dashed ${colors.border}`,
                    borderRadius: "12px",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: colors.textSecondary,
                  }}
                >
                  Imagem do Projeto
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: colors.text,
                    marginBottom: "15px",
                  }}
                >
                  App Mobile Inovador
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: colors.textSecondary,
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    flex: "1",
                  }}
                >
                  Aplicativo mobile com interface moderna e funcionalidades avançadas. 
                  Desenvolvido com React Native e integração com APIs REST.
                </p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                  <span style={{ 
                    backgroundColor: colors.error, 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>React Native</span>
                  <span style={{ 
                    backgroundColor: colors.error, 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>APIs</span>
                  <span style={{ 
                    backgroundColor: colors.error, 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>Firebase</span>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <SpotlightCard 
              spotlightColor="rgba(39, 174, 96, 0.3)"
              theme={theme}
              backgroundColor={theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}
              borderColor={theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
            >
              <div style={{ textAlign: "center", height: "100%", display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    backgroundColor: colors.surface,
                    border: `2px dashed ${colors.border}`,
                    borderRadius: "12px",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: colors.textSecondary,
                  }}
                >
                  Imagem do Projeto
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: colors.text,
                    marginBottom: "15px",
                  }}
                >
                  Sistema Empresarial
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: colors.textSecondary,
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    flex: "1",
                  }}
                >
                  Sistema completo de gestão empresarial com dashboard analytics, 
                  relatórios em tempo real e módulos de CRM integrados.
                </p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                  <span style={{ 
                    backgroundColor: colors.success, 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>Vue.js</span>
                  <span style={{ 
                    backgroundColor: colors.success, 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>Python</span>
                  <span style={{ 
                    backgroundColor: colors.success, 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>PostgreSQL</span>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <SpotlightCard 
              spotlightColor="rgba(155, 89, 182, 0.3)"
              theme={theme}
              backgroundColor={theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}
              borderColor={theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
            >
              <div style={{ textAlign: "center", height: "100%", display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    backgroundColor: colors.surface,
                    border: `2px dashed ${colors.border}`,
                    borderRadius: "12px",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: colors.textSecondary,
                  }}
                >
                  Imagem do Projeto
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: colors.text,
                    marginBottom: "15px",
                  }}
                >
                  Landing Page Criativa
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: colors.textSecondary,
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    flex: "1",
                  }}
                >
                  Landing page moderna com animações fluidas e design responsivo. 
                  Otimizada para conversão e performance máxima.
                </p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                  <span style={{ 
                    backgroundColor: "#9b59b6", 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>HTML5</span>
                  <span style={{ 
                    backgroundColor: "#9b59b6", 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>CSS3</span>
                  <span style={{ 
                    backgroundColor: "#9b59b6", 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>GSAP</span>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <SpotlightCard 
              spotlightColor="rgba(241, 196, 15, 0.3)"
              theme={theme}
              backgroundColor={theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}
              borderColor={theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
            >
              <div style={{ textAlign: "center", height: "100%", display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    backgroundColor: colors.surface,
                    border: `2px dashed ${colors.border}`,
                    borderRadius: "12px",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: colors.textSecondary,
                  }}
                >
                  Imagem do Projeto
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: colors.text,
                    marginBottom: "15px",
                  }}
                >
                  Dashboard Analytics
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: colors.textSecondary,
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    flex: "1",
                  }}
                >
                  Dashboard interativo com gráficos em tempo real e métricas avançadas. 
                  Interface intuitiva para análise de dados complexos.
                </p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                  <span style={{ 
                    backgroundColor: "#f1c40f", 
                    color: "#000", 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>D3.js</span>
                  <span style={{ 
                    backgroundColor: "#f1c40f", 
                    color: "#000", 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>Chart.js</span>
                  <span style={{ 
                    backgroundColor: "#f1c40f", 
                    color: "#000", 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>Angular</span>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <SpotlightCard 
              spotlightColor="rgba(26, 188, 156, 0.3)"
              theme={theme}
              backgroundColor={theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}
              borderColor={theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
            >
              <div style={{ textAlign: "center", height: "100%", display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    backgroundColor: colors.surface,
                    border: `2px dashed ${colors.border}`,
                    borderRadius: "12px",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: colors.textSecondary,
                  }}
                >
                  Imagem do Projeto
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: colors.text,
                    marginBottom: "15px",
                  }}
                >
                  API RESTful Avançada
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: colors.textSecondary,
                    lineHeight: "1.6",
                    marginBottom: "20px",
                    flex: "1",
                  }}
                >
                  API robusta com autenticação JWT, documentação Swagger e 
                  arquitetura escalável para aplicações de grande porte.
                </p>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                  <span style={{ 
                    backgroundColor: "#1abc9c", 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>Express.js</span>
                  <span style={{ 
                    backgroundColor: "#1abc9c", 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>MongoDB</span>
                  <span style={{ 
                    backgroundColor: "#1abc9c", 
                    color: colors.text, 
                    padding: "4px 12px", 
                    borderRadius: "12px", 
                    fontSize: "12px" 
                  }}>JWT</span>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>

      {/* Seção de Serviços */}
      <div
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "30px",
            color: colors.text,
            textAlign: "center",
          }}
        >
          Nossos Serviços
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginTop: "50px",
          }}
        >
          <ScrollReveal delay={200}>
            <div
              style={{
                backgroundColor: colors.surface,
                padding: "30px",
                borderRadius: "12px",
                border: `1px solid ${colors.border}`,
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: colors.accent,
                  marginBottom: "15px",
                }}
              >
                Desenvolvimento Web
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: colors.textSecondary,
                  lineHeight: "1.6",
                }}
              >
                Criamos websites modernos e responsivos utilizando as melhores
                tecnologias do mercado como React, TypeScript e Vite.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div
              style={{
                backgroundColor: colors.surface,
                padding: "30px",
                borderRadius: "12px",
                border: `1px solid ${colors.border}`,
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: colors.error,
                  marginBottom: "15px",
                }}
              >
                Design UX/UI
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: colors.textSecondary,
                  lineHeight: "1.6",
                }}
              >
                Desenvolvemos interfaces intuitivas e atrativas que
                proporcionam a melhor experiência para seus usuários.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div
              style={{
                backgroundColor: colors.surface,
                padding: "30px",
                borderRadius: "12px",
                border: `1px solid ${colors.border}`,
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: colors.success,
                  marginBottom: "15px",
                }}
              >
                Consultoria Digital
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: colors.textSecondary,
                  lineHeight: "1.6",
                }}
              >
                Nossa equipe especializada está pronta para ajudar sua empresa
                na transformação digital.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Call to Action */}
      <ScrollReveal delay={200}>
        <div
          style={{
            textAlign: "center",
            backgroundColor: colors.surface,
            color: colors.text,
            padding: "60px 20px",
            margin: "40px 20px",
            borderRadius: "12px",
            border: `1px solid ${colors.border}`,
          }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Pronto para começar?
          </h2>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "40px",
              color: colors.textSecondary,
            }}
          >
            Entre em contato conosco e descubra como podemos ajudar seu
            negócio.
          </p>
          <button
            style={{
              backgroundColor: colors.success,
              color: colors.text,
              border: "none",
              padding: "20px 40px",
              fontSize: "18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s",
              boxShadow: `0 4px 15px rgba(39, 174, 96, 0.4)`,
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = colors.successHover;
              target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = colors.success;
              target.style.transform = "translateY(0)";
            }}
          >
            Fale Conosco
          </button>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Home;
