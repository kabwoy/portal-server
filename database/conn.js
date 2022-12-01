const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({username:'root' , database:'portal' , password:"" , dialect:"mysql" , host:"localhost"})

module.exports = sequelize