import express from 'express'
const router = express.Router()


//la barra es la de la api, no de la pagina principal
router.get("/",(req,res)=>{
   res.send("desde la api")
})
/*
!debo tener cuidado, en el archvio del index, debo usar "use"
!para que en esta parte me deje usar la "/" como raiz de la api
*/
export default router 