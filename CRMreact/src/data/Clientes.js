export async function obtenerClientes(){
  const respuesta = await fetch(import.meta.env.VITE_API_URL)
  const datos     = await respuesta.json()
  //console.log
  //console.log(datos)
  return datos
}
export async function obtenerCliente(id){
  const respuetsa = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
  const datos     = await respuetsa.json()
  //console.log(datos)
  return datos
}
export async function actualizarCliente(id,datos){ 
  try{
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
      method: 'PUT',
      body: JSON.stringify(datos),
      headers:{
        'Content-Type':'application/json'
      }
    })
    await respuesta.json()

  }catch(error){
    //console.log(error)
  }
}

export async function agregrarCliente(datos){
 // console.log(datos)
  //ahora intentamos hacer le metodo post 
  try{
    const respuesta = await fetch(import.meta.env.VITE_API_URL,{
      method: 'POST',
      body: JSON.stringify(datos),
      headers:{
        'Content-Type':'application/json'
      }
    })
    await respuesta.json()

  }catch(error){
   // console.log(error)
  }
}
export async function eliminarCliente(id){
  try{
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
      method: 'DELETE',
      
    })
    await respuesta.json()

  }catch(error){
    //console.log(error)
  }
}