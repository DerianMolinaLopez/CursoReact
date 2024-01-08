import React from 'react'
import { MARCAS, YEARS,PLANES} from '../constants'
const Formulario = () => {
  return (
    <>
      <form action="">
        <div className='my-5'>
            <label className='blockk mb-3 font-bold text-gray-400 uppercase' htmlFor="">
                marca
            </label>
            <select className='w-full p-3 bg-white border border-gray-200' name="" id="">
                <option value="">--Slecciona una marca--</option>
                {
                    MARCAS.map(marca =>{
                        return (
                            <option key={marca.id} value={marca.id}>{marca.nombre} </option>
                        )
                    })
                }
            </select>
            <label className='blockk mb-3 font-bold text-gray-400 uppercase' htmlFor="">
                Año
            </label>
            <select className='w-full p-3 bg-white border border-gray-200' name="" id="">
                <option value="">--Slecciona el año del auto--</option>
                {
                    YEARS.map(year =>{
                        return (
                            <option key={year} value={year}>{year}</option>
                        )
                    })
                }
            </select>
            <label className='blockk mb-3 font-bold text-gray-400 uppercase' htmlFor="">
                PLANES
            </label>
            <select className='w-full p-3 bg-white border border-gray-200' name="" id="">
                <option value="">--Slecciona el plan de tu preferencia--</option>
                {
                    PLANES.map(plan =>{
                        return (
                            <option key={plan.id} value={plan.id}>{plan.nombre}</option>
                        )
                    })
                }
            </select>
        </div>
      </form>
    </>
  )
}

export default Formulario
