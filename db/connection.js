const {Sequelize} = require('sequelize');

const db = new Sequelize('nodepractica', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

module.exports = db;