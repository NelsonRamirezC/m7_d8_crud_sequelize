const Categoria = require("../models/Categoria.model.js");
const Producto = require("../models/Producto.model.js");

const getAllCategorias = async (req, res) => {
    try {
        let categorias = await Categoria.findAll();

        res.json({code: 200, message: "ok", categorias});
        
    } catch (error) {
        res.status(500).json({code: 500, message: "Error al consultar las categorias."})
    }
};

const getAllCategoriasWithProductos = async (req, res) => {
    try {
        let categorias = await Categoria.findAll({
            //include es igual a un join
            include: {
                model: Producto,
                as: "productos"
            }
        });

        res.json({code: 200, message: "ok", categorias});
        
    } catch (error) {
        res.status(500).json({code: 500, message: "Error al consultar las categorias."})
    }
};

const addCategoria = async (req, res) => {
    try {
        let { nombre, responsable } = req.body;

        let categoria = await Categoria.create({
            nombre, responsable
        });

        res.status(201).json({code: 201, message: "Categoria creada correctamente.", categoria})

    } catch (error) {
        res.status(500).json({code: 500, message: "Error al crear la nueva categoria."})
    }
}


module.exports = {
    getAllCategorias,
    getAllCategoriasWithProductos,
    addCategoria,
    //getCategoriaById,
    //updateCategoria,
    //deleteCategoria
};
