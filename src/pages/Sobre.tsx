import { useTheme } from '../context/ThemeContext';
import GradualSpacing from '../components/GradualSpacing';
import BlurIn from '../components/BlurIn';
import NumberTicker from '../components/NumberTicker';
import Threads from '../components/Threads';

const Sobre = () => {
  const { colors, theme } = useTheme();

  return (
    <div style={{
      backgroundColor: colors.background,
      minHeight: '100vh',
      color: colors.text
    }}>
      {/* Hero Section */}
      <div style={{
        padding: '120px 20px 80px',
        width: '100vw',
        margin: '0',
        textAlign: 'center',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Background Animation */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          zIndex: 0
        }}>
          <Threads 
            color={theme === "dark" ? [0.2, 0.6, 1.0] : [0.4, 0.4, 0.4]}
            amplitude={0.8}
            distance={0.2}
            enableMouseInteraction={true}
          />
        </div>

        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}>
          <BlurIn delay={200}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 'bold',
                margin: '0 0 20px 0',
                lineHeight: '1.2'
              }}>
                <GradualSpacing 
                  text="Lorem ipsum dolor sit"
                  delayMultiple={0.05}
                />
              </h1>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 'bold',
                margin: '0 0 40px 0',
                color: colors.accent,
                lineHeight: '1.2'
              }}>
                <GradualSpacing 
                  text="& consectetur adipiscing"
                  delayMultiple={0.05}
                />
              </h2>
            </div>
          </BlurIn>

                    <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            color: colors.textSecondary,
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Somos uma agência digital focada em transformar ideias em experiências digitais excepcionais. 
            Nossa paixão é criar soluções que conectam marcas aos seus públicos de forma autêntica e impactante.
          </p>

            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '50px',
              flexWrap: 'wrap'
            }}>
              <button style={{
                backgroundColor: colors.accent,
                color: colors.background,
                padding: '15px 30px',
                borderRadius: '30px',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 15px ${colors.accent}40`
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(-3px)';
                target.style.boxShadow = `0 8px 25px ${colors.accent}60`;
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = `0 4px 15px ${colors.accent}40`;
              }}
              >
                Lorem Ipsum
              </button>
            </div>

          {/* Skills Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gap: '20px',
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '0 20px'
            }}>
              {[
                { name: 'HTML', placeholder: 'HTML Logo' },
                { name: 'CSS', placeholder: 'CSS Logo' },
                { name: 'JavaScript', placeholder: 'JS Logo' },
                { name: 'TypeScript', placeholder: 'TS Logo' },
                { name: 'React.js', placeholder: 'React Logo' },
                { name: 'Next.js', placeholder: 'Next Logo' },
                { name: 'Node.js', placeholder: 'Node Logo' },
                { name: 'Express.js', placeholder: 'Express Logo' },
                { name: 'MongoDB', placeholder: 'MongoDB Logo' },
                { name: 'PostgreSQL', placeholder: 'PostgreSQL Logo' },
                { name: 'Docker', placeholder: 'Docker Logo' },
                { name: 'AWS', placeholder: 'AWS Logo' },
                { name: 'Figma', placeholder: 'Figma Logo' },
                { name: 'Git', placeholder: 'Git Logo' },
                { name: 'GSAP', placeholder: 'GSAP Logo' },
                { name: 'Tailwind', placeholder: 'Tailwind Logo' }
              ].map((skill, index) => (
                <BlurIn key={skill.name} delay={1400 + index * 100}>
                  <div style={{
                    backgroundColor: colors.surface,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '12px',
                    padding: '20px 15px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = 'translateY(-8px) scale(1.05)';
                    target.style.borderColor = colors.accent;
                    target.style.boxShadow = `0 10px 30px ${colors.accent}20`;
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = 'translateY(0) scale(1)';
                    target.style.borderColor = colors.border;
                    target.style.boxShadow = 'none';
                  }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: colors.surface,
                      border: `2px dashed ${colors.border}`,
                      borderRadius: '8px',
                      margin: '0 auto 10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      color: colors.textSecondary,
                      textAlign: 'center'
                    }}>
                      {skill.placeholder}
                    </div>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: colors.text
                    }}>
                      {skill.name}
                    </span>
                  </div>
                </BlurIn>
              ))}
            </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
            <div>
              <NumberTicker 
                value={50}
                suffix="+"
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: colors.accent,
                  marginBottom: '10px'
                }}
              />
              <p style={{
                fontSize: '18px',
                color: colors.textSecondary,
                margin: 0
              }}>
                Lorem Ipsum
              </p>
            </div>

            <div>
              <NumberTicker 
                value={5}
                suffix="+"
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: colors.accent,
                  marginBottom: '10px'
                }}
              />
              <p style={{
                fontSize: '18px',
                color: colors.textSecondary,
                margin: 0
              }}>
                Dolor Sit Amet
              </p>
            </div>

            <div>
              <NumberTicker 
                value={30}
                suffix="+"
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: colors.accent,
                  marginBottom: '10px'
                }}
              />
              <p style={{
                fontSize: '18px',
                color: colors.textSecondary,
                margin: 0
              }}>
                Consectetur Elit
              </p>
            </div>

            <div>
              <NumberTicker 
                value={100}
                suffix="%"
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: colors.accent,
                  marginBottom: '10px'
                }}
              />
              <p style={{
                fontSize: '18px',
                color: colors.textSecondary,
                margin: 0
              }}>
                Adipiscing Elit
              </p>
            </div>
        </div>
      </div>

      {/* Experience Section */}
      <div style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <BlurIn delay={200}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              <GradualSpacing 
                text="L O R E M  I P S U M"
                delayMultiple={0.1}
              />
            </h2>
          </BlurIn>
            <p style={{
              fontSize: '18px',
              color: colors.textSecondary,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          {[
            {
              company: 'Lorem Corp',
              position: 'Senior Lorem Ipsum',
              period: 'Jan 2023 — Presente',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              placeholder: 'Logo Lorem'
            },
            {
              company: 'Dolor Solutions',
              position: 'Consectetur Developer',
              period: 'Mar 2022 — Dez 2022',
              description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              placeholder: 'Logo Dolor'
            },
            {
              company: 'Ipsum Agency',
              position: 'Junior Adipiscing',
              period: 'Jun 2021 — Feb 2022',
              description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
              placeholder: 'Logo Ipsum'
            }
          ].map((job, index) => (
              <div key={index} style={{
                backgroundColor: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: '16px',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                transition: 'all 0.4s ease',
                flexWrap: 'wrap'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(-5px)';
                target.style.borderColor = colors.accent;
                target.style.boxShadow = `0 20px 40px ${colors.accent}15`;
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.borderColor = colors.border;
                target.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: colors.surface,
                  border: `2px dashed ${colors.border}`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  flexShrink: 0,
                  color: colors.textSecondary,
                  textAlign: 'center'
                }}>
                  {job.placeholder}
                </div>
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '5px',
                    color: colors.text
                  }}>
                    {job.position}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: colors.accent,
                    marginBottom: '5px',
                    fontWeight: 'bold'
                  }}>
                    @{job.company}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: colors.textSecondary,
                    marginBottom: '15px',
                    opacity: 0.8
                  }}>
                    {job.period}
                  </p>
                  <p style={{
                    fontSize: '16px',
                    color: colors.textSecondary,
                    lineHeight: '1.6'
                  }}>
                    {job.description}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: `1px solid ${colors.border}`
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <BlurIn delay={200}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              <GradualSpacing 
                text="D O L O R  S I T  A M E T"
                delayMultiple={0.08}
              />
            </h2>
          </BlurIn>
            <p style={{
              fontSize: '18px',
              color: colors.textSecondary,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua enim ad minim.
            </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {[
            {
              step: '01',
              title: 'Lorem Ipsum',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
              placeholder: 'Ícone Lorem'
            },
            {
              step: '02',
              title: 'Dolor Sit',
              description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
              placeholder: 'Ícone Dolor'
            },
            {
              step: '03',
              title: 'Consectetur',
              description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
              placeholder: 'Ícone Design'
            },
            {
              step: '04',
              title: 'Adipiscing',
              description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
              placeholder: 'Ícone Dev'
            },
            {
              step: '05',
              title: 'Magna Aliqua',
              description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
              placeholder: 'Ícone QA'
            }
          ].map((process, index) => (
            <BlurIn key={index} delay={400 + index * 200}>
              <div style={{
                backgroundColor: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: '16px',
                padding: '30px',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(-8px) scale(1.02)';
                target.style.borderColor = colors.accent;
                target.style.boxShadow = `0 20px 40px ${colors.accent}15`;
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.transform = 'translateY(0) scale(1)';
                target.style.borderColor = colors.border;
                target.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: colors.surface,
                  border: `2px dashed ${colors.border}`,
                  borderRadius: '12px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: colors.textSecondary,
                  textAlign: 'center'
                }}>
                  {process.placeholder}
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: colors.accent,
                  marginBottom: '10px'
                }}>
                  {process.step}.
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: colors.text
                }}>
                  {process.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: colors.textSecondary,
                  lineHeight: '1.6'
                }}>
                  {process.description}
                </p>
              </div>
            </BlurIn>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        padding: '80px 20px 120px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        borderTop: `1px solid ${colors.border}`
      }}>
        <BlurIn delay={200}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '30px',
            lineHeight: '1.3'
          }}>
            <GradualSpacing 
              text="Lorem ipsum dolor sit amet consectetur."
              delayMultiple={0.05}
            />
          </h2>
        </BlurIn>
        
          <button style={{
            backgroundColor: colors.accent,
            color: colors.background,
            padding: '20px 40px',
            borderRadius: '30px',
            border: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            marginTop: '20px',
            boxShadow: `0 8px 30px ${colors.accent}40`
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget as HTMLElement;
            target.style.transform = 'translateY(-5px) scale(1.05)';
            target.style.boxShadow = `0 15px 50px ${colors.accent}60`;
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget as HTMLElement;
            target.style.transform = 'translateY(0) scale(1)';
            target.style.boxShadow = `0 8px 30px ${colors.accent}40`;
          }}
          >
            Lorem Ipsum
          </button>
      </div>
    </div>
  );
};

export default Sobre;
