import React from 'react'
import styled from '@emotion/styled'
const Comparacion = styled.div`
    color: #fff;
    font-family: 'Lato',sans-serif;
    font-weight: 700;
    font-size: 25px;
`




const Resultado = ({children}) => {
   // console.log(Object.keys(children[0])[0])
 
 
  return (
    <Comparacion>
        <h2>Precio por unidad</h2>
        <p>{`${Object.values(children[0])[0]}$${Object.keys(children[0])[0]}`}</p>
    </Comparacion>
  )
}

export default Resultado
