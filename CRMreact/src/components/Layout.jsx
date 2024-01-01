import React from 'react'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <h3 className='font-bold text-3xl'>Esto es un header estatico</h3>
        <Outlet/>
      
    </div>
  )
}

export default Layout
