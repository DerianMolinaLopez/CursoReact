import Header from "./components/Header"
import { useState } from "react"
import NuevoPresupuesto from "./components/NuevoPresupuesto"
function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  return (
   
    <>
      <div>
        <Header
        presupuesto ={presupuesto}
        setPresupuesto={setPresupuesto}
        ></Header>
      </div>
    </>
  )
}

export default App
