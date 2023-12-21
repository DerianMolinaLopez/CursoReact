import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
        console.log(gastos)
        
        
    return (
        <div className='lsitado-gastos contenedor'>
                <h2> {gastos.length ? 'Gastos':'No hay gastos'}</h2>
                {gastos.map(gasto => {
                        return <Gasto gasto ={gasto} key={gasto.id}></Gasto>
                })}
        </div>
    )
}
export default ListadoGastos
