import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '../helpers/formatearDinero'
const ResumenProducto = ({producto}) => {
  return (
    <div className='shadow mb-3 flex gap-10 items-center p-5'>
        <div className='md:w-1/6'>
            <Image
               src={`/img/${producto.imagen}.jpg`}
               alt={`${producto.nombre} imagen del platillo`}
               style={{borderRadius:'10%'}}
            width={300}
            height={400}
            />
        </div>
     
      <div className='md:w-5/6'>
        <p className='text-3xl font-bold'>{producto.nombre}</p>
        <p className='text-3xl font-bold mt-2'>cantidad: {producto.cantidad}</p>
        <p className='text-3xl font-bold mt-2 '>precio: <span className='text-amber-600'>{formatearDinero(producto.precio)}
            </span> </p>
            <p className='text-3xl font-bold mt-2 '>Subtotal: <span className='text-amber-600'> {producto.precio*producto.cantidad}</span></p>
      </div>
    </div>
  )
}

export default ResumenProducto
