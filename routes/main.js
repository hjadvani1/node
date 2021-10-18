const express = require('express')
// const mustache = require('mustache')
const mongoose =  require('mongoose')
const Props = require('../models/props')
const Items = require('../models/props')
const Order = require('../models/props')
const router = express.Router()

router.get('/',(req,res,next)=>
{

    // const data = req.context
    res.render('home',req.context)

})


router.get('/blog',(req,res)=>
{   
        // const data = req.context
        res.render('blog',req.context)
        

})


router.get('/menu',(req,res)=>
{   
        // const data = req.context
        res.render('menu',req.context)
        

})



router.post('/reservation',(req,res)=>
{

    // res.redirect('order')
    // console.log(req.body);

    Order.create(req.body,(err)=>
    {
        if(!err)
        {
            res.redirect('reservation')
        }
        else
        {
            console.log(err);
        }
    })

    
        
        
})    
   

router.get('/reservation',(req,res)=>
    {
        console.log("enter")
        Order.find((err,docs)=>
        {
            if(!err)
            {
                // console.log(docs)
                // docs=docs.map((element,index)=>{
                //     element=`${element.name}</br>`;
                //     console.log(element)
                //     return element
                // })
                res.render('Reservation',{
                    reservation:docs
                })
                // res.json(docs)
            }
            else
            {
                    console.log(err);

            }
        })
        // res.json('hey there')
    })

    router.get('/email',(req,res)=>
    {
        res.render('email')
    
        // res.json('hey there')
    })

    router.post('/getdata',(req,res)=>
    {
        console.log("email",req.body)
        Order.findOne({email:req.body.email},(err,docs)=>
        {
            if(!err)
            {
                // console.log(docs)
                // docs=docs.map((element,index)=>{
                //     element=`${element.name}</br>`;
                //     console.log(element)
                //     return element
                // })
                console.log("data",docs)
                res.render('update',{
                    reservation:docs
                })
                // res.json(docs)
            }
            else
            {
                    console.log(err);

            }
        })
    
        // res.json('hey there')
    })


    router.post('/update',(req,res)=>
    {
        console.log("enter",req.body.cancel)
        if(req.body.cancel==="Cancel Reservation"){
            Order.deleteOne({email:req.body.email},(err,docs)=>
        {
            if(!err)
            {
                        console.log("data",docs)
                        res.redirect('reservation')
            }
            else
            {
                    console.log(err);

            }
        })
        }else{
        Order.updateOne({email:req.body.email},req.body,(err,docs)=>
        {
            if(!err)
            {
                        console.log("data",docs)
                        res.redirect('reservation')
            }
            else
            {
                    console.log(err);

            }
        })
    }
        // res.json('hey there')
    })
    // router.get('/:id',(req,res)=>
    // {

    // }


// router.post('/delete/:email',(req,res)=>
//     {
//         console.log("enter",req.params.email)
//         Order.deleteOne({email:req.body.email},(err,docs)=>
//         {
//             if(!err)
//             {
//                         console.log("data",docs)
//                         res.render('update')
//             }
//             else
//             {
//                     console.log(err);

//             }
//         })
//         // res.json('hey there')
//     })
    
    
    module.exports = router
