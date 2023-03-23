//modelo para declarar un modelo de base de datos nosql

const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:["user", "admin"],
            default: "user",
        },
    },
    {
        timestamps:true,  //TODO createdAT, updateAT creo y actualiza fechas.
        versionKey: false
    }
);

module.exports = mongoose.model('users', UserScheme);