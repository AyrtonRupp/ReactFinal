import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useCarritoContext } from '../context/CarritoContext';


const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link className="nav-link" to={'/cart'}>
                <button className="btn carrito"><FontAwesomeIcon className='carritoIcono' style={{fontSize: "1.5rem"}} icon={faCartShopping}/>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}</button>
            </Link> 
        </>
    );
}

export default CartWidget;
