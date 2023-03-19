
const express= require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage.js');
const { getItem, createItem } = require('../controllers/storage.js')
 //http//localhost:3000/storage

router.post("/", uploadMiddleware.single("myfile"), createItem)

module.exports = router;

