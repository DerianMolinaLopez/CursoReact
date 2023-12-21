import Header from "./components/Header"
import { useState } from "react"
import ListadoGastos from "./components/ListadoGastos"
import NuevoPresupuesto from "./components/NuevoPresupuesto"
import NUevoGasto from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal"
import { generarID } from "./helpers"
function App() {
  const [presupuesto,setPresupuesto] = useState(0)
  const [cantidad,setCantidad] = useState(0)
  const [isValid,setIsValid] = useState(false)
  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)
  const [gastos,setGastos]=useState([])
  const guardarGasto = gasto=>{ //construimos el gasto que sea enviado por el modal

     gasto.id=generarID()
     gasto.fecha = Date.now()
     setGastos([...gastos,gasto])
   
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
      <div className={modal ? 'fijar':''}> 
        <Header
        gastos = {gastos}
        presupuesto ={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid = {setIsValid}
        ></Header>
        {isValid && (
          <>
          <main>
            <ListadoGastos
             gastos={gastos}
            ></ListadoGastos>
          </main>
            <div className="nuevo-gasto">
              <img src={NUevoGasto} alt="" 
              onClick={handleModal}
              />
            </div>
          </>
          
        )}
        {modal&& <Modal 
        setModal = {setModal} 
        setAnimarModal={setAnimarModal}  
        setCantidad = {setCantidad}
        animarModal={animarModal}
        guardarGasto = {guardarGasto}
        ></Modal>}
      </div>
    </>
  )
}

export default App
