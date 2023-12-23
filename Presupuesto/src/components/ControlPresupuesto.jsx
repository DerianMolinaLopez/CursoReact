import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const ControlPresupuestp = ({presupuesto,gastos}) => {
  const [disponible,setDisponible] = useState(0)
  const [gastado,setGastado] =useState(0) 
  const [porsentaje,setPorsentaje]=useState(0)

   
  useEffect(()=>{
     const totalGastado = gastos.reduce((total,gasto)=>gasto.cantidadGasto +total, 0 )
     setGastado(totalGastado)
     const totalDisponible = presupuesto - totalGastado

     //calculamos los porsenytajes
     const nuevoPorsentaje =(((presupuesto-totalDisponible)/presupuesto)*100).toFixed(2)
   
     setTimeout(()=>{
      setPorsentaje(nuevoPorsentaje)
     },1500)


     setDisponible(totalDisponible  )
   },[gastos])//establecemos el oyente por cualquier cambio que ocurra en gastos

 // console.log(gastos+'desde control presupuesto')
  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }
 // console.log(presupuesto)
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
            styles={buildStyles({
              pathColor:'#3B82F6',
              trailColor:'#f5f5f5',
              textColor:'#3B82F6'
            })}
            value={porsentaje}
            text={`${porsentaje} Gastado`}
            calue={0}
            ></CircularProgressbar>
        </div>
        <div className='contenido-presupuesto'> 
        <p>
            <span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}
        </p>
        <p>
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
