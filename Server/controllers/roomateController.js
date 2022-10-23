const slugify = require("slugify")
const roomateDatabase = require('../models/roomateDatabase')
const {v4:uuidv4} = require('uuid');
const { json } = require("express");
/*
//ดึงข้อมูลรูมเมทออกมาทั้งหมด
exports.getAllroomate=(req,res)=>{
    roomateDatabase.find({}).exec((err,roomate)=>{
        res.json(roomate)
    })
}
exports.getUserroomate=(req,res)=>{
    const userid=req.body.userid
    console.log({userid})
    roomateDatabase.find({"ID":userid})
    .then(
        resp =>{
            return res.json(resp)
        }
    )
    
}
//ดึงบทความที่สนใจอ้างอิงตาม slug
exports.singleroomate=(req,res)=>{
    const {slug} = req.params
    roomateDatabase.findOne({slug}).exec((err,roomate)=>{
        res.json(roomate)
    })
}
//ลบข้อมูลจาก Server
exports.remove=(req,res)=>{
    const {slug} = req.params
    roomateDatabase.findOneAndRemove({slug}).exec((err,blog)=>{
        if(err) console.log(err)
        res.json({
            massage:"ลบข้อมูลเรียบร้อย"
        })
    })
}*/