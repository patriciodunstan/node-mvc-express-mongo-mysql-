const express = require('express');
const router = express.Router();
const { validatorCreateItem } = require('../validators/tracks');
const { getItems, getItem, createItem } = require("../controllers/tracks")
// CRUD haremos la ruta http://localhost/tracks y tendra GET, POST, DELETE, PUT

router.get("/",getItems);

router.post("/", validatorCreateItem, createItem);


module.exports = router;