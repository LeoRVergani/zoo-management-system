const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('zoodb', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;


