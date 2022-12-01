const express = require("express")
const Student = require("../models/Student")
const router = express.Router()

router.get("/students" , async(req,res)=>{
    const students = await Student.findAll({})

    if(!students) return res.status(404).json({message:"Failed to get students in the db"})

    res.status(200).json(students)

})
router.post("/students" , async function(req,res){

    await Student.create(req.body)

    res.json({message:"data added successfuly"})
})

router.get("/students/:id/edit" , async(req,res)=>{

    const student = await Student.findByPk(req.params.id)
    
    res.status(200).json(student)

})

router.get("/students/:class_level/filter" , async(req,res)=>{

    const student = await Student.findAll({where:{class_level:req.params.class_level}})
    
    res.status(200).json(student)

})
router.patch("/students/:id" , async(req,res)=>{
    const student = await Student.update(req.body , {where:{id:req.params.id}})
    res.status(201).json({message:"data updated"})
})
router.delete("/students/:id" , async(req,res)=>{

    const student = await Student.findByPk(req.params.id)
    student.destroy()
    res.status(201).json({message:"Data deleted"})
})


module.exports = router