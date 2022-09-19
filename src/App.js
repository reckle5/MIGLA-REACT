
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"¿Estás pensando en darle un toque distintivo a tu hogar? En nuestros productos encontrarás todo lo necesario para dotar tu casa con un estilo único y especial. Complementa tu decoración con nuestras increibles macetas, disponemos de una gran variedad de diseños y todo el tiempo nos estamos innovando para vos y tu hogar. Bienvenidos a MIGLA HOGAR."}/>
    </>
  );
}

export default App;
