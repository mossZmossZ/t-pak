const slugify = require("slugify")
const roomates = require('../models/roomateDatabase')
const {v4:uuidv4} = require('uuid');
const { json } = require("express");

//ดึงข้อมูลรูมเมทออกมาทั้งหมด
exports.getAllroomate=(req,res)=>{
    roomates.find({}).exec((err,roomate)=>{
        res.json(roomate)
    })
}
exports.getUserroomate=(req,res)=>{
    const userid=req.body.userid
    console.log({userid})
    roomates.find({"ID":userid})
    .then(
        resp =>{
            return res.json(resp)
        }
    )
    
}
//ดึงบทความที่สนใจอ้างอิงตาม slug
exports.singleroomate=(req,res)=>{
    const {slug} = req.params
    roomates.findOne({slug}).exec((err,roomate)=>{
        res.json(roomate)
    })
}
//ลบข้อมูลจาก Server
exports.remove=(req,res)=>{
    const {slug} = req.params
    roomates.findOneAndRemove({slug}).exec((err,blog)=>{
        if(err) console.log(err)
        res.json({
            massage:"ลบข้อมูลเรียบร้อย"
        })
    })
}
//หาข้อมูลรูมเมทของพระนครเหนือ
exports.getkmutnbRoomate=(req,res)=>{
    roomates.find({"UNI":"KMUTNB"}).exec((err,kmutnbroomate)=>{
        res.json(kmutnbroomate)
    })
}
//หาข้อมูลรูมเมทของลาดกระบัง
exports.getkmitlRoomate=(req,res)=>{
    roomates.find({"UNI":"KMITL"}).exec((err,kmitlRoomate)=>{
        res.json(kmitlRoomate)
    })
}
//หาข้อมูลรูเมทของบางมด
exports.getkmuttRoomate=(req,res)=>{
    roomates.find({"UNI":"KMUTT"}).exec((err,kmuttRoomate)=>{
        res.json(kmuttRoomate)
    })
}
//หาข้อมูลรูมเมทของธรรมศาสตร์
exports.gettuRoomate=(req,res)=>{
    roomates.find({"UNI":"TU"}).exec((err,tuRoomate)=>{
        res.json(tuRoomate)
    })
}