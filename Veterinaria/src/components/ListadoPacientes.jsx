import Paciente from "./Paciente";
const ListadoPacientes = ({pacientes}) => {
    console.log(pacientes)
    return(
        <>
        <div className="md:w-1/2 lg:w-2/5 md:h-screen mx-5 my-10c overflow-scroll ">
            <h2 className="font-black text-3xl text-center">
                Listado de pacientes
            </h2>
            <p className="text-center text-xl mt-5 mb-10">
                Administra tus {" "}
                <span className="text-indigo-600 font-bold">Pacientes y citas</span>
            </p>
            {
                pacientes.map(
                    paciente=>(
                    
                        <Paciente
                        key ={paciente.id} 
                        paciente={paciente}></Paciente>
                    )
                )
            }
           
            
           
            
        </div>
        </>
    )
}
export default ListadoPacientes;