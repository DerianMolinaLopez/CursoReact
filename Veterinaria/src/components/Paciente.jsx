

const Paciente = ({paciente}) => {
    
    console.log(paciente)
    const {nombre,propietario,email,fecha,sintomas} =paciente
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
    
</div>
  )
}

export default Paciente
