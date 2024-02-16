import jwt from 'jsonwebtoken';
const generarJWT = (nombre) => {
   // sintaxis
    // (Nombre,palabra clave, expriacion)
    return jwt.sign({nombre},process.env.SECRET_JWT_SEED,{expiresIn:"2h"})
}
export default generarJWT