import { useState } from 'react'
import AppClima from './components/App_clima'
import {ClimaProvider} from './context/ClimaProvider'

function App() {


  return (
    <>
    <ClimaProvider>
      <header>
        <h1>Buscador de clima</h1>
      </header>
       <AppClima />
    </ClimaProvider>
     
    </>
  )
}

export default App
