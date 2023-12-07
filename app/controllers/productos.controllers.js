const Producto = require("../models/Producto.model.js");
const Categoria = require("../models/Categoria.model.js");

const getAllProductos = async (req, res) => {
    try {
        let productos = await Producto.findAll({
            include: {
                model: Categoria,
                as: "categoria"
            }
        });

        res.json({ code: 200, productos, count: productos.length });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Error al consultar productos.",
        });
    }
};

const addProducto = async (req, res) => {
    try {
        let { nombre, descripcion, precio, stock, id_categoria } = req.body;


        let categoria = await Categoria.findByPk(id_categoria);

        if(!categoria){
            return res
                .status(400)
                .json({ code: 400, message: "Ha ingresado una categoria que no existe." });
        }

        let producto = await Producto.create({
            nombre,
            descripcion,
            precio,
            stock,
        });

        //vinculamos el producto a la categoria
        await categoria.addProducto(producto);
        
        //actualizo al objeto que será enviado al cliente el id de la categoria
        producto.id_categoria = id_categoria;

        res.status(201).json({
            code: 201,
            message: "Producto creado correctamente",
            producto,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ code: 500, message: error.message });
    }
};

const getProductoById = async (req, res) => {
    try {
        let id = req.params.id;
        let producto = await Producto.findByPk(id);

        if (!producto) {
            return res
                .status(404)
                .json({ code: 404, message: "Producto no encontrado." });
        }

        res.json({ code: 200, producto });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error al consultar el producto.",
        });
    }
};

const updateProducto = async (req, res) => {
    try {
        let { id, nombre, descripcion, precio, stock } = req.body;

        let producto = await Producto.findByPk(id);

        //si no encuentra el producto
        if (!producto) {
            return res
                .status(404)
                .json({ code: 404, message: "Producto no encontrado." });
        }

        await producto.update({
            nombre, descripcion, precio, stock
        })

        console.log(producto);

        res.status(201).json({code: 201, message: "Producto actualizado con éxito", producto})

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: error.message,
        });
    }
};

const deleteProducto = async(req,res) => {
    let id = req.query.id;
    try {

        let producto = await Producto.findByPk(id);

        //si no encuentra el producto
        if (!producto) {
            return res
                .status(404)
                .json({ code: 404, message: "Producto no encontrado." });
        }

        await producto.destroy();

        res.json({code: 200, message: `Se ha eliminado el producto "${producto.nombre}" correctamente.`, producto})
    } catch (error) {
        res.status(500).json({code: 500, message: "Error al intentar eliminar el producto con ID: " + id})
    }
};

module.exports = {
    getAllProductos,
    addProducto,
    getProductoById,
    updateProducto,
    deleteProducto
};
