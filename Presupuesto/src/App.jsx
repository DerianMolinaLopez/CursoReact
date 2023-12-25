import Header from "./components/Header"
import { useState,useEffect } from "react"
import ListadoGastos from "./components/ListadoGastos"
import NuevoPresupuesto from "./components/NuevoPresupuesto"
import NUevoGasto from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal"
import { generarID } from "./helpers"
import Filtros from "./components/filtros"
function App() {
  const [presupuesto,setPresupuesto] = useState(
   Number( localStorage.getItem('presupuesto')) ?? 0
  )
  const [cantidad,setCantidad] = useState(0)
  const [isValid,setIsValid] = useState(false)
  const [modal,setModal] = useState(false)
  const [animarModal,setAnimarModal] = useState(false)
  const [gastos,setGastos]=useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')):[ ]
    )
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro,setFiltro] = useState('')
  const [gastosFiltrados,setGastosFiltrados]=useState([])


  useEffect(()=>{
    if(Object.keys(gastoEditar).length>0){//checamos si el objeto que queremos modificar, tiene al menos uno de sus propiedades
      setModal(true)
      
  
      setTimeout(()=>{
         setAnimarModal(true)
      },100)
    }
  },[gastoEditar])

    //para gaurdar los elementos en storage
    useEffect(()=>{
      localStorage.setItem('presupuesto',presupuesto ?? 0)
    },[presupuesto])

    useEffect(()=>{
       localStorage.setItem('gastos',JSON.stringify(gastos)??[])
    },[gastos])

    useEffect(()=>{
     //filtramos los gastos por medio de la categoria
     const gastosFiltradosCategoria = gastos.filter(gasto=>gasto.categoria ==filtro)
   
    setGastosFiltrados(gastosFiltradosCategoria)
     
    },[filtro])
    
    useEffect(()=>{
        const presupuestoLS=Number(localStorage.getItem('presupuesto'))??0
        if(presupuestoLS>0){
          //si es mayor a cero, lo asignamos
          setIsValid(true)
        }
    },[])


  const eliminarGasto = id=>{
    const gastosFiltrados = gastos.filter(gasto=> gasto.id!=id)
    setGastos(gastosFiltrados)

  }

  const guardarGasto = gasto => {
    if(gasto.id){
      // Modificamos si hay un id
      const gastosActualizados = gastos.map(gastoState => {
        // Si el id del gasto actual coincide con el id del gasto que estamos procesando, devolvemos el nuevo gasto. 
        // De lo contrario, devolvemos el gasto sin cambios.
        return gastoState.id === gasto.id ? gasto : gastoState;
      });
      setGastos(gastosActualizados);
      setGastoEditar({})
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
        setGastos ={setGastos}
        gastos = {gastos}
        presupuesto ={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid = {setIsValid}
        ></Header>
       
        {isValid && (
          <>
          <main>
             <Filtros
               filtro={filtro}
               setFiltro={setFiltro}
             ></Filtros>
            <ListadoGastos
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}
            eliminarGasto={eliminarGasto}
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
        setGastoEditar={setGastoEditar}
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
