require('./models/db')
const express = require('express')
const bodyparser= require('body-parser')
const router = require('./routes/routes')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

app.use(bodyparser.urlencoded({extended:true}))

app.use('/quotes',router)
app.use(express.static(path.join(__dirname,'/views/ ')))
app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/'}))
app.set('view engine','hbs')



app.listen(8000,()=>{
    console.log('connecting to the port 8000');
})
