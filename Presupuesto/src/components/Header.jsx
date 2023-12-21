import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
const Header = (
  {presupuesto, 
   setPresupuesto,
   isValid,
   setIsValid,
   gastos
  }
   ) => {
  return (
    <header>
      <h1>Planificado de gastos</h1>
       {isValid ? (
        <div>
           <p>Control de presupuesto</p>
           <ControlPresupuesto presupuesto ={presupuesto} 
                                gastos ={gastos}
            ></ControlPresupuesto>
        </div>
       
        
       ):(
        <NuevoPresupuesto
        presupuesto ={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValid = {setIsValid}
        ></NuevoPresupuesto>
       )
       }

        
    </header>
  )
}

export default Header
