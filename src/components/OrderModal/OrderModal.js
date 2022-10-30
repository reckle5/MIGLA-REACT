
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";
import "./OrderModal.css";

const OrderModal = ({ showModal, onClose, onBuy, orderId }) => {

  const { cart, total, } = useContext(CartContext);

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Finalizar comprar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="orden">

        <p>Tu orden de compra:</p>
        
        {cart.map((item) => (
          <ul key={item.id}>
                  <li>{item.quantity} x {item.nombre}</li>
                </ul>
              ))
            }
           
          <p>TOTAL: $ {total}</p>
            </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="Ingrese telefono" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {!orderId && (
          <>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={onBuy}>
              Comprar
            </Button>
          </>
        )}
        {orderId && (
          <div className='footerOrderSuccess'>
            <Alert key='info' variant='info'>
             Su Numero de orden es: <span>{orderId}</span>
            </Alert>
            <Link to='/'>
              <Button variant="success">
                Seguir Comprando
              </Button>
            </Link>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default OrderModal;