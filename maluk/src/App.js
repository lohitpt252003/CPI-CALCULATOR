import React, { useState } from 'react';
import SPICalculator from './components/SPICalculator';
import CPICalculator from './components/CPICalculator';
import HowToUse from './components/HowToUse';
import GradeSystem from './components/GradeSystem';
import Credits from './components/Credits';
import './App.css';

function App() {
  const [mode, setMode] = useState('spi'); // 'spi', 'cpi', 'how-to', 'grades', 'credits'

  return (
    <div className="App">
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
