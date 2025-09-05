import { Link } from 'react-router-dom';

const Navigation = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
    fontWeight: 'bold' as const,
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    display: 'block'
  };

  return (
    <nav style={{
      display: 'flex',
      gap: '20px',
      padding: '20px',
      backgroundColor: '#111111',
      borderBottom: '1px solid #333333',
      position: 'relative',
      zIndex: 10
    }}>
      <Link 
        to="/" 
        style={linkStyle}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = '#333333';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = 'transparent';
        }}
      >
        Home
      </Link>
      <Link 
        to="/sobre" 
        style={linkStyle}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = '#333333';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = 'transparent';
        }}
      >
        Sobre
      </Link>
      <Link 
        to="/contato" 
        style={linkStyle}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = '#333333';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement;
          target.style.backgroundColor = 'transparent';
        }}
      >
        Contato
      </Link>
    </nav>
  );
};

export default Navigation;
