import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { useEffect } from 'react'
import { monedas } from '../data/monedas'
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
  ////arreglo de las monedas que tendremos como opciones
 useEffect(() =>{
  const consutarAPI = async() =>{
     const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
     const respuesta = await fetch(url)
     const resultado = await respuesta.json()
     console.log(resultado)
  }
  consutarAPI()
 })
  //!cuidado con las monedas
  const [moneda,SelectMonedas ]= useSelectMonedas('Selecciona tu moneda',monedas) //de esta manera podemos mandar a llamar nuestro custom hook
  console.log(moneda)
  return (
    <form>
      <SelectMonedas></SelectMonedas>
        <InputSubmit type="submit" value='cotizar' />
      
    </form>
  )

}
export default Formulario
