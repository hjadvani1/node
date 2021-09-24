const mongoose = require('mongoose')


const db = require('../util/database')

const Customer = require('../models/customer')

const order = new mongoose.Schema({
    total:{
        type:Number,
        required:true
    },
    customer_id:{
        type:mongoose.Schema.ObjectId,
        ref:Customer,
        required:true,
        index:true
    }
})


const Order = db.model('Order',order)

module.exports = Order