import Container from "react-bootstrap/esm/Container"
import './ItemListContainer.css';
import {FaPagelines} from "react-icons/fa";


import { useEffect, useState } from "react";
import { getProducts, getProductsByType } from "../../utils/products";
import { useParams } from "react-router-dom";
import ItemList from "../Item/ItemList";


const ItemListContainer = ({greeting}) => {
const {categoryId} = useParams();
const [products, setProducts]  = useState([]);


useEffect(() => {
        if(categoryId){
            getProductsByType(categoryId)
            .then((data) => setProducts (data))
            .catch((error) => console.warn(error))
        } else {
             getProducts()
               .then((data) => setProducts (data) )
               .catch((error) => console.warn(error ))
        }
   },[categoryId])

    return(
        <Container>
        <h1 className="title">DE NUESTRAS MANOS A TU HOGAR  <FaPagelines></FaPagelines> </h1>
        <h3 className="greeting">{greeting}</h3>
       <div className="tarjetaContenedora"> <ItemList products={products}/></div>
      </Container>
    );
}

export default ItemListContainer;
