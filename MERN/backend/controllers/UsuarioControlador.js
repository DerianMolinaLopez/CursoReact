import Usuario from "../models/Usuario.js"
import generearId from "../helpers/generarId.js"
const Usuarios = (req,res)=>{
    res.send("desde la api")
 }
 const CrearUsuarios = async(req,res) =>{
   //evitamos lso registros duplicados
   const {email} = req.body
   const registroAlmacenado = await Usuario.findOne({email})
   if(registroAlmacenado){
      const error = new Error("El usuario ya esta creado")
      return res.status(400).json({msg:error.message})//de esta manera doy salida a un caso de test sobre un usuario ya creado
   }



    try{
      const usuario = new Usuario(req.body)
      usuario.token = generearId()
      const usuarioAlmacenado = await usuario.save()
      res.json(usuarioAlmacenado)
      console.log(usuario)

    }catch(error){
      console.log(error)
    }
   
 }
 const autenticar =async (req,res)=>{//-->comunicado
 const {email,password} = req.body
 const error = new Error()
   //comprobar si el usuario existe 
  const usuario = await Usuario.findOne({email})
  console.log(usuario)
   if(!usuario){
      error.message = "El usuario no existe"
      return res.status(400).json({msg:error.message})
   }
 //comprobamos si esta confirmado
 if(!usuario.confirmado){
   error.message = "El usuario no esta confirmado"
   return res.status(400).json({msg:error.message})
}
  //comprobamos el password
  //tomando en cuenta que esta hasheado
  if(await usuario.compararPassword(password)){
   console.log("ees correcto, estas adentro")
   res.json({
      _id: usuario._id,
      nombre:usuario.nombre,
      email:usuario.email
   })
  }else{
   error.message = "El password es incorrecto"
   return res.status(400).json({msg:error.message})
  }
 }
 
 export {
    Usuarios,
    CrearUsuarios,
    autenticar
 }