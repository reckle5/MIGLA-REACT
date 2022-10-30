import { Badge } from 'react-bootstrap';
import { IoCart }  from 'react-icons/io5';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext);
    return(
        <>
        <Link to="/cart">
       < IoCart />
       </Link>
       {totalQuantity > 0 &&  (
       <Badge pill bg="danger">{totalQuantity}</Badge>
       )}
       </>
    )
}

export default CartWidget;