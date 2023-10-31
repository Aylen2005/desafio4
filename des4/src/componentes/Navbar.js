import React from 'react';
import './Navbar.css';

function App() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://simondicerock.com/wp-content/uploads/elementor/thumbs/simon-dice-rock-logo-1024-pzxs8sb9ltvy0r99aok2out395upw5o9ximwtyupae.png" alt="Logo" /> {/* Reemplaza "logo.png" con la ruta de tu logo */}
      </div>
      <div className="menu">
        <ul>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Contacto</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
