const express = require("express")
const router = express.Router()
const {getAllkmutnbroommate,getUserkmutnbroommate,singleKmutnbroomamte,remove} = require('../controllers/kmutnbroommateController')
const kmutnbroommate = require("../models/kmutnbroommate")
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

router.post("/kmutnbroomate/create",uploads.single("Image") ,(req,res) => {
    let slug = slugify(req.body.name)
    if(!slug)slug = uuidv4();
    const newkmutnbroommate = new kmutnbroommate({
        ID:req.body.ID,
        place:req.body.place,
        name:req.body.name,
        gender:req.body.gender,
        age:req.body.age,
        detail:req.body.detail,
        telephone:req.body.telephone,
        price:req.body.price,
        slug:slug,
        Image:req.file.originalname
    });

    newkmutnbroommate
    .save()
    .then(()=> res.json("Create Succuess"))
    .catch(err=>{
        console.log(err)
        res.status(400).json(err)
    })
})
router.put("/kmutnbroommate/update/:slug",(req,res) => {
    const {slug} = req.params
    kmutnbroommate.findOne({slug})
    .then(article => {
        article.id = req.body.userid
        article.place = req.body.place
        article.name = req.body.name
        article.gender = req.body.gender
        article.age = req.body.age
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
/*router.get('/kmutnbroommate',getAllkmutnbroommate)
router.post('/kmutnbroommate/user',getUserkmutnbroommate)

router.get('/kmutnbroommate/update/:slug',singleKmutnbroomamte) 

//router.put('/kmutnblocation/update/:slug',update)
router.delete('/kmutnbroommate/delete/:slug',remove)

module.exports = router*/