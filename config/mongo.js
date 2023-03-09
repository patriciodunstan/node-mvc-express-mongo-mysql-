const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.conecct(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopolgy: true,
    }(err, res => {
        if(!err){
            console.log('**** CONEXION CORRECTA ****')
        }else {
            console.log('**** ERROR DE CONEXION ****')
        }
    }));
};

module.exports = dbConnect