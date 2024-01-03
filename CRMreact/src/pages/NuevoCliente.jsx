import React from 'react'
import { useNavigate,Form,useActionData} from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
/**
 * Usare un nuevo componente que me da router dom
 * este componente me ayuda a la gestion de 
 * formularios y de peticiones http
 * ese es el componente Form
 * 
 */
export async function action({request}){//este formulario se asocia en el main jsx 
  //el request es un objeot de respuesta a una peticion
  const formData = await request.formData()//!la consulta puede tomarle tiempo
  //la razon de pedir el formData es porque es un objeto que tiene todos los datos del formulario
  //console.log(formData.get("nombre"))
  //esos name, son de las estiquetas html definidas en el formulario


  /**
   * formas en las que se pueden debiguear las variables del formData
   *  
   */
  //?por peticion 
  //  fromData.get(name)                       -> retorna el valor de la variable
  //? por medio del objeto
  //const datos = Object.fromEntries(formData) -> retorna un objeto con los datos del formulario
  //? por medio de snipet de arreglo
  //const datos = [...formData]                -> retorna un arreglo con los datos del formulario
  //*en el caso del proyecto usare la de entries
  const datos = Object.fromEntries(formData)

  //validacion del formulairo
  const errors =[]
  if(Object.values(datos).includes('')){
    errors.push("Todos los campos son obligatorios")
  }
  //retornamos el array de errores si contiene algo

  if(Object.keys(errors).length){
    return errors
  }

 
}


const NuevoCliente = () => {
  const navigate = useNavigate()//este hook especial es par poder navegar de forma dinamica


//para pasar los errores del action a este bloque de codigo, debemos usar el hook
//useActionData para saber que es lo que me esta retornando el Action
//que yo defini antes
  const errores = useActionData()
  console.log(errores)


  return (
    <div>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo cliente Clientes</h1>
      <p className='mt-10'>LLena trodos los campos para agregar un nuevo cliente
      </p>
      <div className='flex justify-end'>
         <button onClick={()=>navigate('/')} type='button'
         className='bg-blue-800 text-white px-3 -y1 font-bold uppercase'>
        Volver
      </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10'>
        {errores?.length && errores.map((error,index)=><Error key={index}>{error}</Error>  )}
        <Form action="" method='post'>
           <Formulario/>
            <input 
            className='text-white bg-blue-800 py-2 px-4 mt-5 rounded-md w-full uppercase font-bold hover:bg-blue-900'
            type="submit" name="" id=""  value="Registrar cliente"/>
        </Form>
       
      </div>
     
      
    </div>
  )
}

export default NuevoCliente
