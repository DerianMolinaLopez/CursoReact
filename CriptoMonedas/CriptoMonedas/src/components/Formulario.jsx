import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { useEffect,useState } from 'react'
import { monedas } from '../data/monedas'
import Error from './Error'
import Resultado from './Resultado'
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

const Formulario = ({setMonedas,monedasComparacion,comparacion}) => {
  //console.log(comparacion)
  ////arreglo de las monedas que tendremos como opciones
  //!cuidado con las monedas
  const [moneda,SelectMonedas ]= useSelectMonedas('Selecciona tu moneda',monedas) //de esta manera podemos mandar a llamar nuestro custom hook
  const [cripto,setCripto] = useState([])
  const [error,setError] = useState(false)
  const [criptoMoneda,SelectCriproMonedas] = useSelectMonedas('Selecciona tu criptomoneda',cripto)

useEffect(() => {
  const consultarAPI = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    // extraemos los resultados para meterlo en el arreglo
    const ArrayCripto = resultado.Data.map(cripto => {
      return {
        id: cripto.CoinInfo.Name,
        nombre: cripto.CoinInfo.FullName
      }
    })
    setCripto(ArrayCripto)

  }

  consultarAPI()
}, [])
const handlesubmit = e =>{
  e.preventDefault()
  if([moneda,criptoMoneda].includes('')){
      setError(true) //!componente de error
      setTimeout(() => {  
        setError(false)
      },3000)
    return
  }
  setMonedas(
    {
      moneda,
      criptoMoneda
    }
  )
  
}
  
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
        <form onSubmit={handlesubmit}>
        <SelectMonedas>
        </SelectMonedas>
        <SelectCriproMonedas/>
          <InputSubmit type="submit" value='cotizar' />
        
      </form>
      {monedasComparacion.moneda && <Resultado>{comparacion} </Resultado>}
    </>
  
  )

}
export default Formulario
