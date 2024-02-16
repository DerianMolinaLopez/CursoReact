import express from 'express'
import { Usuarios,CrearUsuarios,autenticar } from '../controllers/UsuarioControlador.js' 
const router = express.Router()


//la barra es la de la api, no de la pagina principal
//*autenticacioncreacion, registro y eliminacion de usuarios 
router.get("/",Usuarios)//?comunicado
router.post("/",CrearUsuarios)//?comunicado
router.post("/login",autenticar)

/*
!debo tener cuidado, en el archvio del index, debo usar "use"
!para que en esta parte me deje usar la "/" como raiz de la api
*/
export default router 