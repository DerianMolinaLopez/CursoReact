import React from 'react'
const pasos = [
    {paso:1, nombre:"Menu", url:"/"},
    {paso:2, nombre:"Resumen", url:"/resumen"},
    {paso:3, nombre:"Total", url:"/total"}
]
const Pasos = () => {
  return (
    <>
      <div className='flex justify-between px-10'>
        {pasos.map(paso => (
            <button key={paso.paso} className='text-2xl font-bold'>
                {paso.nombre}
            </button>
        ))}
      </div>
    </>
  )
}

export default Pasos
