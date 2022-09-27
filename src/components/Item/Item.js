import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Item.css'



const Item = ({producto})=>{
return(
 
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          {producto.tipo}
         
        </Card.Text>
        <Card.Footer>
          <small >$ {producto.precio}</small>
        </Card.Footer>

        <Button variant="outline-success">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
    
   
)
}

export default Item;