import Header from "./components/Header"
import { useState } from "react"
import NuevoPresupuesto from "./components/NuevoPresupuesto"
import NUevoGasto from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal"
import { generarID } from "./helpers"
function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  const [isValid,setIsValid] = useState(false)
  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)
  const [gastos,setGastos]=useState([])
  const guardarGasto = gasto=>{ //construimos el gasto que sea enviado por el modal
     gasto.id=generarID()
     setGastos([...gastos,gasto])
     console.log(gastos)
     setAnimarModal(false)
     setTimeout(()=>{setModal(false)},500)
  }
  const handleModal = ()=>{
    setModal(true)

    setTimeout(()=>{
       setAnimarModal(true)
    },100)

  }
  return (
   
    <>
      <div>
        <Header
        presupuesto ={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid = {setIsValid}
        ></Header>
        {isValid && (
          <div className="nuevo-gasto">
            <img src={NUevoGasto} alt="" 
            onClick={handleModal}
            />
          </div>
        )}
        {modal&& <Modal 
        setModal = {setModal} 
        setAnimarModal={setAnimarModal}  
        animarModal={animarModal}
        guardarGasto = {guardarGasto}
        ></Modal>}
      </div>
    </>
  )
}

export default App
