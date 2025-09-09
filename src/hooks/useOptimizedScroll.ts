import { useEffect, useRef, useState } from 'react';

export interface UseOptimizedScrollOptions {
  threshold?: number;      // Mínima diferença em px para atualizar
  maxIntervalMs?: number;  // Atualiza mesmo sem passar threshold após esse tempo
  enabled?: boolean;
}

interface ScrollData {
  y: number;
  direction: 1 | -1 | 0;
  changed: boolean;
}

export function useOptimizedScroll(options: UseOptimizedScrollOptions = {}): ScrollData {
  const { threshold = 6, maxIntervalMs = 120, enabled = true } = options;
  const [data, setData] = useState<ScrollData>({ y: 0, direction: 0, changed: false });
  const last = useRef({ y: 0, t: 0 });
  const ticking = useRef(false);

  useEffect(() => {
    if (!enabled) return;    
    const update = (time: number) => {
      const currentY = window.scrollY;
      const diff = Math.abs(currentY - last.current.y);
      const elapsed = time - last.current.t;
      if (diff >= threshold || elapsed >= maxIntervalMs) {
        const direction: 1 | -1 | 0 = currentY === last.current.y ? 0 : (currentY > last.current.y ? 1 : -1);
        last.current = { y: currentY, t: time };
        setData({ y: currentY, direction, changed: true });
      } else {
        setData(prev => ({ ...prev, changed: false }));
      }
      ticking.current = false;
    };
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold, maxIntervalMs, enabled]);

  return data;
}
