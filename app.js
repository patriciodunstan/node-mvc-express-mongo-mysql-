require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { dbConnect, statusConnect } = require('./config/mongo')
const app = express();

app.use(cors());//haz uso de cors, permite evitar el error de uso cruzado.
app.use(express.json())

const port = process.env.PORT || 3000; //hace referencia al puerto que viene con la variable de entorno.


dbConnect()
/*Aqui invocamos a las rutas*/
// TODO localhost/api/_____ API REST
app.use("/api", require("./routes")); //tiene relación directa con index al poner ./routes

app.listen(port, () =>{
    console.log(`Tu app is on en el puerto ${port}`)
    statusConnect()
});//funcion para comenzar a escuchar por X puerto.

