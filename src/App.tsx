import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import FloatingNavbar from './components/FloatingNavbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div style={{ minHeight: '100vh' }}>
          <FloatingNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
