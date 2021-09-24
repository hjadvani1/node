const mongoose = require('mongoose')

const db = require('../util/database')
const Schema = mongoose.Schema



const customer = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const Customer = db.model('Customer',customer)

module.exports= Customer