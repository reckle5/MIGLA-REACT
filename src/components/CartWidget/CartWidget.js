import { IoCart }  from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return(
        <>
        <Link to="/cart">
       < IoCart />
       </Link>
       </>
    )
}

export default CartWidget;