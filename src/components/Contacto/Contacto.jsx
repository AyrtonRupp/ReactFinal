import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Contacto = () => {
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
      e.preventDefault()
      const datForm = new FormData(datosFormulario.current)
      const contacto = Object.fromEntries(datForm)
      console.log(contacto)
      e.target.reset()
      toast.success("Consulta enviada correctamente", {
        theme: "dark",
        position: "bottom-right",
        pauseOnHover: false,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
      })
      navigate("/") //siempre al final 


    }
  
    return (
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
    );
}

export default Contacto;
