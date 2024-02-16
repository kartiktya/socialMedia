const Sequelize = require('sequelize');

const sequelize = new Sequelize('social-media', 'root', 'mysql@50', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;