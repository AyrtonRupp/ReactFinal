// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVp2_Znz8hlfjf_nWqTFHR0liaOA5eAnM",
  authDomain: "honeystore-42f01.firebaseapp.com",
  projectId: "honeystore-42f01",
  storageBucket: "honeystore-42f01.appspot.com",
  messagingSenderId: "519049067560",
  appId: "1:519049067560:web:627f20f418af5ff09bc91d"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach( async (prod)  => {
    await addDoc(collection(db,"productos"), {
      nombre: prod.nombre,
      marca: prod.marca,
      idCategoria: prod.idCategoria,
      stock: prod.stock,
      precio: prod.precio,
      img: prod.img,
      
    })
  })
}


export const getProductos = async() => {
  const productos = await getDocs(collection(db,"productos"))
  const items = productos.docs.map(prod => {
      return {...prod.data(), id: prod.id}
  })
  return items
}

export const getProducto = async(id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = {...producto.data(), id: producto.id}
  return item
}


export const updateProducto = async(id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async(id) => {
  await deleteDoc(doc(db, "productos", id))
}



export const createOrdenCompra = async(cliente, productos,precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      datosCliente: cliente,
      productos: productos,
      precioTotal: precioTotal, 
      fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async(id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
  return oCompra
}