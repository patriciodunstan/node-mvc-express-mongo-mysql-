const mongoose = require('mongoose');

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String,
        }
    },
    {
        timestamps: true,  //TODO createdAT, updateAT creo y actualiza fechas.
        versionKey: false
    }
);

module.exports = mongoose.model('storage', StorageScheme);