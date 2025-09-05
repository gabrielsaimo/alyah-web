import Threads from '../components/Threads';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Seção Hero com Threads como fundo */}
      <div style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Threads como fundo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          <Threads 
            color={[0.2, 0.6, 1.0]} 
            amplitude={1.5}
            distance={0.4}
            enableMouseInteraction={true}
          />
        </div>

        {/* Overlay escuro para melhor legibilidade */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 2
        }} />

        {/* Conteúdo principal */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: '#ffffff',
          maxWidth: '800px',
          padding: '20px'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}>
            Bem-vindo à Alyah Web
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            lineHeight: '1.6',
            marginBottom: '40px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
          }}>
            Criamos experiências digitais inovadoras com as mais modernas tecnologias
          </p>

          <button style={{
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s',
            boxShadow: '0 4px 15px rgba(52, 152, 219, 0.4)'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = '#2980b9';
            target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = '#3498db';
            target.style.transform = 'translateY(0)';
          }}
          >
            Descubra Nossos Serviços
          </button>
        </div>
      </div>

      {/* Seção de Serviços */}
      <div style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold',
          marginBottom: '30px',
          color: '#ffffff',
          textAlign: 'center'
        }}>
          Nossos Serviços
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '50px'
        }}>
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '30px',
            borderRadius: '12px',
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
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3498db', marginBottom: '15px' }}>
              Desenvolvimento Web
            </h3>
            <p style={{ fontSize: '16px', color: '#cccccc', lineHeight: '1.6' }}>
              Criamos websites modernos e responsivos utilizando as melhores tecnologias do mercado como React, TypeScript e Vite.
            </p>
          </div>

          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '30px',
            borderRadius: '12px',
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
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e74c3c', marginBottom: '15px' }}>
              Design UX/UI
            </h3>
            <p style={{ fontSize: '16px', color: '#cccccc', lineHeight: '1.6' }}>
              Desenvolvemos interfaces intuitivas e atrativas que proporcionam a melhor experiência para seus usuários.
            </p>
          </div>

          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '30px',
            borderRadius: '12px',
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
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#27ae60', marginBottom: '15px' }}>
              Consultoria Digital
            </h3>
            <p style={{ fontSize: '16px', color: '#cccccc', lineHeight: '1.6' }}>
              Nossa equipe especializada está pronta para ajudar sua empresa na transformação digital.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        textAlign: 'center',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '60px 20px',
        margin: '40px 20px',
        borderRadius: '12px',
        border: '1px solid #333333'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Pronto para começar?
        </h2>
        <p style={{ fontSize: '18px', marginBottom: '40px', color: '#cccccc' }}>
          Entre em contato conosco e descubra como podemos ajudar seu negócio.
        </p>
        <button style={{
          backgroundColor: '#27ae60',
          color: '#fff',
          border: 'none',
          padding: '20px 40px',
          fontSize: '18px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s',
          boxShadow: '0 4px 15px rgba(39, 174, 96, 0.4)'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = '#219a52';
          target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = '#27ae60';
          target.style.transform = 'translateY(0)';
        }}
        >
          Fale Conosco
        </button>
      </div>
    </div>
  );
};

export default Home;
