import {useState} from 'react';

const Counter = () =>{
    const[count, setCount]= useState(0);
    const agregar = ()=>{
        setCount(count + 1)
    };
    const quitar = () =>{
        setCount(count - 1)
    };

return(
    <div>
        <button onClick={quitar}>-</button>
        <p> {count}</p>
        <button onClick={agregar}>+</button>
    </div>
)
}
export default Counter;