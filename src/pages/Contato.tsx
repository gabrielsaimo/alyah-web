import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contato = () => {
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box' as const,
    backgroundColor: colors.surface,
    color: colors.text
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: colors.background,
      minHeight: '100vh'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '40px',
        color: '#ffffff',
        fontSize: '3rem',
        fontWeight: 'bold'
      }}>
        Entre em Contato
      </h1>
      
      <div style={{
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '18px',
          color: '#cccccc',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Estamos prontos para ajudar você a transformar suas ideias em realidade. 
          Entre em contato conosco e vamos conversar sobre seu projeto!
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        {/* Informações de Contato */}
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid #333333'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#3498db',
            marginBottom: '30px'
          }}>
            Informações de Contato
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{
              fontSize: '1rem',
              color: '#ffffff',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              📧 Email
            </h3>
            <p style={{ color: '#cccccc', margin: 0 }}>
              contato@alyahweb.com.br
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{
              fontSize: '1rem',
              color: '#ffffff',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              📱 Telefone
            </h3>
            <p style={{ color: '#cccccc', margin: 0 }}>
              (11) 99999-9999
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{
              fontSize: '1rem',
              color: '#ffffff',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              📍 Localização
            </h3>
            <p style={{ color: '#cccccc', margin: 0 }}>
              São Paulo, SP - Brasil
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: '1rem',
              color: '#ffffff',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              🕒 Horário de Atendimento
            </h3>
            <p style={{ color: '#cccccc', margin: 0 }}>
              Segunda a Sexta: 9h às 18h<br />
              Sábado: 9h às 12h
            </p>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '40px 30px',
          borderRadius: '12px',
          border: '1px solid #333333'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#3498db',
            marginBottom: '30px'
          }}>
            Envie uma Mensagem
          </h2>          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#ffffff'
              }}>
                Nome *
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#555555'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#ffffff'
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#555555'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#ffffff'
              }}>
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#555555'}
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#ffffff'
              }}>
                Mensagem *
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                required
                rows={5}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '120px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#555555'}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#3498db',
                color: '#fff',
                border: 'none',
                padding: '15px 30px',
                fontSize: '16px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.backgroundColor = '#2980b9';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.backgroundColor = '#3498db';
              }}
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
