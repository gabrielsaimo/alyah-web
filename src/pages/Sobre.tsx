const Sobre = () => {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#0a0a0a',
      minHeight: '100vh'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '40px',
        color: '#ffffff',
        fontSize: '3rem',
        fontWeight: 'bold'
      }}>
        Sobre a Alyah Web
      </h1>
      
      <div style={{
        backgroundColor: '#1a1a1a',
        padding: '40px 20px',
        borderRadius: '12px',
        marginBottom: '40px',
        border: '1px solid #333333'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#3498db',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Nossa História
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#cccccc',
          lineHeight: '1.8',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          A Alyah Web nasceu da paixão por criar soluções digitais inovadoras e de alta qualidade. 
          Nossa equipe é formada por profissionais experientes e dedicados, que trabalham com as 
          mais modernas tecnologias do mercado para entregar resultados excepcionais.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginBottom: '40px'
      }}>
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '30px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #333333',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement;
          target.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          target.style.transform = 'translateY(0)';
        }}
        >
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#3498db',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#fff'
          }}>
            🎯
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#ffffff',
            marginBottom: '15px'
          }}>
            Nossa Missão
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#cccccc',
            lineHeight: '1.6'
          }}>
            Transformar ideias em realidade digital, criando soluções web que impulsionam 
            o crescimento e sucesso dos nossos clientes.
          </p>
        </div>

        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '30px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #333333',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement;
          target.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          target.style.transform = 'translateY(0)';
        }}
        >
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#e74c3c',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#fff'
          }}>
            👁️
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#ffffff',
            marginBottom: '15px'
          }}>
            Nossa Visão
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#cccccc',
            lineHeight: '1.6'
          }}>
            Ser referência em desenvolvimento web, reconhecida pela excelência, 
            inovação e compromisso com a satisfação dos clientes.
          </p>
        </div>

        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '30px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #333333',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement;
          target.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          target.style.transform = 'translateY(0)';
        }}
        >
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#27ae60',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#fff'
          }}>
            ⭐
          </div>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#ffffff',
            marginBottom: '15px'
          }}>
            Nossos Valores
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#cccccc',
            lineHeight: '1.6'
          }}>
            Qualidade, transparência, inovação e compromisso são os pilares 
            que guiam todos os nossos projetos e relacionamentos.
          </p>
        </div>
      </div>

      <div style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '40px 20px',
        borderRadius: '12px',
        textAlign: 'center',
        border: '1px solid #333333'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '20px',
          color: '#ffffff'
        }}>
          Tecnologias que Utilizamos
        </h2>
        <p style={{
          fontSize: '16px',
          marginBottom: '30px',
          color: '#cccccc'
        }}>
          Trabalhamos com as mais modernas ferramentas e frameworks
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          justifyContent: 'center'
        }}>
          {['React', 'TypeScript', 'Vite', 'Node.js', 'Next.js', 'Tailwind CSS'].map((tech) => (
            <span 
              key={tech}
              style={{
                backgroundColor: '#333333',
                padding: '10px 20px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#ffffff',
                border: '1px solid #555555'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sobre;
