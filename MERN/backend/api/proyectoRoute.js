import express from 'express';

import {
    obtenerProyectos,
    nuevoProyecto,
    obtenerProyecto,
    editarProyecto,
    eliminarProyectors,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas,conectar
} from '../controllers/ProyectoControlador.js';
import checkAuth from '../middleware/checkAuth.js';
const routerProyectos = express.Router();
routerProyectos.get("/proyectos",conectar)//--> los endpoints estan conectados

routerProyectos.route("/")//--> routing condicional dependiendo del tipo en el mismo origen
                 .get(checkAuth,obtenerProyectos)
                 .post(checkAuth,nuevoProyecto)


routerProyectos.route("/:id")
                .get(checkAuth,obtenerProyecto)
                .put(checkAuth,editarProyecto)
                .delete(checkAuth,eliminarProyectors)

routerProyectos.post("/agregar-colaborador/:id",checkAuth,agregarColaborador)

routerProyectos.post("/eliminar-colaborador/:id",checkAuth,eliminarColaborador)

//es mejor retornar un router propieo de este punto para no causar conflicto en el index
export default routerProyectos;