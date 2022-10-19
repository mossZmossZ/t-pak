const mongoose = require("mongoose")

const kmutnblocationSchema = mongoose.Schema({
    name:{
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
        type:String,
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

module.exports = mongoose.model("kmutnblocations",kmutnblocationSchema)