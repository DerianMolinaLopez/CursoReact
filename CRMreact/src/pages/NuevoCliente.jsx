import React from 'react'
import { useNavigate } from 'react-router-dom'
const NuevoCliente = () => {
  const navigate = useNavigate()//este hook especial es par poder navegar de forma dinamica
  return (
    <div>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo cliente Clientes</h1>
      <p className='mt-10'>LLena trodos los campos para agregar un nuevo cliente
      </p>
      <div className='flex justify-end'>
         <button onClick={()=>navigate('/')} type='button'
         className='bg-blue-800 text-white px-3 -y1 font-bold uppercase'>
        Volver
      </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10'>
        <p>aqui esta el formulario</p>
      </div>
     
      
    </div>
  )
}

export default NuevoCliente
