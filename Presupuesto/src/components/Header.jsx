import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
      <h1>Planificado de gastos</h1>
        <NuevoPresupuesto
        presupuesto ={presupuesto}
        setPresupuesto={setPresupuesto}
        ></NuevoPresupuesto>
    </header>
  )
}

export default Header
