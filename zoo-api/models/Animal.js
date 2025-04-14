const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Animal = sequelize.define('Animal', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    especie: DataTypes.STRING,
    habitat: DataTypes.STRING,
    paisOrigem: DataTypes.STRING
});

module.exports = Animal;
