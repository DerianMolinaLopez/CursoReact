import { useState, useEffect } from "react";
function Formulario() {
  const [nombre, setNombre] = useState('');//mi funcion de estado para las citas
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [erorr, setError] = useState(false);
  const [sintomas, setSintomas] = useState('');
  console.log(nombre);
  console.log(propietario);
  console.log(email);
  const handleSumbit = (e) => {
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log("hay almenos un campo vacio")
      setError(true);
    } else {
      console.log("todo esta lleno")
      setError(false);
    }
    e.preventDefault();
  }
  //setNombre('Derian ')
  /*
  REGLAS PARA USAR LOS HOOKS
    SE DEBEN COLOCAR ANTES DEL RETURN
    NO SE DEBE COLOCAR DENTRO DE CONDICIONALES NI DESPUES DE UN RETURN
    if (admin){
      const [nombre, setNombre] = useState('Hook');//esto esta incorrecto
    }
  grid e*/
  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 mx-5 my-10">
      <h2 className="font-black text-3xl text-center">desde el formularios</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow rounded-lg py-10 px-5"
        onSubmit={(e) => { handleSumbit(e) }}
        action="">
        <div>
          {erorr &&(
             <div className="bg-red-700 text-white uppercase text-center p-3 mb-3 rounded font-bold">
            <h2>hay un error</h2>
            </div>)}
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold  ">Nombre de la mascota</label>
          <input type="text" name="" placeholder="Nombre de la mascota" id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            value={nombre}
            onChange={(e) => { setNombre(e.target.value) }}
          />
        </div>

        <div>
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold  ">Nombre del propietario</label>
          <input type="text" name="" placeholder="Nombre del propietario" id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            value={propietario}
            onChange={(e) => { setPropietario(e.target.value) }}
          />
        </div>


        <div>
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold  ">Email</label>
          <input type="email" name="" placeholder="Correo" id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>

        <div>
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold  ">Fecha</label>
          <input type="date" name="" placeholder="Fecha" id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            value={fecha}
            onChange={(e) => { setFecha(e.target.value) }}
          />
        </div>

        <div>
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold  ">Describe los sintomas</label>
          <textarea name="" id="sintomas" cols="30" rows="10"
            value={sintomas}
            onChange={(e) => { setSintomas(e.target.value) }}
          ></textarea>
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar paciente" />


      </form>
    </div>
  )
}
export default Formulario;