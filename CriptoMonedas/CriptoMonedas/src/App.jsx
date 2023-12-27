import styled from '@emotion/styled'
import Imagen from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import useSelectMonedas from './hooks/useSelectMonedas'
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


  return (
    <Contenedor>
      <ImagenCripto src={Imagen} />
      <div>
        <Heading>
          Hola mundo
        </Heading>
        <Formulario />
      </div>


    </Contenedor>
  )
}

export default App
