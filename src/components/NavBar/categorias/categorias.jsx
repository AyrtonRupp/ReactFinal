import { Link } from "react-router-dom";
import React from "react";

const Categorias = React.memo(() => {
    return (
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to={"/category/destilados"}>Destilados</Link>
            <Link className="dropdown-item" to={"/category/añejados"}>Añejados</Link>
            <Link className="dropdown-item" to={"/category/fermentados"}>Fermentados</Link>
            <div className="dropdown-divider"/>
            <Link className="dropdown-item" to={"/category/licores"}>Licores</Link>
          </div>
        </li>

    );
})

export default Categorias;
