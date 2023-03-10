
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getProducto } from '../firebase/firebase';
import { ToastContainer } from 'react-toastify';

import NavBar from './NavBar/navBar';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Contacto from './Contacto/Contacto';
import Footer from './Footer/Footer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

import { CarritoProvider } from './context/CarritoContext';




function App() {
getProducto()

  return (
    <>

    <BrowserRouter>

      <CarritoProvider>
        
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/> 
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/Contacto' element={<Contacto/>}/> 
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
        </Routes> 
      <Footer/>
      <ToastContainer/>
      
      </CarritoProvider>

    </BrowserRouter>
    </>
  );
}

export default App;
