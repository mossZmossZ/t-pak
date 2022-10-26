const express = require('express')
const router = express.Router()
const roomates = require("../models/roomateDatabase")
const multer = require("multer")
const slugify = require("slugify")
const {v4:uuidv4} = require('uuid');
const {getAllroomate} = require('../controllers/roomateController')
const {getUserroomate} = require('../controllers/roomateController')
const {singleroomate} = require('../controllers/roomateController')
const {remove} = require('../controllers/roomateController')
const {getkmutnbRoomate} = require('../controllers/roomateController')
const {getkmitlRoomate} = require('../controllers/roomateController')
const {getkmuttRoomate} = require('../controllers/roomateController')
const {gettuRoomate} = require('../controllers/roomateController')
const storage = multer.diskStorage({
    destination: (req,file,callback) =>{
        callback(null,"../client/public/uploads");
    },
    filename: (req,file,callback)=>{
        callback(null,file.originalname);
    }
})
const uploads = multer({storage:storage});

router.post("/roomate/create",uploads.single("Image") ,(req,res) => {
    let slug = slugify(req.body.name)
    if(!slug)slug = uuidv4();
    const newroomates = new roomates({
        ID:req.body.ID,
        UNI:req.body.UNI,
        already:req.body.already,
        name:req.body.name,
        gender:req.body.gender,
        age:req.body.age,
        year:req.body.year,
        detail:req.body.detail,
        telephone:req.body.telephone,
        price:req.body.price,
        slug:slug,
        Image:req.file.originalname
    });

    newroomates
    .save()
    .then(()=> res.json("Create Succuess"))
    .catch(err=>{
        console.log(err)
        res.status(400).json(err)
    })
})

router.put("/roomate/update/:slug",(req,res) => {
    const {slug} = req.params
    roomates.findOne({slug})
    .then(article => {
        article.id = req.body.userid
        article.UNI = req.body.UNI
        article.already = req.body.already
        article.name = req.body.name
        article.gender = req.body.gender
        article.age = req.body.age
        article.year = req.body.year
        article.detail = req.body.detail
        article.telephone = req.body.telephone
        article.price = req.body.price
        //article.Image = req.file.Image

        article
            .save()
            .then(() => res.json("UPDATED!!"))
            .catch(err => res.status(400).json(err))
    })
    .catch(err => res.status(400).json(err))
    //console.log(err)
})
/*
router.get("/roomate",(req,res)=>{
    roomateDatabases.find({}).exec((err,roomate)=>{
        res.json(roomate)
    })
})

//การเรียกใช้งาน
router.post("/roomate/user",(req,res)=>{
    const userid=req.body.userid
    console.log({userid})
    roomateDatabase.find({"ID":userid})
    .then(
        resp =>{
            return res.json(resp)
        }
    )
})

router.get('/roomate/update/:slug',(req,res)=>{
    const {slug} = req.params
    roomateDatabase.findOne({slug}).exec((err,roomate)=>{
        res.json(roomate)
    })
}) 

//router.put('/kmutnblocation/update/:slug',update)
router.delete('/roomate/delete/:slug',(req,res)=>{
    const {slug} = req.params
    roomateDatabase.findOneAndRemove({slug}).exec((err,blog)=>{
        if(err) console.log(err)
        res.json({
            massage:"ลบข้อมูลเรียบร้อย"
        })
    })
})*/

router.get("/roomate",getAllroomate)
router.post("/roomate/user",getUserroomate)
router.get('/roomate/update/:slug',singleroomate)
router.delete('/roomate/delete/:slug',remove)

router.get("/roomate/kmutnb",getkmutnbRoomate)
router.get("/roomate/kmitl",getkmitlRoomate)
router.get("/roomate/kmutt",getkmuttRoomate)
router.get("/roomate/tu",gettuRoomate)

module.exports = router