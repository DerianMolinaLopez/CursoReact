import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos,setGastoEditar,eliminarGasto}) => {
        console.log(gastos)
        
        
    return (
        <div className='lsitado-gastos contenedor'>
                <h2> {gastos.length ? 'Gastos':'No hay gastos'}</h2>
                {gastos.map(gasto => {
                        return <Gasto gasto ={gasto}
                                eliminarGasto={eliminarGasto}
                                key={gasto.id}
                                 setGastoEditar={setGastoEditar}
                                 ></Gasto>
                })}
        </div>
    )
}
export default ListadoGastos
