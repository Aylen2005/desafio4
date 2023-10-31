import './App.css';
import Navbar from './componentes/Navbar';
import Simon from './componentes/Simon';



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Simon/>
      <footer>&copy; 2023 Mi Simon Dice. Todos los derechos reservados.</footer>
    </div>
  );
}

export default App;
