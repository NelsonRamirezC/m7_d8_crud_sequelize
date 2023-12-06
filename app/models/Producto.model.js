const { DataTypes } = require('sequelize');
const sequelize = require("../database/config.js")

const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }

}, {
  tableName: "Productos",
  timestamps: false // por defecto es true
});

module.exports = Producto;