import Container from "react-bootstrap/esm/Container"
import './ItemListContainer.css';
import {FaPagelines} from "react-icons/fa";

import ItemList from "../ItemList";

const productos = [
  {id:1, nombre:"Alisa", precio:850,  tipo:"N14",  cantidad:1, prod: "maceta"},
  {id:2, nombre:"White", precio:1200, tipo:"N°16",  cantidad:1, prod: "maceta"},
  {id:3, nombre:"Golden", precio:850, tipo:"N14",  cantidad:1, prod: "maceta"},
  {id:4, nombre:"Wooden Like" , precio:450, tipo:"N°8",  cantidad:1, prod: "maceta"},
  {id:5, nombre:"Daisy", precio:680, tipo:"N°12", cantidad:1, prod: "maceta"},
  {id:6, nombre:"Marga", precio:680, tipo:"N°12",  cantidad:1, prod: "maceta"},
  {id:7, nombre:"Mate", precio:680, tipo:"N°12",  cantidad:1, prod: "maceta"},
  {id:8, nombre:"Fatima", precio:850, tipo:"N14",  cantidad:1, prod: "maceta"},
  {id:9, nombre:"Brains", precio:680, tipo:"N°12", cantidad:1, prod: "maceta"},
  {id:10, nombre:"Llama", precio:680, tipo:"N°12",  cantidad:1, prod: "maceta"},
  {id:11, nombre:"Homero", precio:750, tipo:"N°10", cantidad:1, prod: "maceta"},
  {id:12, nombre:"Perfect", precio:450, tipo:"N°8",  cantidad:1, prod: "maceta"},
  {id:13,nombre:"Parma",  precio:600, tipo:"Tussor Rayas",  cantidad:1, prod: "almohadon"},
  {id:14,nombre:"Invierno Pack x3",  precio:2300,  tipo:"Piel Sintetica, Tussor",cantidad:1, prod: "almohadon"},
  {id:15,nombre:"Vikings Pack x3", precio: 2300,  tipo:"Piel Sintetica, Tussor",  cantidad:1, prod: "almohadon"},
  {id:16,nombre:"Tussor Pack x3", precio:1950, tipo:"Tussor Liso",cantidad:1, prod: "almohadon"},
  {id:17,nombre:"Tussor silla", precio:440, tipo:"Tussor Liso", cantidad:1, prod: "almohadon"},
  {id:18,nombre:"Grey Pack x2",  precio:2200, tipo:"Piel Sintetica, Tussor Print",  cantidad:1, prod: "almohadon"},
  {id:19,nombre:"Tussor",  precio:440,  tipo:"Tussor Liso",  cantidad:1, prod: "almohadon"},
  {id:20,nombre:"Pack Bohemian",  precio:2100, tipo: "Tussor Rayas, Decorado",cantidad:1, prod: "almohadon"},
  {id:21,nombre:"Della",  precio:1500, tipo: "Seda",  cantidad:1, prod: "almohadon"}
]

const ItemListContainer = ({greeting}) => {
    return(
        <Container>
        <h1 className="title">DE NUESTRAS MANOS A TU HOGAR  <FaPagelines></FaPagelines> </h1>
        <h3 className="greeting">{greeting}</h3>
       <div className="tarjetaContenedora"> <ItemList productos={productos}/></div>
      </Container>
    )
}

export default ItemListContainer;
