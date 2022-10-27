const mongoose = require("mongoose")

const locationSchema = mongoose.Schema({
    ID:{
        type:String,
        require:true,
        unique:false
    },
    UNI:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    },
    Image:{
        type: String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("locations",locationSchema)