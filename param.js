const express = require('express')

const app = express()

app.get('/',function(req,res){

    res.send('This Is The Hompaage')

})


//params
app.get('/profile/:name', function(req,res)
{
    res.send('Your Request to see a profile with the name of '+req.params.name)
})

app.listen(8000,()=>console.log('Connecting To The PORT 8000.........'))