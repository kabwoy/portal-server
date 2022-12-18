const express = require("express")
const User = require("../models/User")
const Joi = require('joi')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = express.Router()

router.post("/signup" , async(req,res)=>{
    const schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(6)
    })
    const {error , value} = schema.validate({email:req.body.email , password:req.body.password})
    if(error) return res.status(400).json({
        message:error.message
    })

    const password = await bcryptjs.hash(value.password , 12)
    
    User.create({email:value.email , password:password}).then(()=>res.status(201).json({message:'data added susscessfully'})).catch((err)=> res.json(400).json(err))
})
router.post("/login" , async(req,res)=>{

    const schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(6)
    })
    const {error , value} = schema.validate({email:req.body.email , password:req.body.password})
    if(error) return res.status(400).json({
        message:error.message
    })
    const foundEmail = await User.findOne({where:{email:value.email}})

    if(!foundEmail) return res.status(404).json({message:"no email found"})

    const validPassword = await bcryptjs.compare(value.password , foundEmail.password)
    if(!validPassword) return res.status(404).json({message:"invalid Password"})

    const token = jwt.sign({id:foundEmail.id , role:foundEmail.role} , process.env.JWT_SECRET)

    res.status(200).json(token)

})

module.exports = router
