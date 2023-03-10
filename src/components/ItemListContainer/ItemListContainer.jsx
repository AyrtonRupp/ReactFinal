import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { getProductos } from "../../firebase/firebase";



const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const {idCategoria}= useParams()
    useEffect(() => {
        if(idCategoria){
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === idCategoria)
                const productsList = <ItemList products={products} plantilla={'item'}/> 
                setProductos(productsList)
            }) 
        } else{
            getProductos()
            .then(products => {
                const productsList = <ItemList products={products} plantilla={'item'}/> 
                setProductos(productsList)
            })
        }
    }, [idCategoria])
    return (
        <div className="container row d-flex justify-content-center align-items-center h-100 productosContainer">
            {productos}
        </div>
    );
}

export default ItemListContainer;
