import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generarJWT = (nombre,id) => {

    return jwt.sign({nombre,id}, process.env.JWT_KEY);
 }
 
export default generarJWT;
