import React from 'react'
import { obtenerCliente,actualizarCliente} from '../data/Clientes'
import { Form, useNavigate,useLoaderData,useActionData,redirect } from 'react-router-dom'
import Error from '../components/Error'
import Formulario from '../components/Formulario'
export async function loader ({params}){
   //console.log(params)
   const cliente = await obtenerCliente(params.id)
   //console.log(cliente)
   if(Object.values(cliente).length===0){
    throw new Response("No se encontro el cliente", {status:404})   
}
   return cliente
}
export async function action({request,params}){//este formulario se asocia en el main jsx 
    //el request es un objeot de respuesta a una peticion
    const formData = await request.formData()//!la consulta puede tomarle tiempo

    const datos = Object.fromEntries(formData)
    const errors =[]
  
    //tambien checamos si el email es valido
    const email = formData.get('email')
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)){
      errors.push("El email no es valido")
    }
    
    if(Object.values(datos).includes('')){
      errors.push("Todos los campos son obligatorios")
    }
    //retornamos el array de errores si contiene algo
  
    if(Object.keys(errors).length){
      return errors
    }
     await actualizarCliente(params.id,datos)
    return redirect('/')
   
  }

const EditarCliente = () => {
    const navigate = useNavigate()
    const cliente = useLoaderData()
    const errores= useActionData()
    
    return (
        <div>
          <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
          <p className='mt-10'>Cambia al menos un campo para editar el cliente
          </p>
          <div className='flex justify-end'>
             <button onClick={()=>navigate('/')} type='button'
             className='bg-blue-800 text-white px-3 -y1 font-bold uppercase'>
            Volver
          </button>
          </div>
          <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10'>
          {errores?.length && errores.map((error,index)=><Error key={index}>{error}</Error>  )}
            <Form action="" method='' noValidate>
               <Formulario cliente={cliente}/>
                <input 
                className='text-white bg-blue-800 py-2 px-4 mt-5 rounded-md w-full uppercase font-bold hover:bg-blue-900'
                type="submit" name="" id=""  value="Modificar Cliente"/>
            </Form>
           
          </div>
         
          
        </div>
      )
    }


export default EditarCliente
