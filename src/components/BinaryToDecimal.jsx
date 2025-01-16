import React , {useState} from 'react'

function BinaryToDecimal(){
    const [binary , setBinary] = useState("");
    const [decimal , setDecimal] = useState(null);



    const convertToDecimal = () => {
        if (/^[01]+$/.test(binary)) {
          setDecimal(parseInt(binary, 2));
        } else {
          setDecimal("Entrada no válida");
        }
      };
    
      return (
        <div>
          <h2>Binario a Decimal</h2>
          <input
            type="text"
            value={binary}
            onChange={(e) => setBinary(e.target.value)}
            placeholder="Ingrese número binario"
          />
          <button onClick={convertToDecimal}>Convertir</button>
          <p>Resultado: {decimal}</p>
        </div>
      );
}

export default BinaryToDecimal