import ItemCount from "../ItemCount/ItemCount";
import { toast } from 'react-toastify';


import { useCarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

    const agregarCarrito = () => toast("✅ Producto agregado!", {
        theme: "dark",
        position: "bottom-right",
        pauseOnHover: false,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
    })

    const {addItem} = useCarritoContext()

    const onAdd = (cantidad) => { //Agregar el producto al carrito
    addItem(item,cantidad)
    }

    return (
        
        <div className="row g-0">
            <div className="col-md-6">
            <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className="col-md-3">
            <div className="card-body mt-5 detallesNames">
                <h5 className="card-title mt-3 fs-2">{item.nombre}</h5>
                <p className="card-text mt-5 fs-2">{item.marca}</p>
                <p className="card-text mt-5 fs-2">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p className="card-text mt-5 fs-2">Stock: {item.stock}</p>
            </div>
            </div>
            <div className="col-md-3 detallesButtons">
            <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                <Link className="nav-link" to={'/'}><button className="btn btn-info"><i class="bi bi-arrow-return-left"></i> Continuar comprando</button></Link>
                <Link className="nav-link" to={'/Cart'}><button className="btn btn-success"><i class="bi bi-cart-fill"></i> Ver Mi Carrito</button></Link>
            </div>
        </div>
        
    );
}

export default ItemDetail;
