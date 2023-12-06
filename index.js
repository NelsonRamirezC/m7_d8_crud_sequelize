const sequelize = require("./app/database/config.js");

const Producto = require("./app/models/Producto.model.js");

const main = async ()  => {
    try {
        console.log("Contenctando con la base de datos...");
        await sequelize.sync({force: true, alter: true});
        console.log("Conectado a la base de datos.");
    } catch (error) {
        console.log(error);
        console.log("Error al iniciar aplicación.");
    }
};

main();
