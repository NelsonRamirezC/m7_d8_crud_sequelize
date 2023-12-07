const Categoria = require("../models/Categoria.model.js");

const getAllCategorias = (req, res) => {
    res.send("ruta all categorias.");
}

module.exports = {
    getAllCategorias,
/*     addCategoria,
    getCategoriaById,
    updateCategoria,
    deleteCategoria */
};
