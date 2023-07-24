const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Aniket@3765E',{
    dialect :'mysql',
    host :'localhost'
})

module.exports = sequelize;