const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Item = sequelize.define('item',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email:{
        type: Sequelize.STRING,
        allowNull:false
    }
    
});

module.exports = Item;