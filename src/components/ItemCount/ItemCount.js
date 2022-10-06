import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const Counter = () =>{
    const[count, setCount]= useState(0);
    const agregar = ()=>{
        setCount(count + 1)
    };
    const quitar = () =>{
        setCount(count - 1)
    };

return(
    <Container >
         <ButtonGroup  aria-label="Basic example">
         <Button className='counterStyle' variant="outline-secondary" onClick={quitar}>-</Button>
         <Button className='counterStyle' variant="outline-secondary" disabled> {count}</Button>
         <Button className='counterStyle' variant="outline-secondary" onClick={agregar}>+</Button>
         </ButtonGroup>
        
    </Container>
)
}
export default Counter;