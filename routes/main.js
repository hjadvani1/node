const express = require('express')
// const mustache = require('mustache')

const Props = require('../models/props')
const Items = require('../models/props')
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




module.exports = router
