import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generarJWT = (nombre) => {

    return jwt.sign({nombre}, process.env.JWT_KEY, {expiresIn: "2h"});
 }
 
export default generarJWT;
