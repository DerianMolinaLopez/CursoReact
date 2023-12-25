import { useState,useEffect } from "react";
import React from 'react'

const Filtros = ({filtro,setFiltro}) => {


  const handleChange = (e) => {
    setFiltro(e.target.value);
   
  }

  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
            <label htmlFor="">Filtrar Gastos</label>
            <select name="" id="" value={filtro} onChange={handleChange}>
              <option value="">--todas las categorias--</option>
              <option value="ahorro" id='ahorro'>Ahorro</option>
              <option value="comida" id='comida'>Comida</option>
              <option value="varios" id='varios'>Gastos Varios</option>
              <option value="ocio" id='Ocio'>Ocio</option>
              <option value="suscripciones" id='suscripciones'>Suscripciones</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros