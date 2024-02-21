import jwt from "jsonwebtoken"
import Usuario from "../models/Usuario.js"
const checkAuth = async(req, res, next) => {
    /*
    respetar el tipo de verbo que sea para que el postman pueda jalar bien
    */
    let token = ""
    
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
             token = req.headers.authorization.split(" ")[1]
             const decoded = jwt.verify(token,process.env.JWT_KEY)
             console.log(decoded)
             //console.log(token)
             req.usuario = await Usuario.findById(decoded.id).select("-password -confirmado -token -createAt -updateAt __v")//--> esto es para ignorar todo aquello que no necesitamos
             console.log("????????????????????????????")
             console.log(req.usuario)
        }catch(error){
            console.log(error.message)
            res.status(401).json({msg:"El token no es valido"})
        }
    }

    next()//-> esto me deja pasarme al siguiente metodo del middleware
    //es como hacer saltos 
}
export default checkAuth