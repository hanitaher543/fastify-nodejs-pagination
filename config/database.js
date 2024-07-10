const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize ('dbhani01', 'postgres', 'postgres', {
    host : 'localhost',
    dialect : 'postgres',
});

module.exports = sequelize;