
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemDetailContainer from './components/Item/ItemDetailContainer';

function App (){
  return(
    <BrowserRouter basename="MIGLA-REACT">
    <NavBar/>
    <Routes>
    <Route path='/' element= {<ItemListContainer greeting={"¿Estás pensando en darle un toque distintivo a tu hogar? En nuestros productos encontrarás todo lo necesario para dotar tu casa con un estilo único y especial. Complementa tu decoración con nuestras increibles macetas, disponemos de una gran variedad de diseños y todo el tiempo nos estamos innovando para vos y tu hogar. Bienvenidos a MIGLA HOGAR."}/>} />
    <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
    <Route path='/item/:id' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  );
  }

  export default App;
