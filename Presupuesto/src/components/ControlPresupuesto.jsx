
const ControlPresupuestp = ({presupuesto}) => {
  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }
  console.log(presupuesto)
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
            <span>Disponible:</span> {formatearPresupuesto(presupuesto)}
        </p>
        <p>
            <span>Gastado:</span> {formatearPresupuesto(presupuesto)}
        </p>
        </div>
      
    </div>
  )
}

export default ControlPresupuestp
