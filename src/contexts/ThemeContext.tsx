import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: {
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
    shadow: string;
    navBackground: string;
    navBorder: string;
    navShadow: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const darkTheme = {
  background: '#0a0a0a',
  surface: '#1a1a1a',
  text: '#ffffff',
  textSecondary: '#cccccc',
  accent: '#3498db',
  border: '#333333',
  shadow: 'rgba(0, 0, 0, 0.3)',
  navBackground: '0, 0, 0', // RGB values for rgba()
  navBorder: '255, 255, 255',
  navShadow: '0, 0, 0',
};

const lightTheme = {
  background: '#ffffff',
  surface: '#f8f9fa',
  text: '#2c3e50',
  textSecondary: '#7f8c8d',
  accent: '#3498db',
  border: '#e9ecef',
  shadow: 'rgba(0, 0, 0, 0.1)',
  navBackground: '255, 255, 255', // RGB values for rgba()
  navBorder: '0, 0, 0',
  navShadow: '0, 0, 0',
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  // Carrega o tema salvo no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('alyah-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Salva o tema no localStorage quando muda
  useEffect(() => {
    localStorage.setItem('alyah-theme', theme);
    
    // Aplica o tema no body para transições globais
    document.body.style.backgroundColor = theme === 'dark' ? darkTheme.background : lightTheme.background;
    document.body.style.color = theme === 'dark' ? darkTheme.text : lightTheme.text;
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const colors = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};
