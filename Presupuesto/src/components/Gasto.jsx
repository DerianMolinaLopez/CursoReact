import React from 'react'
import { formatearFecha } from '../helpers'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'
import 'react-swipeable-list/dist/styles.css'
import {LeadingActions,
        SwipeableList,
        SwipeableListItem,
        SwipeAction,
        TrailingActions
      } from 'react-swipeable-list'


const Gasto = ({gasto,setGastoEditar,handleModal,eliminarGasto}) => {
    const {nombreGasto,categoria,cantidadGasto,id, fecha} = gasto
const diccionarioIconos = {
    ahorro : IconoAhorro,
    comida :IconoComida,
    casa : IconoCasa,
    varios : IconoGastos,
    ocio : IconoOcio,
    salud : IconoSalud,
    suscripciones: IconoSuscripciones
}
const leadingActions = ()=>(//funcion de swipe de Izquierda
  <LeadingActions>
    <SwipeAction onClick={()=> {
      setGastoEditar(gasto)}}>Modificar</SwipeAction>
  </LeadingActions>
)
const trailingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction  
       destructive={true}
       onClick={()=>eliminarGasto(id)}>
        Borrar
      </SwipeAction>
    </TrailingActions>
  );
}
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}//->estas funcion significa el efecto de delslizacmiento de la izqueirda
        trailingActions={trailingActions()}//->estas funcion significa el efecto de delslizacmiento de la derecha
      >
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img src={diccionarioIconos[categoria]}
            alt="icono del gasto" />
        <div className='descripcion-gasto'>
            <p className='categoria'>{categoria}</p>
            <p className='nombre-gasto'>{nombreGasto}</p>
            <p className='fecha-gasto'>
                agregado el: {''}
                <span>{formatearFecha(fecha)}</span>
            </p>
        </div>
   </div>      <p className='cantidad-gasto'>${cantidadGasto}</p>
     
    </div>
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto
