import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) =>{
    const[count, setCount]= useState(parseInt(initial));

    const handleAdd = ()=>{
        setCount(count + 1)
    };
    const handleSubtract = () =>{
        setCount(count  - 1)
    };

    const handleClick = () => onAdd(count);

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

return(
    <Container >
         <ButtonGroup  aria-label="Basic example">
         <Button className='counterStyle' variant="outline-secondary" disabled={count <= 0 }  onClick={handleSubtract}>-</Button>
         <Button className='counterStyle' variant="outline-secondary" disabled> {count}</Button>
         <Button className='counterStyle' variant="outline-secondary" disabled={count >= stock } onClick={handleAdd}>+</Button>
         </ButtonGroup>
        <>
         <Button variant="outline-success" disabled={stock <=0} onClick={handleClick}>Agregar al Carrito</Button>
         </>
    </Container>
)
}
export default ItemCount;