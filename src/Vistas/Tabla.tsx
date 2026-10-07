import { useState } from 'react';

function Tabla() {
  const [numero, setNumero] = useState(0);
  const [filas, setFilas] = useState<string[]>([]);

  function generar() {
    const lista: string[] = [];
    for (let i = 1; i <= 14; i++) {
      lista.push(numero + ' x ' + i + ' = ' + numero * i);
    }
    setFilas(lista);
  }

  return (
    <div className="tarjeta">
      <h2>Tabla de multiplicar</h2>
      <input type="number" placeholder="Escribe un número" onChange={(e) => setNumero(Number(e.target.value))} />
      <button onClick={generar}>Generar</button>

      {filas.map((fila, i) => (
        <p key={i} className="fila">{fila}</p>
      ))}
    </div>
  );
}

export default Tabla;