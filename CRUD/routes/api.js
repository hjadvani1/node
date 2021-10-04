const express = require('express')
const router = express.Router()
const School = require('../models/school')


router.get('/about',(req,res)=>{
    res.send({type:'GET'})
})


router.post('/about',(req,res,next)=>{
    // console.log(req.body);
    // const school =new School(req.body)
    // school.save()
    School.create(req.body).then(school=>
   {
            res.send(school)
    }
   
    ).catch(next)
})


router.put('/about/:id',(req,res,next)=>{
    School.findByIdAndUpdate({_id:req.params.id},req.body).then(function(school){
        res.send(school)
    })
    // res.send({type:'PUT'})
})


router.delete('/about/:id',(req,res,next)=>{
    // console.log(req.params.id)
    School.findByIdAndRemove({_id:req.params.id}).then(()=>{
         School.findOne({_id:req.params.id})
        .then(school=>res.send(school))
        
    })

})


module.exports= router