import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useScrollToTop } from './hooks/useScrollToTop';
import FloatingNavbar from './components/FloatingNavbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import './App.css';

function AppContent() {
  const { colors } = useTheme();
  
  // Hook que força scroll para o topo em mudanças de rota
  useScrollToTop();

  useEffect(() => {
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
  }, [colors]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <FloatingNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
