
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import { CacheProvider } from './contexts/CacheContext';
import {CartProvider} from './contexts/CartContext';
import { useEffect } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';

function App (){
//acceso a un doc especifico
  useEffect(() => {
    //se obtiene la base de datos
    const dataBase = getFirestore()
    // referencia al doc
    const itemReference = doc(dataBase, "items", "oU5SYCvbWVxnVb5emtfH");
    // el doc apartir de la referencia
    getDoc(itemReference)
    .then((snapshot) => {
      //existe el doc
      if(snapshot.exists()){
        //arma objeto literal con el id y demas campos del doc
      const item = {
        id: snapshot.id,
        ...snapshot.data()
    };
    console.log(item)
  }
    })
    .catch(error => console.warn(error))
  
  }, []);

  //acceso a una coleccion
  useEffect(() =>{
    const dataBase = getFirestore();

    const collectionReference = collection(dataBase, "items")

    getDocs(collectionReference)
    .then((snapshot) =>{
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      console.log(list)

    })
    .catch(error => console.warn(error))

  }, []);

  return(
    <BrowserRouter basename="MIGLA-REACT">
   <CacheProvider>
     <CartProvider>
       <NavBar/>
       <Routes>
       <Route path='/' element= {<ItemListContainer greeting={"¿Estás pensando en darle un toque distintivo a tu hogar? En nuestros productos encontrarás todo lo necesario para dotar tu casa con un estilo único y especial. Complementa tu decoración con nuestras increibles macetas, disponemos de una gran variedad de diseños y todo el tiempo nos estamos innovando para vos y tu hogar. Bienvenidos a MIGLA HOGAR."}/>} />
       <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
       <Route path='/item/:id' element={<ItemDetailContainer />} />
       <Route path='/Cart' element={<Cart />}/>
       </Routes>
      </CartProvider>
    </CacheProvider>
    </BrowserRouter>
  );
  }

  export default App;
