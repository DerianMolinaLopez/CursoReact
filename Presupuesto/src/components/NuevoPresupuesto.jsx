import React from 'react'

const NUevoPresupuesto = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form action="" className='formulario'>
          <div className='campo'>
            <label htmlFor="">Definir presupuesto </label>
            <input type="text" 
            placeholder='Define tu presupuesto'
            className='nuevo-presupuesto'
            />
          </div>
          <input type="submit" value='Agregar presupuesto' name="" id="" />
        </form>
      
    </div>
  )
}

export default NUevoPresupuesto
