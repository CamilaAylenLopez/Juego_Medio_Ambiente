import logo from './logo.svg';
import './App.css';
import Home from './componentes/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JuegoUno from './componentes/JuegoUno'
import JuegoDos from './componentes/JuegoDos'
import JuegoTres from './componentes/JuegoTres';
import Informacion from './componentes/Informacion';
import Layout from './componentes/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/informacion' element={<Informacion />} ></Route>
          <Route path='/personas/:id' element={<JuegoUno />}></Route>
          <Route path='/contacto' element={<JuegoDos />} ></Route>
          <Route path='/contacto' element={<JuegoTres />} ></Route>
          <Route path='*' element={<h1>Not Found</h1>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
