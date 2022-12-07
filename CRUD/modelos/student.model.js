const mongoose = require('mongoose')
const Schema = mongoose.Schema

let student = new Schema ({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    active:{
        type:Boolean, default:false
    },
})


module.exports = new mongoose.model('student', student) 