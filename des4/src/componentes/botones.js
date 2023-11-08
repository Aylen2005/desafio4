import React, { useState } from 'react';
import './Navbar.css';

const App = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [nombre, setNombre] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre);
    setMostrarFormulario(false);
    };

    return (
    <div className="boton">
        {!mostrarFormulario ? (
        <button className="Iniciar" onClick={() => setMostrarFormulario(true)}>Iniciar</button>
        ) : (
        <div className="formulario">
            <div className="formulario-contenido">
            <img src="https://simondicerock.com/wp-content/uploads/elementor/thumbs/simon-dice-rock-logo-1024-pzxs8sb9ltvy0r99aok2out395upw5o9ximwtyupae.png" alt="Logo" /> {/* Reemplaza "logo.png" con la ruta de tu logo */}
            <h2>Ingrese su nombre</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                />
                <button type="submit">Enviar</button>
            </form>
            </div>
        </div>
        )}
    </div>
);
};

export default App;
