import React, { useState } from 'react'
import './App.css'
import DecimalToBinary from './components/DecimalToBinary'
import BinaryToDecimal from './components/BinaryToDecimal'
import AsciiConverter from './components/ASCII'
import OctalToDecimal from './components/OctalTODecimal'



function App() {
  const [selectedComponent, setSelectedComponent] = useState("binary");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "binary":
        return <BinaryToDecimal></BinaryToDecimal>
      case "octal":
        return <OctalToDecimal />;
      case "decimal":
        return <DecimalToBinary />;
      case "ascii":
        return <AsciiConverter />;
      default:
        return <BinaryToDecimal></BinaryToDecimal>
    }
  };

  return (
    <div>
      <h1>Convertidor de Números y ASCII</h1>
      <select onChange={(e) => setSelectedComponent(e.target.value)}>
        <option value="binary">Binario a Decimal</option>
        <option value="octal">Octal a Decimal</option>
        <option value="decimal">Decimal a Binario</option>
        <option value="ascii">Texto a ASCII</option>
      </select>
      {renderComponent()}
    </div>
  );
}

export default App;
