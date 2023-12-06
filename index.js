const sequelize = require("./app/database/config.js");
const app = require("./app/app.js");

require("./app/models/index.js"); //llamado a los modelos

const main = async ()  => {

    try {
        console.log("Contenctando con la base de datos...");
        await sequelize.sync({force: false, alter: true});
        console.log("Conectado a la base de datos.");
        app.listen(3000, () =>{
            console.log("Servidor escuchando en http://localhost:3000");
        })
    } catch (error) {
        console.log(error);
        console.log("Error al iniciar aplicación.");
    }
};

main();
