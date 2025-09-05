import Threads from './Threads';

const ReactBitsDemo = () => {
  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '20px',
      border: '1px solid #e9ecef'
    }}>
      <h3 style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: '10px'
      }}>
        React Bits - Threads Component
      </h3>
      <p style={{
        fontSize: '14px',
        color: '#7f8c8d',
        lineHeight: '1.5',
        marginBottom: '15px'
      }}>
        Este é o componente Threads do React Bits - uma animação de linhas fluídas que criam um padrão semelhante a fios em movimento.
      </p>
      
      <div style={{
        backgroundColor: '#000',
        padding: '0',
        borderRadius: '6px',
        height: '300px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Threads 
          color={[0.2, 0.6, 1.0]} 
          amplitude={1.2}
          distance={0.3}
          enableMouseInteraction={true}
        />
      </div>

      <div style={{
        backgroundColor: '#ffffff',
        padding: '15px',
        borderRadius: '6px',
        marginTop: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h4 style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#2c3e50',
          marginBottom: '8px'
        }}>
          Características do Threads:
        </h4>
        <ul style={{
          fontSize: '14px',
          color: '#7f8c8d',
          lineHeight: '1.5',
          paddingLeft: '20px'
        }}>
          <li>🎨 Animação WebGL suave e performática</li>
          <li>�️ Interação com mouse em tempo real</li>
          <li>⚙️ Parâmetros customizáveis (cor, amplitude, distância)</li>
          <li>� Responsivo e adaptável a qualquer tamanho</li>
          <li>🎯 Baseado em shaders GLSL para máxima performance</li>
        </ul>
      </div>
    </div>
  );
};

export default ReactBitsDemo;
