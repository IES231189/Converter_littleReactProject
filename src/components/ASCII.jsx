import React, { useState } from "react";

function AsciiConverter() {
  const [text, setText] = useState("");
  const [asciiValues, setAsciiValues] = useState([]);

  const convertToAscii = () => {
    if (text.length >= 10) {
      setAsciiValues(text.split("").map((char) => char.charCodeAt(0)));
    } else {
      setAsciiValues(["Ingrese al menos 10 caracteres"]);
    }
  };

  return (
    <div>
      <h2>Texto a ASCII</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          // Limita la longitud a 10 caracteres
          if (e.target.value.length <= 10) {
            setText(e.target.value);
          }
        }}
        placeholder="Ingrese texto (mín. 10 caracteres)"
        maxLength="10"  // Evita que se ingresen más de 10 caracteres
      />
      <button onClick={convertToAscii}>Convertir</button>
      <p>Resultado: {asciiValues.join(", ")}</p>
    </div>
  );
}

export default AsciiConverter;
