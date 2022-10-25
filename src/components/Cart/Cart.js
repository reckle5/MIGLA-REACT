import { useContext } from "react";
import Container from "react-bootstrap/esm/Container"
import CartContext from "../../contexts/CartContext";
import Table from 'react-bootstrap/Table'
import { IoIosTrash } from "react-icons/io"
import './Cart.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const {cart, total, removeItem} = useContext(CartContext);

    console.log({cart, total,});

    const handleRemove= (itemId) =>{
        removeItem(itemId);
    };

      const showTable = cart.length > 0
    return (
        <Container>
            <h1> Carrito de compras</h1>
            { showTable && (
                <>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
            {cart.map((item) => (
           <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.quantity}</td>
                <td> <IoIosTrash onClick={() => handleRemove(cart[0].id)}/> </td>
             </tr>
            ))
        }
      </tbody>
             </Table>
             <h3>total: ${total}</h3>
                </>
            )}
             {!showTable && (
             <>
             <h3> No hay productos en tu carrito</h3>
             <Link to='/'>
             <Button variant="outline-success"> Ver Productos </Button>
             </Link>
             </>
    )}
    </Container>
    );
}

export default Cart;