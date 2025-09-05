import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import GradualSpacing from '../components/GradualSpacing';
import BlurIn from '../components/BlurIn';
import FadeIn from '../components/FadeIn';
import Threads from '../components/Threads';

const Contato = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    servico: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Monta a mensagem para o WhatsApp
    const mensagemWhatsApp = `*Nova Solicitação de Orçamento*

*Nome:* ${formData.nome}
*Email:* ${formData.email}
${formData.empresa ? `*Empresa:* ${formData.empresa}` : ''}
*Serviço de Interesse:* ${formData.servico}

*Mensagem:*
${formData.mensagem}

---
_Enviado através do site Alyah`;

    // Número do WhatsApp (substitua pelo número real da empresa)
    const numeroWhatsApp = '5534984300932'; // Formato: 55 (país) + 34 (DDD) + 84300932 (número)
    
    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagemWhatsApp);
    
    // Cria o link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    
    // Abre o WhatsApp
    window.open(linkWhatsApp, '_blank');
    
    // Limpa o formulário
    setFormData({
      nome: '',
      email: '',
      empresa: '',
      servico: '',
      mensagem: ''
    });
  };

  const customColors = {
    background: theme === 'dark' ? '#0a0a0a' : '#ffffff',
    text: theme === 'dark' ? '#ffffff' : '#000000',
    textSecondary: theme === 'dark' ? '#a0a0a0' : '#666666',
    accent: theme === 'dark' ? '#8b5cf6' : '#6366f1',
    card: theme === 'dark' ? '#1a1a1a' : '#f8fafc',
    border: theme === 'dark' ? '#333333' : '#e2e8f0'
  };

  const inputStyle = {
    width: '100%',
    padding: '15px 20px',
    borderRadius: '12px',
    border: `2px solid ${customColors.border}`,
    backgroundColor: customColors.card,
    color: customColors.text,
    fontSize: '16px',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: customColors.background,
      color: customColors.text
    }}>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        width: '100vw',
        height: '60vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Background Animation */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          <Threads />
        </div>

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          zIndex: 2
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          padding: '0 20px'
        }}>
          <BlurIn delay={200}>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 'bold',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              <GradualSpacing 
                text="Vamos Conversar"
                delayMultiple={0.1}
              />
            </h1>
          </BlurIn>
          
          <FadeIn delay={800} direction="up">
            <p style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              color: customColors.textSecondary,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Pronto para transformar sua ideia em realidade? Entre em contato conosco.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        padding: '100px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '80px',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <FadeIn delay={200} direction="left">
            <div style={{
              backgroundColor: customColors.card,
              padding: '50px',
              borderRadius: '20px',
              border: `1px solid ${customColors.border}`,
              boxShadow: isDark 
                ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
                : '0 20px 40px rgba(0, 0, 0, 0.1)'
            }}>
              <BlurIn delay={400}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '30px',
                  color: customColors.text
                }}>
                  <GradualSpacing 
                    text="Solicitar Orçamento"
                    delayMultiple={0.1}
                  />
                </h2>
              </BlurIn>

              <form onSubmit={handleSubmit}>
                <FadeIn delay={600} direction="up">
                  <div style={{ marginBottom: '25px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      fontWeight: 'bold',
                      color: customColors.text,
                      fontSize: '14px'
                    }}>
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome completo"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = customColors.accent;
                        e.target.style.boxShadow = `0 0 0 3px ${customColors.accent}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = customColors.border;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={700} direction="up">
                  <div style={{ marginBottom: '25px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      fontWeight: 'bold',
                      color: customColors.text,
                      fontSize: '14px'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = customColors.accent;
                        e.target.style.boxShadow = `0 0 0 3px ${customColors.accent}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = customColors.border;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={800} direction="up">
                  <div style={{ marginBottom: '25px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      fontWeight: 'bold',
                      color: customColors.text,
                      fontSize: '14px'
                    }}>
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa (opcional)"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = customColors.accent;
                        e.target.style.boxShadow = `0 0 0 3px ${customColors.accent}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = customColors.border;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={850} direction="up">
                  <div style={{ marginBottom: '25px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      fontWeight: 'bold',
                      color: customColors.text,
                      fontSize: '14px'
                    }}>
                      Serviço de Interesse *
                    </label>
                    <select
                      name="servico"
                      value={formData.servico}
                      onChange={handleInputChange}
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = customColors.accent;
                        e.target.style.boxShadow = `0 0 0 3px ${customColors.accent}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = customColors.border;
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Sistema Web">Sistema Web</option>
                      <option value="Consultoria">Consultoria</option>
                      <option value="Manutenção">Manutenção</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </FadeIn>

                <FadeIn delay={900} direction="up">
                  <div style={{ marginBottom: '35px' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '10px',
                      fontWeight: 'bold',
                      color: customColors.text,
                      fontSize: '14px'
                    }}>
                      Mensagem *
                    </label>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Conte-nos sobre seu projeto e suas necessidades..."
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '140px'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = customColors.accent;
                        e.target.style.boxShadow = `0 0 0 3px ${customColors.accent}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = customColors.border;
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={1000} direction="up">
                  <button
                    type="submit"
                    style={{
                      backgroundColor: customColors.accent,
                      color: customColors.background,
                      border: 'none',
                      padding: '18px 40px',
                      fontSize: '16px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      width: '100%',
                      transition: 'all 0.3s ease',
                      boxShadow: `0 4px 15px ${customColors.accent}40`
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.transform = 'translateY(-2px)';
                      target.style.boxShadow = `0 8px 25px ${customColors.accent}60`;
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.transform = 'translateY(0)';
                      target.style.boxShadow = `0 4px 15px ${customColors.accent}40`;
                    }}
                  >
                    Enviar via WhatsApp
                  </button>
                </FadeIn>
              </form>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={400} direction="right">
            <div style={{ paddingTop: '20px' }}>
              <BlurIn delay={600}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  marginBottom: '40px',
                  color: customColors.text
                }}>
                  Outras Formas de Contato
                </h3>
              </BlurIn>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <FadeIn delay={800} direction="up">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '25px',
                    backgroundColor: customColors.card,
                    borderRadius: '15px',
                    border: `1px solid ${customColors.border}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = isDark 
                      ? '0 10px 30px rgba(0, 0, 0, 0.4)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: customColors.accent,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      color: 'white'
                    }}>
                      📧
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>Email</h4>
                      <p style={{ margin: 0, color: customColors.textSecondary }}>contato@alyahweb.com</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={900} direction="up">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '25px',
                    backgroundColor: customColors.card,
                    borderRadius: '15px',
                    border: `1px solid ${customColors.border}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = isDark 
                      ? '0 10px 30px rgba(0, 0, 0, 0.4)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: customColors.accent,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      color: 'white'
                    }}>
                      💬
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>WhatsApp</h4>
                      <p style={{ margin: 0, color: customColors.textSecondary }}>(34) 8430-0932</p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={1000} direction="up">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '25px',
                    backgroundColor: customColors.card,
                    borderRadius: '15px',
                    border: `1px solid ${customColors.border}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = isDark 
                      ? '0 10px 30px rgba(0, 0, 0, 0.4)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: customColors.accent,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      color: 'white'
                    }}>
                      📍
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold' }}>Localização</h4>
                      <p style={{ margin: 0, color: customColors.textSecondary }}>São Paulo, SP</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{
        padding: '100px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: `1px solid ${customColors.border}`
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <BlurIn delay={200}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: customColors.text
            }}>
              <GradualSpacing 
                text="Perguntas Frequentes"
                delayMultiple={0.1}
              />
            </h2>
          </BlurIn>
          <FadeIn delay={600} direction="up">
            <p style={{
              fontSize: '1.2rem',
              color: customColors.textSecondary,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Tire suas principais dúvidas sobre nossos serviços
            </p>
          </FadeIn>
        </div>

        <div style={{
          display: 'grid',
          gap: '30px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {[
            {
              pergunta: "Qual o prazo para desenvolvimento de um site?",
              resposta: "O prazo varia conforme a complexidade do projeto. Sites simples podem ser entregues em 7-15 dias, enquanto projetos mais complexos podem levar de 30-60 dias."
            },
            {
              pergunta: "Vocês oferecem suporte após a entrega?",
              resposta: "Sim! Oferecemos 30 dias de suporte gratuito após a entrega. Também temos planos de manutenção mensais para atualizações e melhorias contínuas."
            },
            {
              pergunta: "O site será responsivo?",
              resposta: "Absolutamente! Todos os nossos sites são desenvolvidos com design responsivo, garantindo perfeita visualização em dispositivos móveis, tablets e desktops."
            },
            {
              pergunta: "Como funciona o processo de pagamento?",
              resposta: "Trabalhamos com pagamento parcelado: 50% para iniciar o projeto e 50% na entrega. Aceitamos PIX, transferência bancária e cartão de crédito."
            }
          ].map((faq, index) => (
            <FadeIn key={index} delay={800 + index * 200} direction="up">
              <div style={{
                backgroundColor: customColors.card,
                padding: '30px',
                borderRadius: '15px',
                border: `1px solid ${customColors.border}`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = isDark 
                  ? '0 10px 30px rgba(0, 0, 0, 0.4)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px'
                }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: customColors.accent,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      color: customColors.text
                    }}>
                      {faq.pergunta}
                    </h3>
                    <p style={{
                      color: customColors.textSecondary,
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contato;
