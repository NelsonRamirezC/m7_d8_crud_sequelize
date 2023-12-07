const express = require("express");
const router = express.Router();
//importaciones de controladores
let { getAllProductos, addProducto, getProductoById, updateProducto, deleteProducto } = require("../controllers/productos.controllers.js");


router.get('/', getAllProductos);
router.get('/:id', getProductoById);
router.post('/', addProducto);
//PENDIENTE
//UPDATE -> PUT
router.put('/', updateProducto);
//DELETE
router.delete('/',deleteProducto);

module.exports = router;