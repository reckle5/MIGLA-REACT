import Container from "react-bootstrap/esm/Container"
import './ItemListContainer.css';
import {FaPagelines} from "react-icons/fa";

const ItemListContainer = ({greeting}) => {
    return(
        <Container>
        <h1 className="title">DE NUESTRAS MANOS A TU HOGAR  <FaPagelines></FaPagelines> </h1>
        <h3 className="greeting">{greeting}</h3>
      </Container>
    )
}

export default ItemListContainer;