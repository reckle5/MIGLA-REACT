
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css';




const Item = ({producto}) => {
return (
 
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img className='img-productos' variant="top" src={producto.imagenUrl}/>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text className='text'>
        $ {producto.precio}
         
        </Card.Text>
       
         <Link to={ `/item/${producto.id}`}>
         <Button className='boton' variant="outline-success">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
    
   
);
}

export default Item;