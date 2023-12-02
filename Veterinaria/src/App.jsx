
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import './index.css'
function App() {
  
//mx--> margen horizontal
//my -->margen vertical
  return (
    <div className='container mx-auto mt-20'>
    <Header></Header>
    <div className='mt-12 md:flex'>
        <Formulario/>
        <ListadoPacientes/>
      
    </div>
    
    </div>
  )
}

export default App
