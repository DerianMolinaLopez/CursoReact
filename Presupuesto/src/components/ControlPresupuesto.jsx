import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const ControlPresupuestp = ({presupuesto,gastos,setGastos,setIsValid ,setPresupuesto}) => {
  const [disponible,setDisponible] = useState(0)
  const [gastado,setGastado] =useState(0) 
  const [porsentaje,setPorsentaje]=useState(0)

   
  useEffect(()=>{
     const totalGastado = gastos.reduce((total,gasto)=> Number(gasto.cantidadGasto) +total, 0 )
     setGastado(totalGastado)
     const totalDisponible = presupuesto - totalGastado

     //calculamos los porsenytajes
     const nuevoPorsentaje =(((presupuesto-totalDisponible)/presupuesto)*100).toFixed(2)
   
     setTimeout(()=>{
      setPorsentaje(nuevoPorsentaje)
     },1500)


     setDisponible(totalDisponible  )
   },[gastos])//establecemos el oyente por cualquier cambio que ocurra en gastos


   const handleReiniciar = () =>{
    const respeusta = confirm("¿estas seguro que quieres reiniciar la aplicacion?")
    if(respeusta){
      setGastos([])
      setPresupuesto(0)
      setIsValid(false)
      
    }
   }


  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
            styles={buildStyles({
              pathColor: porsentaje>100 ? '#DC2626':'#3B82F6',
              trailColor:porsentaje>100 ? '#DC2626':'#f5f5f5',
              textColor:porsentaje>100 ? '#DC2626':'#3B82F6'
            })}
            value={porsentaje}
            text={`${porsentaje}% Gastado`}
            calue={0}
            ></CircularProgressbar>
        </div>
        
        <div className='contenido-presupuesto'> 
        <button className="reset-app"
          onClick={handleReiniciar}
        >Resetear aplicacion</button>
        <p>
            <span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}
        </p>
        <p className={`${disponible<0? 'negativo' : ''}`}>
            <span>Disponible:</span> {formatearPresupuesto(disponible)}
        </p>
        <p>
            <span>Gastado:</span> ${formatearPresupuesto(gastado)}
        </p>
        </div>
      
    </div>
  )
}

export default ControlPresupuestp
