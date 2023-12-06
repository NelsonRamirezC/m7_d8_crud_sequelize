const express = require("express");

//importaciones de rutas
const routeProductos = require("./routes/productos.routes.js");
const routeCategorias = require("./routes/categorias.routes.js");

const app = express();

//MIDLLEWARES GENERALES
app.use(express.json()) // req.body

//MIDDLEWARE DE RUTAS
app.use("/api/productos", routeProductos);
app.use("/api/categorias", routeCategorias);

module.exports = app;