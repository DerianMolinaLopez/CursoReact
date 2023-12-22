import Header from "./components/Header"
import { useState,useEffect } from "react"
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
  const [gastoEditar, setGastoEditar] = useState({})



  useEffect(()=>{
    if(Object.keys(gastoEditar).length>0){//checamos si el objeto que queremos modificar, tiene al menos uno de sus propiedades
      setModal(true)
      
  
      setTimeout(()=>{
         setAnimarModal(true)
      },100)
    }
  },[gastoEditar])
  const guardarGasto = gasto => {
    if(gasto.id){
      // Modificamos si hay un id
      const gastosActualizados = gastos.map(gastoState => {
        // Si el id del gasto actual coincide con el id del gasto que estamos procesando, devolvemos el nuevo gasto. 
        // De lo contrario, devolvemos el gasto sin cambios.
        return gastoState.id === gasto.id ? gasto : gastoState;
      });
      setGastos(gastosActualizados);
    } else {
      // Creamos si no hay un id
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {setModal(false)}, 500);
  }
  const handleModal = ()=>{
    setModal(true)
    setGastoEditar({})

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
             setGastoEditar={setGastoEditar}
             handleModal={handleModal}
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
        gastoEditar={gastoEditar}
        animarModal={animarModal}
        guardarGasto = {guardarGasto}
        ></Modal>}
      </div>
    </>
  )
}

export default App
