const express = require("express");
const router = express.Router();
//importaciones de controladores
let { getAllProductos, addProducto, getProductoById } = require("../controllers/productos.controllers.js");


router.get('/', getAllProductos);
router.get('/:id', getProductoById);
router.post('/', addProducto);

module.exports = router;