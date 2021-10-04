const { Router } = require('express')
const express=require('express')
const { appendFile } = require('fs')
const mongoose =require('mongoose')
const routes = express.Router()
const {Course,Student,Teacher}= require('../app')

routes.get('/main',(req,res)=>
{
        res.send('Its Main Page')

})

routes.get('/courses',(req,res)=>
{
    res.end("Its working")
})

routes.post("/courses",(req,res,next)=>
{

    const course = new Course({
        _id : new mongoose.Types.ObjectId(),
        name:'english',
        category:'languages'
    })
    res.end(course)
    course.save()
    // const course = new Course(req.body)
    // course.save()
    // Course.create(req.body).then(courses=>res.send(courses),).catch(next)
})


routes.post("/students",(req,res)=>
{
    Student.create(req.body).then(students=>res.send(students),res.end(students)).catch(next)
})


routes.post("/teachers",(req,res)=>
{
    Teacher.create(req.body).then(teachers=>res.send(teachers)).catch(next)
})



module.exports =routes