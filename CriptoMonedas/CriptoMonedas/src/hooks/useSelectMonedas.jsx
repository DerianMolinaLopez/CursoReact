import React from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
const useSelectMonedas = (label,monedas) => {
   const [state,setState] = useState('')


   const Label = styled.label`
      color: white;
      display: block;
      font-family: 'Lato',sans-serif;
      font-size: 24px;
      font-weight: 700;
      margin: 15px 0;
   `
     const Select = styled.select`
      width: 100%;
      font-size: 18px;
      padding: 14px;
      border-radius: 10px;
      margin-bottom: 20px;
     `

   const SelectMonedaas = ()=>{
     
      return(
         <>
            <Label htmlFor="">{label}</Label>
            <Select name="" id=""
            value={state}
            onChange={e=> setState(e.target.value)}
            >
               <option value="">Selecciona tu moneda</option>
               {monedas.map( moneda =>(
                  <option key={moneda.id} value={moneda.id}>
                     {moneda.nombre}
                  </option>
                  )

               )}

            </Select>
         </>
        
      )
   }
   /*
   !cuidado con esto
   !estoy retornando un arreglo no un objeto y cuando queira usar
   !estaria suando por emdio de indice
   * const [state,SelectMonedas] = useSelectMonedas()
   no por que tenga el mismo nombre, significa que estrou
   destructurando como si tuviera los corchetes {}
   si no que en esa forma, estoy solicitando por indices
   asi que no importa el nombre que yo le ponga
   */
   
   return [state,SelectMonedaas]
}

export default useSelectMonedas
