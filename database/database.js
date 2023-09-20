const Sequelize = require('sequelize');

const connection = new Sequelize('guiapressdb', 'root', '210922', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;