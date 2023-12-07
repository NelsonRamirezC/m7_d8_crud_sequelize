const express = require("express");
const router = express.Router();

const controller = require("../controllers/categorias.controllers.js");


//GET ALL CATEGORIAS
router.get('/', controller.getAllCategorias);

//GET CATEGORIA BY ID
// router.get('/:id', controller.getCategoriaById);

//ADD CATEGORIA
//router.post('/', controller.addCategoria);

//UPDATE CATEGORIA-> PUT

//router.put('/', controller.updateCategoria);

//DELETE CATEGORIA
//router.delete('/', controller.deleteCategoria);

module.exports = router;