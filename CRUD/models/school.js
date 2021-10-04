const mongoose = require('mongoose')
const Schema = mongoose.Schema


const schoolSchema = Schema({
        name:{
        type:String,
        required:[true,'name field is requires']
    },
    favWord:{
        type:String,

    },
    available:{
        type:Boolean,
        default:false

    }
})

const School = mongoose.model('school',schoolSchema)

module.exports = School