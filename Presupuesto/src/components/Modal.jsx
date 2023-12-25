import botonCerrar from '../img/cerrar.svg'
import { useState,useEffect } from 'react'
import Mensaje from './Mensaje'
const Modal = ({setModal,animarModal,setAnimarModal,guardarGasto,gastoEditar,setGastoEditar}) => {
  const  [nombreGasto,setNombreGasto]=useState('')
  const  [cantidadGasto,setCantidadGasto]=useState('')
  const [categoria,setCategoria]=useState('')
  const [mensaje,setMensaje] =useState('')
  const [id,setId] = useState(0)
  const [fecha,setFecha] = useState('') 
  const handleSumbit = (e)=>{
   e.preventDefault()
   
   if([categoria,nombreGasto,cantidadGasto].includes('')){
      setMensaje("Todos los campos deben ser obligatorios")
      setTimeout(()=>{setMensaje('')},2000)
    return
   }   
  
   
   guardarGasto({nombreGasto,cantidadGasto,categoria,id,fecha})
  } 
  useEffect(()=>{
    if(Object.keys(gastoEditar).length>0){//checamos si el objeto que queremos modificar, tiene al menos uno de sus propiedades
      //si entra esta condicion significa que vamos a editar el elemento
      
      setNombreGasto(gastoEditar.nombreGasto)
      setCantidadGasto(gastoEditar.cantidadGasto)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
      
      //handleModal()
   }
  },[gastoEditar])
  const ocultarModal = () =>{
    
    setTimeout(()=>{
    setAnimarModal(false)
    },100)
    setModal(false)
   }


  return (
    <div className="modal">
        <div className='cerrar-modal'>
        <img src={botonCerrar} alt="cerrar Modal" onClick={ocultarModal} />
        </div>
        <form action="" onSubmit={handleSumbit} className={`formulario ${animarModal ? "animar":'cerrar'}`}>
            <legend>{gastoEditar.nombreGasto ? 'Editar Gasto':'Agregar nuevo gasto'}</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            <div className='campo'>
              <label htmlFor="nombre">Gasto</label>
              <input id='nombre' type="text" 
               value={nombreGasto}
               onChange={e => setNombreGasto(e.target.value)}
               placeholder='Agregar el nombre del gasto' />

            </div>
            <div className='campo'>
              <label htmlFor="cantidad">Cantidad</label>
              <input id='cantidad' 
              value ={cantidadGasto}
                 onChange={e => setCantidadGasto(e.target.value)}
              type="number" placeholder='Agregar la cantidad del gasto' />

            </div>
            <div className='campo'>
              <label htmlFor="categoria">categoria</label>
                <select name="" id="categoria"
                 value={categoria}
                 onChange={e=>setCategoria(e.target.value)}
                 >
                  <option value="">--Seleccione--</option>
                  <option value="ahorro" id='ahorro'>Ahorro</option>
                  <option value="comida" id='comida'>Comida</option>
                  <option value="casa" id='casa'>Casa</option>
                  <option value="varios" id='varios'>Gastos Varios</option>
                  <option value="ocio" id='Ocio'>Ocio</option>
                  <option value="salud" id='salud'>Salud</option>
                  <option value="suscripciones" id='suscripciones'>Suscripciones</option>
                </select>
            </div>
            <input type="submit" value={gastoEditar.nombreGasto ? 'Guardar cambios':'Agregar nuevo gasto'}/>
        </form>
       
    </div>
  )
}

export default Modal
