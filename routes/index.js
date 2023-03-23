const express = require('express');
const router = express.Router();
const fs = require('fs');

const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
    //TODO tracks.js[tracks, js]
    return filename.split('.').shift()// se usa para conseguir el nombre del archivo sin la extension
 }

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)//TODO index, tracks
    if(name !== 'index') {
        console.log(`ruta on ${name}`)
        router.use(`/${name}`,require(`./${file}`)); //TODO http://localhost:3000/api/tracks u otro router
    }
})

module.exports = router