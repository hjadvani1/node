const express = require('express')
// const { get } = require('mongoose')
const router = express.Router()
const Quote = require('../models/db')
const bodyparser = require('body-parser')
const { json } = require('body-parser')


// router.set('view engine','hbs')

router.get('/',(req,res)=>
{
    res.render('index',{
        viewQuotes:"Add Your Name and Quotes"
    })
    
})

router.post('/',(req,res)=>
{
    // console.log(req.body);
    Quote.create(req.body,(err)=>
    {
        if(!err)
        {
            res.redirect('quotes/list')
        }
        else
        {
            console.log(err);
        }
    }
    )
})




router.get('/list',(req,res)=>
{   
    Quote.find((err,docs)=>
    {
        if(!err)
        {

            res.render('lists',{
                    list: docs
            })
            // res.json(docs)
        }
        else
        {
            console.log(err);
        }
    })
    // res.json('from list')
})

// router.put('/',)





module.exports=router