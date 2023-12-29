import styled from '@emotion/styled'
import Imagen from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import useSelectMonedas from './hooks/useSelectMonedas'
import { useEffect, useState } from 'react'
//con ese importe ya podemos crear styled components, el detalle s que creamos 
//estilos como si fueran componentes de JSX

//*centramos el contenido

const Contenedor = styled.div`
   margin: 0 auto;
   max-width: 900px;
   width: 90%;
   @media (min-width:992px){
    display: grid;
    grid-template-columns: 50% 50%;//por alguna razon el repeat me lo tacha
    column-gap: 2rem;
   }
`

//*esquema de la imagen de las criptos
const ImagenCripto = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display:block;//por defecto las imagenes tienen dentro de si, uhn display inline-block
`


const Heading = styled.h1`
   font-family: 'Lato',sans-serif;
   color: #fff;
   text-align: center;
   font-weight: 700;
   margin-top: 80px;
   margin-bottom: 50px;
   font-size: 34px;
   &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
   }



`
function App() {
  const [monedas,setMonedas ]= useState({})
  const [comparacion, setComparacion] = useState('')
  useEffect(() => {//ejecutamos el codigo siempre y cuando hyaa algo en el objeto
    //va a estar escuchando los cambios en monedas
    if(Object.keys(monedas).length > 0) {
        //ejecutamos una peticion a la api
        const cotizarCripto = async () => {
         // console.log(monedas)
            const {moneda,criptoMoneda} = monedas
            const url = `https://min-api.cryptocompare.com/data/price?fsym=${criptoMoneda}&tsyms=${moneda}`;
         //   console.log(url)
               //// `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            //console.log(resultado)
            setComparacion(resultado)
        }
        cotizarCripto()

    }
  }, [monedas])


  return (
    <Contenedor>
      <ImagenCripto src={Imagen} />
      <div>
        <Heading>
          Hola mundo
        </Heading>
        <Formulario comparacion={comparacion} setMonedas={setMonedas} monedasComparacion={monedas} />
      </div>


    </Contenedor>
  )
}

export default App
