const express = require("express")
const router = express.Router()
const getAllroomate = require('../controllers/roomateController')
const getUserroomate = require('../controllers/roomateController')
const singleroomate = require('../controllers/roomateController')
const remove = require('../controllers/roomateController')
const roomateDatabase = require("../models/roomate")
const multer = require("multer")
const slugify = require("slugify")
const {v4:uuidv4} = require('uuid');

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
    const newroomate = new roomate({
        ID:req.body.ID,
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

    newroomate
    .save()
    .then(()=> res.json("Create Succuess"))
    .catch(err=>{
        console.log(err)
        res.status(400).json(err)
    })
})
router.put("/roomate/update/:slug",(req,res) => {
    const {slug} = req.params
    roomateDatabase.findOne({slug})
    .then(article => {
        article.id = req.body.userid
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
})

//การเรียกใช้งาน
//router.get('/roomate',getAllroomate)
//router.post('/roomate/user',getUserroomate)

//router.get('/roomate/update/:slug',singleroomate) 

//router.put('/kmutnblocation/update/:slug',update)
router.delete('/roomate/delete/:slug',remove)

module.exports = router