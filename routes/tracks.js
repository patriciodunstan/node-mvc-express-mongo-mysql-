const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem } = require("../controllers/tracks")
// CRUD haremos la ruta http://localhost/tracks y tendra GET, POST, DELETE, PUT

router.get("/",getItems);

router.get("/",createItem);


module.exports = router