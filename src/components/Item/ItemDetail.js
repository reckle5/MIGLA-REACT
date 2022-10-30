
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import Item from "./Item";
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'


const ItemDetail = ({ producto }) => {
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true)

    const handleAdd = (value) => {
        setCount(value);
        setShowItemCount(false);
        addItem(producto, value);
    };

    return (
        <Container className='card-detail'>
            <Card border="light" style={{ width: '18rem' }} className='card-imagen '>
                <Card.Img className='img-productos' variant="top" src={producto.imagenUrl} />
            </Card>

            <div className='card-text'>

                <h3>{producto.nombre}</h3>
                <h2>{producto.tipo}</h2>
                <h1>$ {producto.precio}</h1>
                {
                    showItemCount && (
                        <ItemCount initial={1} stock={5} onAdd={handleAdd} />
                    )
                }
          
            {
                !showItemCount && (
                    <Link to='/Cart'>
                        <Button variant="outline-success" size="lg"> Ver carrito</Button>
                    </Link>
                )
            }
            
            </div>
           

        </Container>

    )

}

export default ItemDetail;