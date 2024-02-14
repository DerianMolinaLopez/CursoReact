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
 export {
    Usuarios,
    CrearUsuarios
 }