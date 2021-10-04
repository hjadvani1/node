const express = require('express')
const mongoose = require('mongoose')
const bodyparser= require('body-parser')
const routes = require('.//routes/routes')



mongoose.connect('mongodb://localhost:27017/coursedb')

const app = express()

app.use(bodyparser.json())
app.use(routes)
app.get('/',(req,res)=>
{
    res.end('Welcome to the home page')
})
app.listen(8080,()=>
{
    console.log("connceting to port 8080");
})