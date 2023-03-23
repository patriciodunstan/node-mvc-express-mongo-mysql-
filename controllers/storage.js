const fs = require('fs');
const { storageModel } = require('../models');
const PUBLIC_URL= process.env.PUBLIC_URL || null; 
/**
 * Obtener lista de la base de datos!

 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});   
   res.send({ data });
};
/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {};

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { file } = req;
    const body = {
        url: `${PUBLIC_URL}/${file.filename}`,
       filename: file.filename,  
    }
    const data = await storageModel.create(body);
    res.send({ data })
};

/**
 * Actualiza un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {};

/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};