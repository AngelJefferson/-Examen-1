// Autor: Angel Jefferson Sanchez Ventura - Matrícula: 2021-1816
import foto from '../assets/perfil.jpg';

function Perfil() {
  return (
    <div className="tarjeta">
      <img src={foto} className="foto" />
      <h2>Angel Sanchez</h2>
      <p>Matrícula: 2021-1816</p>
    </div>
  );
}

export default Perfil;