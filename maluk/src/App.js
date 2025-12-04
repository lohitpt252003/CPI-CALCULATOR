import React, { useState } from 'react';
import SPICalculator from './components/SPICalculator';
import CPICalculator from './components/CPICalculator';
import './App.css';

function App() {
  const [mode, setMode] = useState('spi'); // 'spi' or 'cpi'

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
      </div>

      {mode === 'spi' ? <SPICalculator /> : <CPICalculator />}
    </div>
  );
}

export default App;
