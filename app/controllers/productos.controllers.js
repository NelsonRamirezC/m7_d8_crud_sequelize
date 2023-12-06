const Producto = require("../models/Producto.model.js");

const getAllProductos = async (req, res) => {
    try {
        let productos = await Producto.findAll();

        res.json({code: 200, productos, count: productos.length});
    } catch (error) {
        res.status(500).json({code: 500, message: "Error al consultar productos." })
    }
};

const addProducto = async (req, res) => {
    try {
        let { nombre, descripcion, precio, stock } = req.body;
        
        let producto = await Producto.create({
            nombre, descripcion, precio, stock
        })

        res.status(201).json({code: 201, message: "Producto creado correctamente", producto});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({code: 500, message: error.message })
    }
};

const getProductoById = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await Producto.findByPk(id);

        if(!producto){
            return res.status(404).json({code: 404, message: "Producto no encontrado."})
        }

        res.json({code: 200, producto});
    } catch (error) {
        res.status(500).json({code: 500, message: "Error al consultar el producto." })
    }
};

module.exports = {
    getAllProductos,
    addProducto,
    getProductoById
}