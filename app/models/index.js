const Producto = require("./Producto.model.js");
const Categoria = require("./Categoria.model.js");

//RELACIONES DE TABLAS

//RELACIÓN 1 A MUCHOS ENTRE PRODUCTOS Y CATEGORIAS

//UNA CATEGORÍA TIENE MUCHOS PRODUCTOS
Categoria.hasMany(Producto, {
    foreignKey: "id_categoria",
    as: "productos",
    //onDelete: 'SET NULL',
    //onUpdate: 'CASCADE'
});
//UN PRODUCTO PERTENECE A UNA CATEGORIA
Producto.belongsTo(Categoria, {
    foreignKey: "id_categoria",
    as: "categoria",
    //onDelete: 'SET NULL',
    //onUpdate: 'CASCADE'
});
