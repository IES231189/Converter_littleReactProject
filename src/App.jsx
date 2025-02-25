import React, { useState } from "react";

import BinaryToDecimal from "./components/BinaryToDecimal";
import OctalToDecimal from "./components/OctalTODecimal";
import DecimalToBinary from "./components/DecimalToBinary";
import AsciiConverter from "./components/ASCII";
import "./App.css"


function App() {
  const [selectedConverter, setSelectedConverter] = useState("binary");

  const renderConverter = () => {
    switch (selectedConverter) {
      case "binary":
        return <BinaryToDecimal />;
      case "octal":
        return <OctalToDecimal />;
      case "decimal":
        return <DecimalToBinary />;
      case "ascii":
        return <AsciiConverter />;
      default:
        return <BinaryToDecimal />;
    }
  };

  return (
  <>
  <p>Prueba 4 , webhook</p>
  <h1 className="p-title">Convertidor de numeros</h1>
    <div className="container mt-4">
    <div className="card-list">
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <button  className="button" onClick={() => setSelectedConverter("binary")}>Binario a Decimal</button>
        </li>
        <li>
          <button  className="button" onClick={() => setSelectedConverter("octal")}>Octal a Decimal</button>
        </li>
        <li>
          <button  className="button" onClick={() => setSelectedConverter("decimal")}>Decimal a Binario</button>
        </li>
        <li>
          <button  className="button" onClick={() => setSelectedConverter("ascii")}>Texto a ASCII</button>
        </li>
      </ul>
    </div>
      

      <div className="convert-card">
        {renderConverter()}
      </div>
      
    </div>
    </>
  );
}

export default App;
