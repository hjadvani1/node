const express = require('express')

const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res)
{
    res.sendFile('./post.html',{root:__dirname})    
})

app.post("/",function(req,res){
    var Fname = String(req.body.fName)
    var Lname= String(req.body.lName)

    // var Fullname = Fname +' '+ Lname
    
    res.send(`Welcome to the our Website , ${Fname} ${Lname} `)
})

app.listen(8080,()=>console.log("Server is running"))