import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'


const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const handleAdd = () => {
        setCount(count + 1)
    };
    const handleSubtract = () => {
        setCount(count - 1)
    };

    const handleClick = () =>   onAdd(count);

   
    
      
    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

    return (
        <Container >
            <ButtonGroup  className='boton-count'aria-label="Basic example">
                <Button size="sm" variant="outline-danger" disabled={count <= 0} onClick={handleSubtract}>-</Button>
                <span className='count'> {count}</span>
                <Button size="sm" variant="outline-success" disabled={count >= stock} onClick={handleAdd}>+</Button>
            </ButtonGroup>
            <>
                <Button className='boton-agregar' variant="outline-success" onClick={handleClick} disabled={(stock <= 0)||(count === 0)} >Agregar al Carrito</Button>
            </>
        </Container>
    )
}

export default ItemCount;