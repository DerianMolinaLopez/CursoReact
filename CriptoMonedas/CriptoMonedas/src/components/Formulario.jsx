import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border:none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;//este es grosor de los que ya importe en el html
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = () => {
  const [SelectMonedas ]= useSelectMonedas() //de esta manera podemos mandar a llamar nuestro custom hook
  SelectMonedas()
  return (
    <form>
        <InputSubmit type="submit" value='cotizar' />
      
    </form>
  )

}
export default Formulario
