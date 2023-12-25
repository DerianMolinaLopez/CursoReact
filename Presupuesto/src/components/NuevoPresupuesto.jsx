import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje'
const NUevoPresupuesto = ({presupuesto, setPresupuesto,setIsValid}) => {
  const [mensaje, setMensaje]=useState('')
const handlePresupuesto = (e)=>{
  e.preventDefault()
  if(!Number(presupuesto) || Number(presupuesto)< 0){
    setMensaje('Ese presupuesto no es valido')
    return
  }
  setMensaje('')
  setIsValid(true)
  
}

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto}  action="" className='formulario'>
          <div className='campo'>
            <label htmlFor="">Definir presupuesto </label>
            <input type="number" 
            value={presupuesto}
            onChange={(e)=>setPresupuesto(Number(e.target.value))}
            placeholder='Define tu presupuesto'
            className='nuevo-presupuesto'
            />
          </div>
          <input type="submit" value='Agregar presupuesto'
          name="" id=""
          
            />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
      
    </div>
  )
}

export default NUevoPresupuesto
