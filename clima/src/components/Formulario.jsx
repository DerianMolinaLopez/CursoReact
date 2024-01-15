import React from 'react'
import { useEffect , useState} from 'react'
import useClima from '../hooks/useClima'

const Formulario = () => {
   const {busqueda,setBusqueda,consultarClima,datosBusqueda} = useClima()
   const [alerta, setAlerta] = useState(false)
   const {ciudad,pais} = busqueda


   const handleChange = e => {
    e.preventDefault()
       setBusqueda({
           ...busqueda,
           [e.target.name]: e.target.value
       });
   };
  const handleSubmit = e=>{
  e.preventDefault()
  if(ciudad.trim() === "" || pais === ""){
    console.log("hay campos vacios")
    setAlerta(true)
    return
  }
  //aqui consulto el clima
  console.log(busqueda.ciudad)
  consultarClima(busqueda)
}

  return (
    <div className='contenedor'>
      { alerta && <p>Hay al menos un campo vacio</p>}
        <form onSubmit={handleSubmit} action="">
          <div className='campo'>
            <label htmlFor="ciudad">Ciudad</label>
            <input type="text" name="ciudad" id="ciudad" onChange={handleChange} value={ciudad} />
          </div>
          <div className='campo'>
            <label htmlFor="Pais">Pais</label>
            <select name="pais" id="pais" value={pais} onChange={handleChange}>
              <option value="">--Selecciona un pais--</option>
              <option value="US">Estados unidos</option>
              <option value="CO">Colombia</option>
              <option value="ES">España</option>
            </select>
          </div>
          <input type="submit" value="Consultar el clima" id="" />
        </form>
    </div>
  )
}

export default Formulario