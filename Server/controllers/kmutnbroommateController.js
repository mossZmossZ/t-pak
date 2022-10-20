const slugify = require("slugify")
const kmutnbroommate = require('../models/kmutnbroommate')
const {v4:uuidv4} = require('uuid');
const { json } = require("express");

//ดึงข้อมูลรูมเมทพระนครเหนือออกมาทั้งหมด
exports.getAllkmutnbroommate=(req,res)=>{
    kmutnbroommate.find({}).exec((err,kmutnbroommate)=>{
        res.json(kmutnbroommate)
    })
}
exports.getUserkmutnbroommate=(req,res)=>{
    const userid=req.body.userid
    console.log({userid})
    kmutnbroommate.find({"ID":userid})
    .then(
        resp =>{
            return res.json(resp)
        }
    )
    
}
//ดึงบทความที่สนใจอ้างอิงตาม slug
exports.singleKmutnbroomamte=(req,res)=>{
    const {slug} = req.params
    kmutnbroommate.findOne({slug}).exec((err,kmutnbroommate)=>{
        res.json(kmutnbroommate)
    })
}
//ลบข้อมูลจาก Server
exports.remove=(req,res)=>{
    const {slug} = req.params
    kmutnbroommate.findOneAndRemove({slug}).exec((err,blog)=>{
        if(err) console.log(err)
        res.json({
            massage:"ลบบทความเรียบร้อย"
        })
    })
}