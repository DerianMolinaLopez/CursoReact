//ahora usando lo que seria ECM
import express from 'express';
import conectar from './config/db.js';
import dotenv from "dotenv";
import router from './api/usuarioRoute.js';
const app = express()
dotenv.config()
console.log(process.env.MONGO_URI)
conectar()
/*
!si queremos ver la aplicacion en el puerto asignado
!no va a mostrar nada ya que funciona mediante una peticion get
!asi que es necesario hacer una peticion al menos para renderizar 
!la pagina principal

*/

app.use("/api/usuarios",router)
const PORT = process.env.PORT || 3000

app.listen(3000, () => { 
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
   }
)



/*//passos para crear el servidor en express rapidamente
//1. importar express
const express = require('express');//--> importacion por medio de commonJS
//2. creamos la instancia de express
const app = express();
//3. definir el puerto
app.listen(3000, () => {
    console.log("el puerto corriendo")
})
// NODEMON PERMITE QUE EL SERVIDOR ESTE ESCUCHANDO A LOS CAMBIOS
*/