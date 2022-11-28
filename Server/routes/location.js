const express = require("express")
const router = express.Router()
const {remove,getlocation,getUserlocation,singlelocaion} = require('../controllers/locationController')
const {getkmutnblocation,gettulocation,getkmitllocation,getkmuttlocation} = require('../controllers/locationController')
const {getkmutnblocation3000to5000,getUNIpriceALllocation,getUNIlocation} = require('../controllers/locationController')
const locations = require("../models/locations")
const multer = require("multer")
const slugify = require("slugify")
const {v4:uuidv4} = require('uuid');
//ประกาศขายหอพัก
//router.post('/kmutnblocation/create',uploadImage,create)
//router.post('/kmutnblocation/upload',uploadImage,upload)
//การเรียกใช้งาน
//router.get('/kmutnblocations',getAllkmutnblocation)
const storage = multer.diskStorage({
    destination: (req,file,callback) =>{
        callback(null,"../client/public/uploads");
    },
    filename: (req,file,callback)=>{
        callback(null,file.originalname);
    }
})
/*const multerConfig = multer.diskStorage({
    destination:(req,file,callback) =>{
        callback(null,'public/');
    },
    filename:(req,file,callback)=>{
        const ext = file.mimetype.split('/')[1];
        callback(null,`image-${Date.now()}.${ext}`);
        //callback(null,file.originalname);
    },
});
const isImage = (req,file,callback) => {
    if(file.mimetype.startsWith('image')){
        callback(null,true)
    }else{
        callback(new Error('Only Image is Allowed..'))
    }
}
*/
const uploads = multer({storage:storage});
/*const uploads = multer({
    storage:multerConfig,
    //fileFilter:isImage,
});*/

router.post("/location/create",uploads.single("Image") ,(req,res) => {
    let slug = slugify(req.body.name)
    if(!slug)slug = uuidv4();
    const newlocations = new locations({
        ID:req.body.ID,
        UNI:req.body.UNI,
        type:req.body.type,
        gender:req.body.gender,
        name:req.body.name,
        detail:req.body.detail,
        telephone:req.body.telephone,
        price:req.body.price,
        slug:slug,
        Image:req.file.originalname
    });
    switch(true){
        case !newlocations.ID:
            return res.status(400).json({error:"กรุณากรอก ID"})
            break;
        case !newlocations.UNI:
            return res.status(400).json({error:"กรุณากรอก เลือกประเภท"}) 
            break;
        case !newlocations.type:
            return res.status(400).json({error:"กรุณากรอก ระบุรูปแบบ"}) 
            break;
        
    }
    newlocations
    .save()
    .then(()=> res.json("Create Succuess"))
    .catch(err=>{
        console.log(err)
        res.status(400).json(err)
    })
})
router.put("/location/update/:slug",(req,res) => {
    const {slug} = req.params
    locations.findOne({slug})
    .then(article => {
        article.id = req.body.userid
        article.type = req.body.type
        article.gender = req.body.gender
        article.name = req.body.name
        article.UNI = req.body.UNI
        article.detail = req.body.detail
        article.price = req.body.price
        //article.Image = req.file.Image

        article
            .save()
            .then(() => res.json("UPDATED!!"))
            .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
})

//การเรียกใช้งาน
router.get('/location',getlocation)
router.post('/locations/user',getUserlocation)
router.post('/location/UNI',getUNIlocation)
router.post('/location/UNI/priceall',getUNIpriceALllocation)

router.get('/location/update/:slug',singlelocaion) 
router.get('/location/kmutnb',getkmutnblocation)
router.get('/location/TU',gettulocation)
router.get('/location/kmutt',getkmuttlocation)
router.get('/location/kmitl',getkmitllocation)
router.get('/location/kmutnb/3000to5000',getkmutnblocation3000to5000)
//router.put('/location/update/:slug',update)
router.delete('/location/delete/:slug',remove)

module.exports = router