import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeColors {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  accent: string;
  accentHover: string;
  border: string;
  success: string;
  successHover: string;
  error: string;
  warning: string;
  navBackground: string;
  navBorder: string;
  navShadow: string;
}

export interface ThemeContextType {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const darkTheme: ThemeColors = {
  background: '#0a0a0a',
  surface: '#1a1a1a',
  text: '#ffffff',
  textSecondary: '#cccccc',
  accent: '#3498db',
  accentHover: '#2980b9',
  border: '#333333',
  success: '#27ae60',
  successHover: '#219a52',
  error: '#e74c3c',
  warning: '#f39c12',
  navBackground: '10, 10, 10',
  navBorder: '51, 51, 51',
  navShadow: '0, 0, 0',
};

const lightTheme: ThemeColors = {
  background: '#ffffff',
  surface: '#f8f9fa',
  text: '#2c3e50',
  textSecondary: '#6c757d',
  accent: '#3498db',
  accentHover: '#2980b9',
  border: '#dee2e6',
  success: '#27ae60',
  successHover: '#219a52',
  error: '#e74c3c',
  warning: '#f39c12',
  navBackground: '255, 255, 255',
  navBorder: '222, 226, 230',
  navShadow: '0, 0, 0',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const colors = theme === 'dark' ? darkTheme : lightTheme;

  const value: ThemeContextType = {
    theme,
    colors,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
