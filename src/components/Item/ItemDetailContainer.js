import { useEffect, useState} from "react";
import {  useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getProduct } from "../../utils/products";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
    const [producto, setProduct] = useState()
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
        .then((data) => {
            setProduct(data)
        })
        .catch(error => console.warn(error))
    }, [id])

    return(
        <Container>
            <h1>Detalle del producto</h1>
        {producto && <ItemDetail producto={producto}/>}
        </Container>
    );
}

export default ItemDetailContainer;