const express = require("express")
const Exam = require("../models/Exam")
const router = express.Router()

router.get("/exams" , async(req,res)=>{
    const exams = await Exam.findAll({attributes:{exclude:['createdAt' , 'updatedAt' , 'type_of_exam' , 'studentId']}})
    res.status(200).json(exams)
})
router.post("/exams" , async(req,res)=>{
    Exam.create(req.body).then(()=>{
        res.status(201).json({message:"Exam details Added"})
    }).catch(err=>res.status(400).json(err))
})

module.exports = router