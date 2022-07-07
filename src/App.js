import './App.css';
import Navbar from './components/NavBar/NavBar';
import ResultadoGeneral from './components/ResultadosGeneral/ResultadosGeneral';
import Principal from './components/principal/principal';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ObjetosM from './pages/objetosM/ObjetosM.js';
import Reglas from './pages/reglas/Reglas';
import DesafioF from './pages/desafioF/DesafioF'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Principal/>}></Route>
        <Route path='/resultados' element={ <ResultadoGeneral/>}></Route>
        <Route path='/objetosmagicos' element={ <ObjetosM/>}></Route>
        <Route path='/reglas' element={ <Reglas/>}></Route>
        <Route path='/desafiofinal' element={ <DesafioF/>}></Route>
      </Routes>
      </BrowserRouter>
      
         {/* <ResultadoGeneral/> */}
    </div>
  );
}

export default App;
