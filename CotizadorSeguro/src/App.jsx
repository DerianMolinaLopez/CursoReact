import AppSeguro from "./components/AppSeguro"
import { CotizadorProvider } from "./context/cotizadorProvider"
function App() {
 //el providrer como envuelve toda la aplicacion, entonces la informacion del provider
 //queda de forma global para poder usarlo en los componentes que tenga anidados
  return (
    <>
    <CotizadorProvider >
        <AppSeguro />
    </CotizadorProvider>
    
    </>
  )
}

export default App
