import React from 'react'
import {useLoaderData} from 'react-router-dom'
import Cliente from '../components/Cliente';
//*el hecho de usar un loader, es simulando un efecto cargando la informacion de golpe
export function loader(){

  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];


    //una funcion que simula hacer una carga en el cambio de pagina para que pueda
    //darle tiempo a la hora de hacer un efecto auxiliar
    //!esta fallando obviamente por que aun no especifico que es lo que va a regresar
    return clientes
}

const Index = () => {

  const datos = useLoaderData()
  console.log(datos)
  /*
  !el useLoaderData es una funcion que esta asociada
  !por por el routin, ahi se define el loader, y ese loader 
  !realiza la operacion que tenemos en la parte superior 
  */
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-10'>Administra a tus clientes</p>
      {datos.length ? (
         <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Cliente</th>
              <th className='p-2'>Cliente</th>
              <th className='p-2'>Cliente</th>
              
            </tr>
          </thead>
          <tbody>
            {datos.map(cliente=>{
              return (
                <Cliente Cliente={cliente} key={cliente.id}></Cliente>
              )
              
               
            })}
          </tbody>

         </table>
      ) : (
        <p className='mt-5 text-center text-2xl'>No hay clientes</p>
      )}
    </>
  )
}

export default Index
