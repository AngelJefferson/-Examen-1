// Autor: Angel Jefferson Sanchez Ventura - Matrícula: 2021-1816
import { useState } from 'react';

function Cuadratica() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [resultado, setResultado] = useState('');

  function calcular() {
    // Discriminante: b al cuadrado menos 4ac
    const d = b * b - 4 * a * c;

    if (a === 0) {
      setResultado('A no puede ser 0');
    } else if (d < 0) {
      setResultado('No hay solución real');
    } else {
      const x1 = (-b + Math.sqrt(d)) / (2 * a);
      const x2 = (-b - Math.sqrt(d)) / (2 * a);
      setResultado('x1 = ' + x1 + ' y x2 = ' + x2);
    }
  }

  return (
    <div className="tarjeta">
      <h2>Fórmula cuadrática</h2>
      <input type="number" placeholder="A" onChange={(e) => setA(Number(e.target.value))} />
      <input type="number" placeholder="B" onChange={(e) => setB(Number(e.target.value))} />
      <input type="number" placeholder="C" onChange={(e) => setC(Number(e.target.value))} />
      <button onClick={calcular}>Calcular</button>
      <h3 className="resultado">{resultado}</h3>
    </div>
  );
}

export default Cuadratica;