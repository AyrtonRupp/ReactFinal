import { useState } from "react"
import { toast } from "react-toastify"

const ItemCount = ({valInicial, stock, onAdd}) => {

    const [contador, setContador] = useState(valInicial)
            //Var       //Modificar var     //Estado inicial

    const sumar = () =>  (contador < stock) && setContador(contador + 1) //contador = contador + 1
    const restar = () => (contador > valInicial)  && setContador(contador - 1)  //Operador ternario sin else
    const agregarCarrito = () => {
        onAdd(contador)
        toast(`✅ ${contador} Productos agregados!`, {
        theme: "dark",
        position: "bottom-right",
        pauseOnHover: false,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        
        })
    }
    return (
        <>
        <div>
        <button className="btn btn-danger mt-3" onClick={() => restar()}>-</button>
            {contador}
        <button className="btn btn-dark mt-3" onClick={() => sumar()}>+</button>
        </div>

        <button className="btn btn-warning mt-3" onClick={() => agregarCarrito()}><i class="bi bi-bag-check-fill"></i> Agregar al Carrito</button>
        </>
    );
}

export default ItemCount;
