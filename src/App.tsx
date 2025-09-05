import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingNavbar from './components/FloatingNavbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
        <FloatingNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
