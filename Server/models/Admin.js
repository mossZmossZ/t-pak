const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    ID:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model("Admin",AdminSchema)