import React from 'react'

const Formulario = () => {
  return (
    <div className='contenedor'>
        <form action="">
          <div className='campo'>
            <label htmlFor="ciudad">Ciudad</label>
            <input type="text" name="ciudad" id="ciudad" />

          </div>
          <div className='campo'>
            <label htmlFor="Pais">Pais</label>
            
            <select name="pais" id="pais">
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
