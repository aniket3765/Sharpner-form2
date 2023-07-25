const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expence = sequelize.define('expence',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = Expence;