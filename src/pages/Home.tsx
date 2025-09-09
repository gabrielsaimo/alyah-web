import { useTheme } from "../context/ThemeContext";
import Threads from "../components/Threads";
import ScrollReveal from "../components/ScrollReveal";

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
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <ScrollReveal
            textClassName="scroll-reveal-title"
            containerClassName="scroll-reveal-container"
            baseOpacity={0.2}
            baseRotation={2}
          >
            Sobre Mim
          </ScrollReveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "60px",
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              backgroundColor: colors.surface,
              padding: "40px",
              borderRadius: "20px",
              border: `1px solid ${colors.border}`,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                backgroundColor: colors.accent,
                borderRadius: "50%",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "60px",
                color: colors.text,
                fontWeight: "bold",
              }}
            >
              A
            </div>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: colors.text,
                marginBottom: "10px",
              }}
            >
              MARCOS BESSA
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: colors.accent,
                fontWeight: "500",
              }}
            >
              Desenvolvedor Full Stack
            </p>
          </div>

          <div>
            <div style={{ marginBottom: "25px" }}>
              <ScrollReveal
                baseOpacity={0.3}
                baseRotation={1}
                textClassName="scroll-reveal-paragraph"
              >
                Olá! Sou um desenvolvedor que criar experiências digitais
                incríveis. Com mais de 15 anos de experiência, especializo-me em
                tecnologias modernas como React, TypeScript, Node.js e design
                responsivo. Minha missão é transformar ideias em soluções
                digitais funcionais e elegantes, sempre focando na melhor
                experiência do usuário e nas melhores práticas de
                desenvolvimento. Quando não estou codando, gosto de explorar
                novas tecnologias, contribuir para projetos open source e
                compartilhar conhecimento com a comunidade de desenvolvedores.
              </ScrollReveal>
            </div>

            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              {["React", "TypeScript", "Node.js", "Vite", "Design UX/UI"].map(
                (skill) => (
                  <span
                    key={skill}
                    style={{
                      backgroundColor: colors.accent,
                      color: colors.text,
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "500",
                      opacity: 0.9,
                      transition: "all 0.3s",
                    }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
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
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <ScrollReveal
            textClassName="scroll-reveal-title"
            containerClassName="scroll-reveal-container"
            baseOpacity={0.2}
            baseRotation={2}
          >
            Nossos Serviços
          </ScrollReveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginTop: "50px",
          }}
        >
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
            <div>
              <ScrollReveal
                baseOpacity={0.4}
                baseRotation={0.5}
                textClassName="scroll-reveal-service"
              >
                Criamos websites modernos e responsivos utilizando as melhores
                tecnologias do mercado como React, TypeScript e Vite.
              </ScrollReveal>
            </div>
          </div>

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
            <div>
              <ScrollReveal
                baseOpacity={0.4}
                baseRotation={0.5}
                textClassName="scroll-reveal-service"
              >
                Desenvolvemos interfaces intuitivas e atrativas que proporcionam
                a melhor experiência para seus usuários.
              </ScrollReveal>
            </div>
          </div>

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
            <div>
              <ScrollReveal
                baseOpacity={0.4}
                baseRotation={0.5}
                textClassName="scroll-reveal-service"
              >
                Nossa equipe especializada está pronta para ajudar sua empresa
                na transformação digital.
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
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
        <div style={{ marginBottom: "20px" }}>
          <ScrollReveal
            textClassName="scroll-reveal-cta-title"
            containerClassName="scroll-reveal-container"
            baseOpacity={0.2}
            baseRotation={1.5}
          >
            Pronto para começar?
          </ScrollReveal>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <ScrollReveal
            baseOpacity={0.3}
            baseRotation={0.5}
            textClassName="scroll-reveal-cta-text"
          >
            Entre em contato conosco e descubra como podemos ajudar seu negócio.
          </ScrollReveal>
        </div>

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
    </div>
  );
};

export default Home;
