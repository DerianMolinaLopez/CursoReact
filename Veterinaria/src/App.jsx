import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import './index.css'
function App() {
  
  const [pacientes,setPacientes]=useState([]);
  const [paciente,setPaciente] = useState({})

  //el orden en el que declaras los efectos definene cual se ejecuta primero
useEffect(()=>{
  
  const obtenerLS = ()=>{
    const pacientesLS=JSON.parse(localStorage.getItem("pacientes"))??[]
    setPacientes(pacientesLS)
  }
  obtenerLS()
},[])

useEffect(()=>{
  localStorage.setItem("pacientes",JSON.stringify(pacientes))
},[pacientes])


  const eliminacionPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(pacientesActualizados);
  };
  return (
  

    <div className='container mx-auto mt-20'>
    <Header></Header>
    <div className='mt-12 md:flex'>
        <Formulario 
        paciente={paciente}
        pacientes={pacientes} setPacientes={setPacientes}/>
        <ListadoPacientes 
        
        setPaciente ={setPaciente}
        pacientes = {pacientes}
        eliminacionPaciente={eliminacionPaciente}
        />
      
    </div>
    
    </div>
  )
}

export default App
