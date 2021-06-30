const {DataTypes} = require('sequelize');
const db = require('../db/connection');

const cliente = db.define('Cliente' ,{
    Cliente_ID: {
        type:DataTypes.STRING,
        primaryKey: true
    },
    nombre_usuario: {
        type:DataTypes.STRING
    },
    contrasena: {
        type:DataTypes.STRING
    },
    nombre: {
        type:DataTypes.STRING
    },
    apellidos: {
        type:DataTypes.STRING
    },
    correo_electronico: {
        type:DataTypes.STRING
    },
    edad: {
        type:DataTypes.INTEGER
    },
    estatura: {
        type:DataTypes.DECIMAL
    },
    peso: {
        type:DataTypes.DECIMAL
    },
    imc: {
        type:DataTypes.DECIMAL
    },
    geb: {
        type:DataTypes.DECIMAL
    },
    eta: {
        type:DataTypes.DECIMAL
    },
    createdAt: {
        type:DataTypes.DATE,
        field: 'fecha_creacion'
    },  
    updatedAt: {
        type:DataTypes.DATE,
        field: 'fecha_actualizacion'
    },
});


module.exports = cliente;