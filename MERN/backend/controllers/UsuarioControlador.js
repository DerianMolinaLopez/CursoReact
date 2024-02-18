import Usuario from "../models/Usuario.js"
import generearId from "../helpers/generarId.js"
import generarJWT from "../helpers/generarJWT.js"
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
  try {
   if (await usuario.compararPassword(password)) {
     console.log("ees correcto, estas adentro");
 
     res.json({
       _id: usuario._id,
       nombre: usuario.nombre,
       email: usuario.email,
       token: generarJWT(usuario.nombre),
     });
 
   } else {
     error.message = "El password es incorrecto";
     return res.status(400).json({ msg: error.message });
   }
 } catch (error) {
   console.error("Error después de generar el token:", error);
   return res.status(500).json({ msg: "Error interno del servidor" });
 }
 
  
 }
 const confirmar = async(req,res)=>{
   //--> como su nombre lo dice, params es el parametro que estoy mandando de peticion
  // res.json({mdg:req.params})
  //? con ayuda del modelo de usuair vamos a buscar eltoken
  const {token} = req.params
  const usuarioEncontrado = await Usuario.findOne({token})
   if(!usuarioEncontrado){
      const error = new Error("El usuario no existe")
      return res.status(400).json({msg:error.message})
   }else{
      // una vez que el usuario este confirmado, modificiamos la bs
      usuarioEncontrado.confirmado = true
      usuarioEncontrado.token = ""
      await usuarioEncontrado.save()
      res.status(200).json({msg:"Usuario confirmado correctamente"})
   
   }
 }
 
 export {
    Usuarios,
    CrearUsuarios,
    autenticar,
    confirmar
 }