const slugify = require("slugify")
const kmutnblocations = require("../models/kmutnblocation")
const {v4:uuidv4} = require('uuid');
const { json } = require("express");
/*
const multer = require('multer')

const multerConfig = multer.diskStorage({
    destination:(req,file,callback) =>{
        callback(null,'public/');
    },
    filename:(req,file,callback)=>{
        const ext = file.mimetype.split('/')[1];
        callback(null,`image-${Date.now()}.${ext}`);
    },
});

const isImage = (req,file,callback) => {
    if(file.mimetype.startsWith('image')){
        callback(null,true)
    }else{
        callback(new Error('Only Image is Allowed..'))
    }
}



const upload = multer({
    storage:multerConfig,
    fileFilter:isImage,
});
exports.uploadImage = upload.single('photo');

/*exports.upload = (req,res) =>{
    console.log(req.file);
    res.status(200).json({
        success:"Success",
    });
}*/
/*
exports.create=(req,res)=>{
    const {name,detail,telephone,price}=req.body
    let slug = slugify(name)
    if(!slug)slug = uuidv4();
    const Image = req.file.Image
    

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
        case !Image:
            return res.status(400).json({error:"กรุณาแนบรูป"}) 
            break;
    }
    //บันทึกข้อมูล
    kmutnblocations.create({name,detail,telephone,price,slug},(err,kmutnblocation)=>{
        if(err){
            res.status(400).json({error:"มีชื่อหอพักซ้ำกัน"})
        }
        res.json(kmutnblocation)
    })
}*/
//ดึงข้อมูลหอพักพระนครเหนือออกมาทั้งหมด
exports.getAllkmutnblocation=(req,res)=>{
    kmutnblocations.find({}).exec((err,kmutnblocations)=>{
        res.json(kmutnblocations)
    })
}
exports.getUserkmutnblocation=(req,res)=>{
    const userid=req.body.userid
    console.log({userid})
    kmutnblocations.find({"ID":userid})
    .then(
        resp =>{
            return res.json(resp)
        }
    )
    
}
//ดึงบทความที่สนใจอ้างอิงตาม get
//ดึงบทความที่สนใจอ้างอิงตาม slug
exports.singleKmutnblocaion=(req,res)=>{
    const {slug} = req.params
    kmutnblocations.findOne({slug}).exec((err,kmutnblocation)=>{
        res.json(kmutnblocation)
    })
}
//{headers:{"ID":"userID"}}

