import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook que força o scroll para o topo da página sempre que a rota muda
 * Resolve o problema de manter a posição de scroll ao navegar entre páginas
 */
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll para o topo sempre que a localização (rota) mudar
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Scroll suave para melhor UX
    });
  }, [location.pathname]); // Executa sempre que o pathname mudar
};

export default useScrollToTop;
