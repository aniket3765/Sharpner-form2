const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Stock = sequelize.define('stock',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type:Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = Stock;