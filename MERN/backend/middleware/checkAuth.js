import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";



const checkAuth = async (req, res, next) => {

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.usuario = await Usuario.findById(decoded.id).select("-password");
           // console.log("______________________")
           // console.log(req.usuario)
           // console.log("antes de la salida")
            next();
        } catch (error) {
            console.log(error.message);
            return res.status(401).json({ msg: "Token no válido" });
        }
    } else {
        const error = new Error("No estás autorizado");
        return res.status(401).json({ msg: error.message });
    }
};

export default checkAuth;
