import React, { useState } from "react";
import { use } from "react";


function OctalToDecimal() {
    const [octal, setOctal] = useState("");
    const [decimal, setDecimal] = useState(null);

    const convertToDecimal = () => {
        if (/^[0-7]+$/.test(octal)) {
            setDecimal(parseInt(octal, 8))
        } else {
            setDecimal("Entrada no valida")
        }
    }
    return (
        <div>
            <h2>Octal a decimal</h2>
            <input placeholder="Ingrese un número Octal" type="text" value={octal} onChange={(e) => setOctal(e.target.value)} />
            <button onClick={convertToDecimal}>Convertir</button>
            <p>Resultado: {decimal}</p>
        </div>
    )

}


export default OctalToDecimal