const {DataTypes} = require("sequelize")
const sequelize = require("../database/conn")

module.exports = sequelize.define('student' , {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },

    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },

    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },

    dob:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    class_level:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    parent_first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    parent_last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    parent_contact:{
        type:DataTypes.STRING,
        allowNull:false
    },
    parent_second_contact:{
        type:DataTypes.STRING,
        allowNull:false
    },
    home_address:{
        type:DataTypes.STRING,
        allowNull:false
    },
})