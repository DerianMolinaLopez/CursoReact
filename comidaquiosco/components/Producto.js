import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '../helpers/formatearDinero'
const Producto = ({producto}) => {
    const {nombre,precio,imagen} = producto
    console.log(imagen)
  return (
    <div className='border p-3'>
      <Image
         src={`/img/${imagen}.jpg`}
         alt={`${nombre} imagen del platillo`}
         width={400}
         height={500}
      ></Image>
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{nombre}
          <p className='mt-5 font-black text-4xl text-amber-500'>
            {formatearDinero(precio)}
          </p>
        </h3>
      </div>
    </div>
  )
}

export default Producto