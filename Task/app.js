const mongoose = require('mongoose')


const courseSchema = new mongoose.Schema({
    
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    category:String
})

const studentSchema = new mongoose.Schema({
    name:String,
    enroll:Number,
    courseid :[{
        type:mongoose.Schema.Types.ObjectId ,ref:'Course'
    }]
})


const teacherSchema = new mongoose.Schema({
    name:String,
    teacher_id:Number,
    courseid:[{
        type:mongoose.Schema.Types.ObjectId,ref:'Course'
    }]
})

const Course = mongoose.model('Course',courseSchema)
const Student =mongoose.model('Student',studentSchema)
const Teacher = mongoose.model('Teacher',teacherSchema)


module.exports={Course,Student,Teacher}