import ScrollReveal from '../components/ScrollReveal';

const ScrollRevealDemo = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>
        Demonstração ScrollReveal
      </h1>
      
      <ScrollReveal delay={0}>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '40px',
          border: '1px solid #e9ecef'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            Primeiro elemento (sem delay)
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
            Este elemento aparece imediatamente quando entra na viewport.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div style={{
          backgroundColor: '#e3f2fd',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '40px',
          border: '1px solid #bbdefb'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            Segundo elemento (delay 200ms)
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#1976d2' }}>
            Este elemento aparece 200ms após entrar na viewport.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <div style={{
          backgroundColor: '#f3e5f5',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '40px',
          border: '1px solid #ce93d8'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            Terceiro elemento (delay 400ms)
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#7b1fa2' }}>
            Este elemento aparece 400ms após entrar na viewport.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={600}>
        <div style={{
          backgroundColor: '#e8f5e8',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '40px',
          border: '1px solid #a5d6a7'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            Quarto elemento (delay 600ms)
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#388e3c' }}>
            Este elemento aparece 600ms após entrar na viewport.
          </p>
        </div>
      </ScrollReveal>

      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '18px', color: '#999' }}>
          Role para baixo para ver os próximos elementos...
        </p>
      </div>

      <ScrollReveal delay={100}>
        <div style={{
          backgroundColor: '#fff3e0',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '40px',
          border: '1px solid #ffcc02'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            Elemento após scroll (delay 100ms)
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#f57c00' }}>
            Este elemento só aparece quando você rola até aqui!
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ScrollRevealDemo;
