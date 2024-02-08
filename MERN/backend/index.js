//ahora usando lo que seria ECM
import express from 'express';
import conectar from './config/db';
const app = express()
app.listen(3000, () => { 
    console.log("el puerto corriendo")
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