const slugify = require("slugify")
const locations = require("../models/locations")
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
exports.getlocation=(req,res)=>{
    locations.find({}).exec((err,locations)=>{
        res.json(locations)
    })
}
exports.getUserlocation=(req,res)=>{
    const userid=req.body.userid
    console.log({userid})
    locations.find({"ID":userid})
    .then(
        resp =>{
            return res.json(resp)
        }
    )
    
}
//ดึงบทความที่สนใจอ้างอิงตาม get
//ดึงบทความที่สนใจอ้างอิงตาม slug
exports.singlelocaion=(req,res)=>{
    const {slug} = req.params
    locations.findOne({slug}).exec((err,location)=>{
        res.json(location)
    })
}
//{headers:{"ID":"userID"}}
//ลบข้อมูลจาก Server
exports.remove=(req,res)=>{
    const {slug} = req.params
    locations.findOneAndRemove({slug}).exec((err,location)=>{
        if(err) console.log(err)
        res.json({
            massage:"ลบบทความเรียบร้อย"
        })
    })
}
//หาข้อมูลหอของพระนครเหนือ
exports.getkmutnblocation=(req,res)=>{
    locations.find({"UNI":"KMUTNB"}).exec((err,kmutnblocations)=>{
        res.json(kmutnblocations)
    })
}
//หาข้อมูลหอของลาดกระบัง
exports.getkmitllocation=(req,res)=>{
    locations.find({"UNI":"KMITL"}).exec((err,kmitllocations)=>{
        res.json(kmitllocations)
    })
}
//หาข้อมูลหอของบางมด
exports.getkmuttlocation=(req,res)=>{
    locations.find({"UNI":"KMUTT"}).exec((err,kmuttlocations)=>{
        res.json(kmuttlocations)
    })
}
//หาข้อมูลหอของธรรมศาสตร์
exports.gettulocation=(req,res)=>{
    locations.find({"UNI":"TU"}).exec((err,tulocations)=>{
        res.json(tulocations)
    })
}
exports.getkmutnblocation3000to5000=(req,res)=>{
    locations.find(
        {"UNI":"KMUTNB",
        "price" : { $gt :3000, $lt :5001}})
        
        .exec((err,kmutnblocations)=>{
            res.json(kmutnblocations)
        })
    }
exports.getUNIlocation=(req,res)=>{
    const UNI=req.body.uniSelect
    const gender=req.body.gender
    const priceSelect=req.body.priceSelect
    console.log({UNI})
    console.log({gender})
    console.log({priceSelect})
    locations.find(
        //{"UNI":{$nin : UNI},
        {"UNI": {$regex:UNI},
        "gender" : {$regex:gender},
        "price":{$gt :priceSelect}
        })
        .exec((err,kmutnblocations)=>{
            res.json(kmutnblocations)
        })
}
exports.getUNIpriceALllocation=(req,res)=>{
    const UNI=req.body.uniSelect
    const gender=req.body.gender
    const start=req.body.start
    const end = req.body.end
    console.log({UNI})
    console.log({gender})
    locations.find(
        //{"UNI":{$nin : UNI},
        {"UNI": {$regex:UNI},
        "gender" : {$regex:gender},
        })
        .exec((err,kmutnblocations)=>{
            res.json(kmutnblocations)
        })
}
 