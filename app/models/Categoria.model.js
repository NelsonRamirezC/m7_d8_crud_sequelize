const { DataTypes } = require('sequelize');
const sequelize = require("../database/config.js")

const Categoria = sequelize.define('Categoria', {
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  responsable: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: "Categorias",
  timestamps: false // por defecto es true
});

module.exports = Categoria;