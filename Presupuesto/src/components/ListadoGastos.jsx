
import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {
     


        return (
                <div className='lsitado-gastos contenedor'>
                        
                        {filtro ? (
                        <>
                        <h2> {gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esta categoria'}</h2>
                        
                        { gastosFiltrados.map(gasto => {
                                        return <Gasto gasto={gasto}
                                                eliminarGasto={eliminarGasto}
                                                key={gasto.id}
                                                setGastoEditar={setGastoEditar}
                                        ></Gasto>
                                          })}</>
                        
                                ): (
                                        
                                 <>
                                       <h2> {gastos.length ? 'Gastos' : 'No hay gastos'}</h2>
                                 {
                                       gastos.map(gasto => {
                                        return <Gasto gasto={gasto}
                                                eliminarGasto={eliminarGasto}
                                                key={gasto.id}
                                                setGastoEditar={setGastoEditar}
                                        ></Gasto>
                                }

                                )     
                                 }</>       
                            

                        )}
                </div>
        )
}
export default ListadoGastos
