
const student = require('./student.model')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let classroom = new Schema ({
    class:{
        type:String
    },
    order:{
        type:Number
    },
    numberOfStudents:{
        type:Number
    },
    active:{
        type:Boolean
    },
    students:{
        type:Schema.Types.ObjectId,
        ref:student

    }
})


module.exports = new mongoose.model('classroom', classroom) 