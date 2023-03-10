import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer-basic">
        <footer>
            <ul className="list-inline">
                <li class="list-inline-item"><Link className='nav-link' to={'/'}>Inicio</Link></li>
                <li class="list-inline-item"><Link className='nav-link' to={'/'}>Productos</Link></li>
                <li class="list-inline-item"><Link className='nav-link' to={'https://goo.gl/maps/HSZDkewH9M6BQ8Uw5'} target="_blank">Direccion</Link></li>
                <li class="list-inline-item"><Link className='nav-link' to={'/Contacto'}>Contacto</Link></li>
            </ul>
            <div className="social">
            <Link className='nav-link' to={'https://www.instagram.com/'} target="_blank"><i className="bi bi-instagram"></i></Link>
            <Link className='nav-link' to={'https://www.whatsapp.com/'} target="_blank"><i className="bi bi-whatsapp"></i></Link>
            <Link className='nav-link' to={'/Contacto'}><i className="bi bi-info-lg"></i></Link>
                
            </div>
            <p className="copyright">Copyright &copy; Todos los derechos reservados Honey Store 2023</p>
        </footer>
    </div>
    );
}

export default Footer;
