import React from 'react';
import { useCarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"

const Checkout = () => {

    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        
        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant 
                updateProducto(prodCarrito.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
            toast.success(`¡Muchas gracias por su compra!, su orden de pedido con el ID: ${ordenCompra.id
            } con un valor total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue recibido con éxito!`)
            emptyCart()
            e.target.reset()
            navigate("/")
        })

    }

    return (
        <>
        {carrito.length === 0 
        ?
        <>
            <div className='CarritoVacioCantainer'>
                <h2 className='carritoVacio'>No posee ningun producto agregado</h2>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark"><i class="bi bi-arrow-return-left"></i> Continuar comprando</button></Link> 
            </div>
        </>
        :
        <div className="container form-box" style={{marginTop:"20px"}}>
        <form onSubmit={consultarFormulario} ref={datosFormulario}>
        <div className="mb-3 inputbox inputContacto">
            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
            <input type="text" className="form-control" name="nombre" required pattern='[a-zA-Z]+'/>
        </div>
        <div className="mb-3 inputbox inputContacto">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" required/>
        </div>
        <div className="mb-3 inputbox inputContacto">
            <label htmlFor="repetirEmail" className="form-label">Repetir Email</label>
            <input type="email" className="form-control" name="repetirEmail" required/>
        </div>
        <div className="mb-3 inputbox inputContacto">
            <label htmlFor="celular" className="form-label">Número de teléfono</label>
            <input type="number" className="form-control" name="celular" required pattern='[0-9]+' minLength={8}/>
        </div>
        <div className="mb-3 inputbox inputContacto">
            <label htmlFor="comentario" className="form-label">Comentario</label>
            <textarea className="form-control" name="comentario" rows={3} defaultValue={""} required maxLength={300}
            minLength={15}/>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>
        }


        </>
    )
        
}

export default Checkout;
