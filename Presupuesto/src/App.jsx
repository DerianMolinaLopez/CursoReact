import Header from "./components/Header"
import { useState } from "react"
import NuevoPresupuesto from "./components/NuevoPresupuesto"
import NUevoGasto from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal"
function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  const [isValid,setIsValid] = useState(false)
  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)
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
        {modal&& <Modal setModal = {setModal} setAnimarModal={setAnimarModal}  animarModal={animarModal}></Modal>}
      </div>
    </>
  )
}

export default App
