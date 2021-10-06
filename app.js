const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')
// const cons = require('consolidate')

const Props = require('./models/props')


const app = express() 


const config = {
  views: 'views', 
  static: 'public', 
  logging: true,


}
//   db: vertex.nedb()

vertex.configureApp(app, config)

// app.engine('html',cons.mustache)
// app.set('view engine','html')
// app.set('views', __dirname + '/views');
const main = require('./routes/main')
app.use('/',main)

app.listen(8000)


module.exports = app
