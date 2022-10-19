const slugify = require("slugify")
const kmutnblocations = require("../models/kmutnblocation")
const {v4:uuidv4} = require('uuid');

exports.create=(req,res)=>{
    const {name,detail,telephone,price}=req.body
    let slug = slugify(name)

    if(!slug)slug = uuidv4();


    //validate / ตรวจสอบความถูกต้องของช้อมูล
    switch(true){
        case !name:
            return res.status(400).json({error:"กรุณากรอกชื่อหอพัก"})
            break;
        case !detail:
            return res.status(400).json({error:"กรุณากรอกรายละเอียดหอพัก"}) 
            break;
        case !telephone:
            return res.status(400).json({error:"กรุณากรอกเบอร์โทรศัพท์"}) 
            break;
        case !price:
            return res.status(400).json({error:"กรุณากรอกราคาหอพัก"}) 
            break;
    }
    //บันทึกข้อมูล
    kmutnblocations.create({name,detail,telephone,price,slug},(err,kmutnblocation)=>{
        if(err){
            res.status(400).json({error:"มีชื่อหอพักซ้ำกัน"})
        }
        res.json(kmutnblocation)
    })
}
//ดึงข้อมูลหอพักพระนครเหนือออกมาทั้งหมด
exports.getAllkmutnblocation=(req,res)=>{
    kmutnblocations.find({}).exec((err,kmutnblocations)=>{
        res.json(kmutnblocations)
    })
}