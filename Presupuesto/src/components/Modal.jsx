import botonCerrar from '../img/cerrar.svg'
const Modal = ({setModal}) => {
   const ocultarModal = () =>{
    
    setModal(false)
   }


  return (
    <div className="modal">
        <div className='cerrar-modal'>
             <p>desde modal</p>
        <img src={botonCerrar} alt="cerrar Modal" onClick={ocultarModal} />
        <form action="" className='formulario'>
            <legend>Nuevo gasto</legend>
        </form>
        </div>
       
    </div>
  )
}

export default Modal
