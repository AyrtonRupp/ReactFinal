import React from 'react';
import { Link } from "react-router-dom";
import ItemList  from "../ItemList/ItemList"
import { useCarritoContext } from '../context/CarritoContext';

const Cart = () => {

    const {carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
        { carrito.length === 0 
          ? //Si carrito esta vacio
            <div className='CarritoVacioCantainer'>
                <h2 className='carritoVacio'>Carrito vacio</h2>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark"><i class="bi bi-arrow-return-left"></i> Continuar comprando</button></Link> 
            </div>
          : //Si carrito tiene productos
            <div className="container cartContainer">
                {
                    <ItemList products={carrito} plantilla={'itemCart'}/>
                }
                <div className="divButtons">
                    <p>Total de la compra: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                    <div className='actionButtons'>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark"><i class="bi bi-arrow-return-left"></i> Continuar Comprando</button></Link> 
                    <button className="btn btn-danger"><i class="bi bi-trash3"></i> Vaciar carrito</button>
                    <Link className="nav-link" to={'/Checkout'}><button className="btn btn-success"><i class="bi bi-check-circle"></i> Finalizar compra</button></Link> 
                    </div>
                </div>
            </div>
        }
    </>
    );
}

export default Cart;
