import express from 'express'
import { Usuarios,CrearUsuarios,autenticar,confirmar
        ,lecturaBody,recuperar,comprobarToken,nuevoPassword   ,
        perfil
    } from '../controllers/UsuarioControlador.js' 
import checkAuth from '../middleware/checkAuth.js'
const router = express.Router()


//la barra es la de la api, no de la pagina principal
//*autenticacioncreacion, registro y eliminacion de usuarios 
router.get("/",Usuarios)//?comunicado
router.post("/",CrearUsuarios)//?comunicado
router.post("/login",autenticar)
router.get("/confirmar/:token",confirmar)
router.post("/lectura",lecturaBody)
router.post("/olvidado",recuperar)
//router.get("/olvidado/:token",comprobarToken)
//router.post("/olvidado/:token",)
//compactamos el codigo, para que sea mas facil de leer ya que ambas rutas apuntan
//donde mismo, una es para get y la otra para el post
router.route("/olvidado/:token").get(comprobarToken).post(nuevoPassword)

router.get("/perfil",checkAuth,perfil)

/*
!debo tener cuidado, en el archvio del index, debo usar "use"
!para que en esta parte me deje usar la "/" como raiz de la api
*/
export default router 