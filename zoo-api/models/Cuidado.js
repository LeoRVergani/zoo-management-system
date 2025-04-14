const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cuidado = sequelize.define('Cuidado', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    frequencia: DataTypes.STRING
});

module.exports = Cuidado;
