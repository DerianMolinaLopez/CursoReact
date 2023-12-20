import botonCerrar from '../img/cerrar.svg'
import { useState } from 'react'
const Modal = ({setModal,animarModal,setAnimarModal}) => {
  const  [nombreGasto,setNombreGasto]=useState('')
  const  [cantidadGasto,setCantidadGasto]=useState('')
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
        <form action="" className={`formulario ${animarModal ? "animar":'cerrar'}`}>
            <legend>Nuevo gasto</legend>
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
                <select name="" id="categoria">
                  <option value="">--Seleccione--</option>
                  <option value="" id='ahorro'>Ahorro</option>
                  <option value="" id='comida'>Comida</option>
                  <option value="" id='varios'>Gastos Varios</option>
                  <option value="" id='Ocio'>Ocio</option>
                  <option value="" id='suscripciones'>Suscripciones</option>
                </select>
            </div>
            <input type="submit" value="Agregar gasto"/>
        </form>
       
    </div>
  )
}

export default Modal
