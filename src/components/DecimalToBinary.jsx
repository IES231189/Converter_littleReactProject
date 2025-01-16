import React  , {useState} from "react";

function DecimalToBinary(){
    const [decimal, setDecimal] = useState("");
    const [binary, setBinary] = useState(null);
  
    const convertToBinary = () => {
      const num = parseInt(decimal, 10);
      if (!isNaN(num)) {
        setBinary(num.toString(2));
      } else {
        setBinary("Entrada no válida");
      }
    };
  
    return (
      <div>
        <h2>Decimal a Binario</h2>
        <input
          type="text"
          value={decimal}
          onChange={(e) => setDecimal(e.target.value)}
          placeholder="Ingrese número decimal"
        />
        <button onClick={convertToBinary}>Convertir</button>
        <p>Resultado: {binary}</p>
      </div>
    );
}

export default DecimalToBinary;