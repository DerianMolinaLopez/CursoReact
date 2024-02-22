const obtenerProyectos= async(req,res)=>{

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