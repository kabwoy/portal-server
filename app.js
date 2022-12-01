const express = require("express")
const cors = require("cors")
const sequelize = require("./database/conn")
const Student = require("./models/Student")
const User = require("./models/User")
const Exam = require("./models/Exam")
const studentRoutes = require("./routes/students")
const examRoutes = require("./routes/exams")
const app = express()

app.use(cors())
app.use(express.json())
app.use(studentRoutes)
app.use(examRoutes)

app.get("/" , function(req,res){
    res.json({message:"HOMEPAGE"})
})

Student.hasMany(Exam)
Exam.belongsTo(Student)
sequelize.sync({force:false})
app.listen(3000 , function(){
    console.log('server started');
})