import React, { useState, useEffect } from 'react';
import SPICalculator from './components/SPICalculator';
import CPICalculator from './components/CPICalculator';
import HowToUse from './components/HowToUse';
import GradeSystem from './components/GradeSystem';
import Credits from './components/Credits';
import './App.css';

function App() {
  const [mode, setMode] = useState('spi'); // 'spi', 'cpi', 'how-to', 'grades', 'credits'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app_theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('app_theme', theme);
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}-theme`}>
      <div className="app-nav">
        <button
          className={`nav-btn ${mode === 'spi' ? 'active' : ''}`}
          onClick={() => setMode('spi')}
        >
          SPI Calculator
        </button>
        <button
          className={`nav-btn ${mode === 'cpi' ? 'active' : ''}`}
          onClick={() => setMode('cpi')}
        >
          CPI Calculator
        </button>
        <button
          className={`nav-btn ${mode === 'grades' ? 'active' : ''}`}
          onClick={() => setMode('grades')}
        >
          Grade System
        </button>
        <button
          className={`nav-btn ${mode === 'how-to' ? 'active' : ''}`}
          onClick={() => setMode('how-to')}
        >
          How to Use
        </button>
        <button
          className={`nav-btn ${mode === 'credits' ? 'active' : ''}`}
          onClick={() => setMode('credits')}
        >
          Credits
        </button>
        <button
          className="nav-btn theme-btn"
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {mode === 'spi' && <SPICalculator />}
      {mode === 'cpi' && <CPICalculator />}
      {mode === 'grades' && <GradeSystem />}
      {mode === 'how-to' && <HowToUse />}
      {mode === 'credits' && <Credits />}
    </div>
  );
}

export default App;
