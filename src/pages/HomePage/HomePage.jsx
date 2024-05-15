import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div>
      <h1>Esta es la página de inicio</h1>
      <Link to="/sobre-nosotros">Haz clic para ver la página sobre nosotros</Link>
      <Link to="/contacto">Haz clic para ver la página de contacto</Link>
    </div>
  );
}

export default Inicio;
