import { useState, useEffect } from "react";
import Error from "./Error";
/*
*en react es necesario que cuando tengas un arreglo
*no modifiques el original
*realiza una copia y en esa copia debes
*agregar los nuevos elementos
*/


function Formulario({setPacientes,pacientes,paciente}) {
  const [nombre, setNombre] = useState('');//mi funcion de estado para las citas
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [erorr, setError] = useState(false);
  const [sintomas, setSintomas] = useState('');
  /*
  !como estoy leyendo mi objeot de pacientes desde este formulario
  !va a realizar varios renders en caso de no usar useEffect
  !debido a que por cada modificacion en el mismo, se vuelve a 
  !renderizar
  */

  //*esta es la estructura simple de lo que es el useEffect
  /**
  **sirve como un oyente de un cambio en una variable, esas son
  **las dependencias que esta en el arreglo que acompaña a esa
  **estructura
  **lo que esta en el cuerpo son los cambio que realizar cuando las dependencias tenan un cambio
  */

  //este efecto se dispara en cuanto se el da click al boton de editar al componente de paciente

  //este efecto se aplica al coponente de donde se origina el evento asi 

  //asi que no hay que pensarle demaciado de donde es que ese esta originadno

  //este effect, agarra los valores del objeto y lo madna a los inputs del formulario
   useEffect(()=>{
    if(Object.keys(paciente).length>0){
      //console.log("hay algo")->este solamente brinca cuano se le da click al componente
      const{nombre,propietario,email,fecha,sintomas}=paciente
      //console.log(paciente)
      setNombre(nombre)
      setPropietario(propietario)
      setEmail(email)
      setFecha(fecha)
      setSintomas(sintomas)
    }else{
      console.log("esta vacio")
    }

   },[paciente])
  const generarId = ()=>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random+fecha;
  }
  
  const handleSumbit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log("hay almenos un campo vacio")
      setError(true);
    } else {
      console.log("todo esta lleno")
      setError(false);
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        id:generarId()
      }
     
      /*formateamos todo el formulario */
      setNombre('')
      setEmail('')
      setPropietario('')
      setFecha('')
      setSintomas('')
    }

    if(paciente.id){
       //edicion de un registro ya existente
    }else{
      setPacientes([...pacientes, objetoPaciente])
    //arefgando un registro que aun no existe  
    }
    
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
          {erorr && <Error>
            <p>Todos los campos son obligatorios</p>
            <h3>esto es un h3 del padre</h3>
            </Error>}
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
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold  ">Nombre de la mascota</label>
            <input type="text" name="" placeholder="Nombre de la mascota" id="mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                value={nombre}
                onChange={(e) => { setNombre(e.target.value) }}
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
          value={paciente ? "Editar paciente":"Agreagar paciente"} />


      </form>
    </div>
  )
}

export default Formulario;