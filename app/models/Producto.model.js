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
  precio: {
    type: DataTypes.DECIMAL(11,2),
    allowNull: false,
    defaultValue: 999999999,
    validate: {
      min: {
        msg: "Precio debe ser mayor o igual a 0.",
        args: [0]
      }
    }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: {
        msg: "Stock debe ser mayor o igual a 0.",
        args: [0]
      }
    }
  }

}, {
  tableName: "Productos",
  timestamps: false // por defecto es true
});

module.exports = Producto;