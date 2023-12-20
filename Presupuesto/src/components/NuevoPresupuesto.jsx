import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje'
const NUevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  const [mensaje, setMensaje]=useState(' ')
const handlePresupuesto = (e)=>{
  e.preventDefault()
  if(!Number(presupuesto) || Number(presupuesto)< 0){
    console.log('No es un presupuesto valido')
  }else{
    console.log('es un nmero')
  }

}

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto}  action="" className='formulario'>
          <div className='campo'>
            <label htmlFor="">Definir presupuesto </label>
            <input type="text" 
            value={presupuesto}
            onChange={(e)=>setPresupuesto(e.target.value)}
            placeholder='Define tu presupuesto'
            className='nuevo-presupuesto'
            />
          </div>
          <input type="submit" value='Agregar presupuesto'
          name="" id=""
          
            />
            {mensaje && <Mensaje tipo="errpr">{mensaje}</Mensaje>}
        </form>
      
    </div>
  )
}

export default NUevoPresupuesto
