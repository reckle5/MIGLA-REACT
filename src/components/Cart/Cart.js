import { useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import CartContext from "../../contexts/CartContext";
import Table from 'react-bootstrap/Table';
import { IoIosTrash } from "react-icons/io";
import './Cart.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import OrderModal from "../OrderModal/OrderModal";
import { createOrder } from "../../utils/orders";

const buyerMock = {
  name: 'caro',
  phone: '12623387483',
  email: 'caro@gamil.com'
}

const Cart = () => {
  const { cart, total, removeItem, clear } = useContext(CartContext);
  const [user, setUser] = useState(buyerMock);
  const [showModal, setShowModal] = useState(false)
  const [orderId, setOrderId] = useState();


  const handleRemove = (itemId) => {
    removeItem(itemId);
  };

  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  const handleBuy = async () => {
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };

    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
  }

  const showTable = cart.length > 0;
  
  return (
    <Container>
      <h1> Carrito de compras</h1>
      {showTable && (
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
                  <td> <IoIosTrash onClick={() => handleRemove(cart[0].id)} /> </td>
                </tr>
              ))
              }
            </tbody>
          </Table>
          <h3>total: ${total}</h3>
          <Button variant="outline-success" onClick={handleOpen}> Finzalar Compra </Button>
        </>
      )}
      {!showTable && (
        <>
          <h3>TU CARRITO ESTÁ VACÍO...</h3>
          <Link to='/'>
            <Button variant="outline-success"> Continuar comprando </Button>
          </Link>
        </>
      )}
      <OrderModal showModal={showModal} onClose={handleClose} onBuy={handleBuy} orderId={orderId} />

    </Container>
  );
}

export default Cart;