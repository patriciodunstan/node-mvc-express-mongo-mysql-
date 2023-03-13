const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    return new Promise((resolve, reject) => {
        const DB_URI = process.env.DB_URI;
        mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err, res) => {
            if(!err){
                resolve(true);
            }else {
                console.log('**** ERROR DE CONEXION ****')
                console.log(err)
                reject(false);
            }
        });
    })
};

const statusConnect = () => {
    const status = mongoose.connection.readyState;
    switch(status){
        case 0:
            console.log("db connection is disconneted");
            break;
        case 1:
            console.log("db connection is connected");
            break;
        case 2:
            console.log("db connection is connecting");
            break;
        case 3:
            console.log("db connection is disconnecting");
            statusConnect()
            break;
        default:
            console.log("db connection is uninitialized");
            statusConnect()
            break;
    }
}

module.exports = {
    dbConnect,
    statusConnect
}