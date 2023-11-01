import './App.css';
import Navbar from './componentes/Navbar';
import Simon from './componentes/Simon';
import Botones from './componentes/botones';



function App() {
  return (  
    <div className="App">
      <Navbar/>
      <div className='App-header'>
        <Simon/>
        <Botones/>
      </div>
      <footer>&copy; 2023 Mi Simon Dice. Todos los derechos reservados.</footer>
    </div>
  );
}

export default App;
