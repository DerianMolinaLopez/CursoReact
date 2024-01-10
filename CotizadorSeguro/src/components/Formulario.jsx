import React from 'react'
import { Fragment } from 'react'
import { useContext } from 'react'
import { MARCAS, YEARS,PLANES} from '../constants'
import useCotizador from '../hooks/useCotizador'
import {CotizadorContext} from '../context/cotizadorProvider'
import Error from './Error'

const Formulario = () => {
    
    /**
     *
     *     const {hola} = useContext(CotizadorContext)
           
           en este caso estoy extrayendo un valor del context que seria una variable
           pero tambien pueden ser funciones y demas cosas
           como no e sun arreglo, la busqueda de la variable o funcion
           es directa 
     * 
     */
    
    const {datos,handleChangeDatos,setError,
           error,cotizarSeguro,cargando,setCargando
    } = useCotizador()
    const handleSubmmit = (e) => {
        e.preventDefault()
        if(Object.values(datos).includes('')){
            //con el values es para objetos y checar si tiene un campo vacio o con un vlalor especifico
            setError(true)
             setTimeout(()=>setError(false),3000)
            return
        }
        cotizarSeguro()
       
    }
   
  return (
    <>
    {error && <Error>Todos los campos son obligatorios</Error>}
      <form action="" onSubmit={handleSubmmit}>
        <div className='my-5'>
            <label className='blockk mb-3 font-bold text-gray-400 uppercase' htmlFor="">
                marca
            </label>
            <select   onChange={e => handleChangeDatos(e)} value={datos.marca} className='w-full p-3 bg-white border border-gray-200' name="marca" id="">
                <option value="">--Slecciona una marca--</option>
                {
                    MARCAS.map(marca =>{
                        return (
                            <option key={marca.id}  value={marca.name}>{marca.nombre} </option>
                        )
                    })
                }
            </select>
            <label className='blockk mb-3 font-bold text-gray-400 uppercase' htmlFor="">
                Año
            </label>
            <select onChange={e => handleChangeDatos(e)} value={datos.year} className='w-full p-3 bg-white border border-gray-200' name="year" id="">
                <option value="">--Slecciona el año del auto--</option>
                {
                    YEARS.map(year =>{
                        return (
                            <option key={year} name={year} value={year}>{year}</option>
                        )
                    })
                }
            </select>
            <label className='blockk mb-3 font-bold text-gray-400 uppercase' htmlFor="">
                ELige un plan 
            </label>
            <div className='fexl gap-3'>
                {
                    PLANES.map(plan =>{
                        return (
                            <Fragment key={plan.id}>
                               <label htmlFor="">
                                {plan.nombre}
                               </label>
                               <input type="radio"
                                       name = "plan"
                                       value={plan.id}
                                       onChange={e => handleChangeDatos(e)}
                               />
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
        <input type="submit"
               className='w-full bg-indigo-600 cursor-pointer
                 transition-all duration-100 
               hover:bg-indigo-900 text-white font-bold p-3 uppercase'
        />
        <div>
         
            
        </div>
      </form>
    </>
  )
}

export default Formulario
