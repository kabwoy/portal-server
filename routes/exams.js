const express = require("express")
const Exam = require("../models/Exam")
const router = express.Router()

router.get("/exams" , async(req,res)=>{
    const exams = await Exam.findAll({attributes:{exclude:['createdAt' , 'updatedAt']}})
    res.status(200).json(exams)
})

router.post("/exams" , async(req,res)=>{
    Exam.create(req.body).then(()=>{
        res.status(201).json({message:"Exam details Added"})
    }).catch(err=>res.status(400).json(err))
})
router.get("/exams/:id" , async(req,res)=>{
    const exam = await Exam.findByPk(req.params.id, {attributes:{exclude:['id' , 'updatedAt' ,  'createdAt' , 'studentId' , 'type_of_exam']}})
    res.status(200).json(exam)
})

router.get("/exams/:id/edit" , async(req,res)=>{

    const exam = await Exam.findByPk(req.params.id)
    res.status(200).json(exam)
})

router.patch("/exams/:id" , async(req,res)=>{
    const exam =  Exam.update(req.body , {where:{id:req.params.id}}).then(()=>{
        res.status(201).json({message:"Data updated successfully"})
    }).catch((err)=>res.status(403).json(err.message))
})

module.exports = router