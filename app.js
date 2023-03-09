require('dotenv').config()
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo')
const app = express();

app.use(cors());//haz uso de cors, permite evitar el error de uso cruzado.

const port = process.env.PORT//hace referencia al puerto que viene con la variable de entorno.

app.listen(port, () =>{
    console.log(`Tu app is on por http://localhost:${port}`)
});//funcion para comenzar a escuchar por X puerto.

dbConnect()