
const express =require('express')
const app = express()
const routes = require('./routes/api')
const bodyparser= require('body-parser')
const mongoose=require('mongoose')
// const { Mongoose } = require('mongoose')


mongoose.connect('mongodb://localhost/schooldb')


app.use(bodyparser.json())

app.use((err,req,res,next)=>
{
    // console.log(err);
    res.status(404).send({error:err.message})

})
app.use('/api',routes)

app.listen(8000,()=>
{
    console.log("connected");
})