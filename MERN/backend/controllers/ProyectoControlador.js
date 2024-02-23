import Proyecto from "../models/Proyecto.js"
const obtenerProyectos= async(req,res)=>{
  //mandamos una consulta depndiendo del usuario autenticado
  const proyectos = await Proyecto.find().where("creador").equals(req.usuario)
  res.status(200).json(proyectos)
}
const nuevoProyecto = async(req,res)=>{
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
const obtenerProyecto = async (req, res) => {
  const { id } = req.params;
 
  try {
    const proyecto = await Proyecto.findById(id);
    if(!proyecto) {
      res.status(404).json({msg: 'El proyecto que estas buscando no existe'}); 
    };
 
    if(proyecto.creador.toString() !== req.usuario._id.toString()){
      res.status(403).json({msg: 'No tienes permisos'});
    };
    res.json(proyecto);
  } catch (error) {
    res.status(404).json({msg: 'El id que ingresaste no es valido'});
  };
};

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