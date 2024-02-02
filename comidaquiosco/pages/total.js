import React from 'react'
import Layout from '../layout/Layout'
const total = () => {
  return (
    <Layout pagina="resumen">
       <h1 className='text-4xl fnot-black'>Total</h1>
       <p className='text-2xl my-10'>Cofirma tu pedido a continuacion</p>
       <form>
        <div>
          <label className='block uppercase tex-slate-800 text-xl'>nombre</label>
          <input type='text' className='w-full p-2 md:w-1/3 mt-3 border border-gray-300 rounded-md' />
        </div>
        <div className='mt-10'>
         <p className='tex-2xl'>
          Total a pagar {" "} <span className='font-bold'>300</span>
          </p> 
        </div>
         <div>
        <input
        className='w-full text-center lg:w-auto px-5 py-2 rounded uppercase font-bold text-white bg-yellow-500 hover:bg-yellow-600 cursor-pointer mt-5'
        value="Confirmar pedido"></input> 
          </div>  
       </form>
    </Layout>
  )
}

export default total
