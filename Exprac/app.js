const express = require('express')
const exphbs = require('express-handlebars')
const path  = require('path')
require('hbs')
require('handlebars')
const app = express()
const bodyparser= require('body-parser')

// app.use(express.static(path.join(__dirname,'./public'))) 

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
// app.engine('.hbs',exphbs({extname:".hbs",layoutsDir:"./views"}))
app.set('views',path.join(__dirname,'../views'))
app.set("view engine","hbs")


app.get('',(req,res)=>{
    res.render('home')
})

app.get('/about',(req,res)=>
{
    res.end('hello there this is about page')
})

app.listen('8080',()=>{
    console.log('connected');
})