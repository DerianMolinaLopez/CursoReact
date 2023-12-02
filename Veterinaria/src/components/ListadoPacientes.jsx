const ListadoPacientes = () => {
    return(
        <>
        <div className="w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Listado de pacientes
            </h2>
            <p className="text-center text-xl mt-5 mb-10">
                Administra tus {" "}
                <span className="text-indigo-600 font-bold">Pacientes y citas</span>
            </p>
            <div>
                <p className="m-3 bg-white text-gray-700 uppercase shadow-sm rounded-xl">
                    Nombre:
                    <span>hook  </span>
                </p>
                
            </div>
            
        </div>
        </>
    )
}
export default ListadoPacientes;