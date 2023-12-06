const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('m7_d8_crud_sequelize', 'node', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;