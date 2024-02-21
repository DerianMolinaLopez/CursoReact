import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

const checkAuth = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.usuario = await Usuario.findById(decoded.id).select("-password -confirmado -token -createAt -updateAt __v");
            next();
        } catch (error) {
            console.log(error.message);
            return res.status(404).json({ msg: "Hubo un error" });
        }
    } else {
        return res.status(401).json({ msg: "No estas autorizado" });
    }
};

export default checkAuth;
