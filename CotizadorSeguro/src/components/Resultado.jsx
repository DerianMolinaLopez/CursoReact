import React from 'react'
import useCotizador from '../hooks/useCotizador'
import { PLANES } from '../constants'
const Resultado = () => {
    const {resultadoGlobal,datos} = useCotizador()
    const {marca,plan,year} = datos
    let planidx 
    if(plan==1){
        planidx = "basico"
    }else{
        planidx = "completo"
    }
    if (resultadoGlobal === 0) return null
  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-gray-600 font-black text-3xl'>
           Resumen 
        </h2>
        <p className='my-2 font-bold'>
        Marca:<span className='font-normal'>{marca}</span>  
         
        </p>
        <p className='my-2 font-bold'>
        Plan: <span className='font-normal'>{planidx}</span>  
         
        </p>
        <p className='my-2 font-bold'>
        Año:<span className='font-normal'>{year}</span>  
         
        </p>
        <h2 className='font-black text-4xl'>Total de la cotizacion <span className='font-normal'>{resultadoGlobal}</span></h2>
      
    </div>
  )
}

export default Resultado
