
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import Item from "./Item";
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';



const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext);
    const [ count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true)

    const handleAdd = (value) => {
        setCount(value);
        setShowItemCount(false);
        addItem(producto, value);
    };

    return(
        <>
        <Item producto={producto}/>
        {
        showItemCount && (
          <ItemCount initial={0} stock={5} onAdd={handleAdd}/>
          )
        }
        {
            !showItemCount && (
                <Link to='/Cart'>
                <Button variant="outline-success"> Ver Carrito</Button>
                </Link>
            )
        }
        </>
       
    );
}

export default ItemDetail;