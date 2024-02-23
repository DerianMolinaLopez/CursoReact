import Proyecto from "../models/Proyecto.js"
const obtenerProyectos= async(req,res)=>{

// a partir de aqui el req empezara a tener la informacion
//del usuario
//hay que tener cuidado con la comuncaciond de los verbos
    const proyecto =new Proyecto(req.body) //-->cada instancia creada se hace a partir de la peticion
    proyecto.creador = req.usuario._id
    try{
      const proyectoAlacenado = await proyecto.save()
      res.status(201).json(proyectoAlacenado)//regresamos el proyecto creado via json
  } catch (error){
    console.log(error.message)
  } 
  
}
const nuevoProyecto = async(req,res)=>{
  console.log(req.body)
  return res.status(200).json({msg:"proyectos comunicados desde el servidor"})
    
}
const obtenerProyecto = async(req,res)=>{
    
}
const editarProyecto = async(req,res)=>{
    
}
const eliminarProyectors = async(req,res)=>{
    
}
const agregarColaborador = async(req,res)=>{
    
}
const eliminarColaborador = async(req,res)=>{
  return res.status(200).json({msg:"desde proyectos"})
    
}
const obtenerTareas  = async(req,res)=>{
    
}
const conectar = async (req,res)=>{
  return res.status(200).json({msg:"desde proyectos"})
}
export {
    obtenerProyectos,
    nuevoProyecto,
    obtenerProyecto,
    editarProyecto,
    eliminarProyectors,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas,conectar
}