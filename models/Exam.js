const {DataTypes} = require("sequelize")
const sequelize = require("../database/conn")

module.exports = sequelize.define('exam' , {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    type_of_exam:{
        type:DataTypes.ENUM("Opening Term Exam" , "Mid Term Exam" , "End Of Term"),
        allowNull:false
        
    },
    English:{
        type:DataTypes.INTEGER,
        allowNull:false,

    },
    Kiswahili:{
        type:DataTypes.INTEGER,
        allowNull:false,

    },
    Math:{
        type:DataTypes.INTEGER,
        allowNull:false,

    },
    Science:{
        type:DataTypes.INTEGER,
        allowNull:false,

    },
    Social_Studies:{
        type:DataTypes.INTEGER,
        allowNull:false,

    },
    CRE:{
        type:DataTypes.INTEGER,
        allowNull:false,

    },
})