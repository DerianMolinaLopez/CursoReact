

const Paciente = ({paciente,setPaciente,eliminacionP}) => {
    
    
    const {nombre,propietario,email,fecha,sintomas,id} =paciente
    const handleEliminar = ()=>{//tener esta funcion provoca que espere a que suceda el evento para ejecutarse
        //eliminacionP(id)
        console.log("disparando el evento")
        const confirmacion = confirm("¿Estas seguro de eliminar este paciente?")
        if(confirmacion){
            eliminacionP(id)
        }
    }
    
  return (
    <div className="m-3 shadow-md px-5 py-10 rounded-xl bg-white">
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:
        <span className="font-normal normal-case"> {nombre}  </span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:
        <span className="font-normal normal-case"> {propietario}  </span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo:
        <span className="font-normal normal-case"> {email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha:
        <span className="font-normal normal-case">{fecha}  </span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:
        <span className="font-normal normal-case"> {sintomas} </span>
    </p>
    <div className="flex justify-between mt-5">
        <button
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase
                   rounded-lg" 
        type="button"
        onClick={()=>{
            setPaciente(paciente)
        }}>
            Editar
        </button>
        <button
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase
        rounded-lg" 
        type="button"
        onClick={handleEliminar}
        >
            ELiminar
        </button>
    </div>
    
</div>
  )
}

export default Paciente
