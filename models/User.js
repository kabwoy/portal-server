const {DataTypes} = require("sequelize")
const sequelize = require("../database/conn")

module.exports = sequelize.define('user' , {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    email:{

        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.ENUM("Admin" , "Teacher"),
        defaultValue:"Admin"
    }
        
})