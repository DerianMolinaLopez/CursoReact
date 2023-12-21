import { useEffect, useState } from "react";
const ControlPresupuestp = ({presupuesto,gastos}) => {
  const [disponible,setDisponible] = useState(0)
  const [gastado,setGastado] =useState(0) 

   
  useEffect(()=>{
     const totalGastado = gastos.reduce((total,gasto)=>gasto.cantidadGasto +total, 0 )
     setGastado(totalGastado)
     const totalDisponible = presupuesto - totalGastado
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
            <p>AQUI VA LA GRAFICA</p>
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
