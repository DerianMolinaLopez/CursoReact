function Formulario(){
  /*
  
  grid e*/
    return(
        <div className="md:w-1/2 lg:w-2/5 mb-10">
          <h2 className="font-black text-3xl text-center">desde el formularios</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {' '}
            <span className="text-indigo-600 font-bold">Administralos</span> 
          </p>
          <form className="bg-white shadow rounded-lg py-10 px-5" action="">
            <div>
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold  ">Nombre de la mascota</label>
            <input  type="text" name="" placeholder="Nombre de la mascota" id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            />
            </div>

            <div>
              <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold  ">Nombre del propietario</label>
            <input  type="text" name="" placeholder="Nombre del propietario" id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            />
            </div>


            <div>
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold  ">Email</label>
            <input  type="email" name="" placeholder="Correo" id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            />
            </div>

            <div>
              <label htmlFor="alta" className="block text-gray-700 uppercase font-bold  ">Fecha</label>
            <input  type="date" name="" placeholder="Fecha" id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            />
            </div>

            <div>
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold  ">Describe los sintomas</label>
              <textarea name="" id="sintomas" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
            value="Agregar paciente" />

            
          </form>
        </div>
    )
}
export default Formulario;