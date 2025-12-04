import React, { useState } from 'react';
import SPICalculator from './components/SPICalculator';
import CPICalculator from './components/CPICalculator';
import HowToUse from './components/HowToUse';
import './App.css';

function App() {
  const [mode, setMode] = useState('spi'); // 'spi', 'cpi', or 'how-to'

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
          className={`nav-btn ${mode === 'how-to' ? 'active' : ''}`}
          onClick={() => setMode('how-to')}
        >
          How to Use
        </button>
      </div>

      {mode === 'spi' && <SPICalculator />}
      {mode === 'cpi' && <CPICalculator />}
      {mode === 'how-to' && <HowToUse />}
    </div>
  );
}

export default App;
