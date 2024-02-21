import express from 'express';

import {
    obtenerProyectos,
    nuevoProyecto,
    obtenerProyecto,
    editarProyecto,
    eliminarProyectors,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas
} from '../controllers/ProyectoControlador.js';
import checkAuth from '../middleware/checkAuth.js';
const routerProyectos = express.Router();
routerProyectos.get("/",checkAuth,obtenerProyectos)
export default routerProyectos;