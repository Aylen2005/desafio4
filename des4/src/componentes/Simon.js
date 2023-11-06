import React, { useState } from 'react';
import './Navbar.css';

function ColorButton({ color }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const buttonClass = `color ${color} ${isActive ? 'active' : ''}`;

  return <button className={buttonClass} onClick={handleClick}></button>;
}

function App() {
  return (
    <div className="Ruleta">
      <ColorButton color="color1" />
      <ColorButton color="color2" />
      <ColorButton color="color3" />
      <ColorButton color="color4" />
    </div>
  );
}

export default App;
