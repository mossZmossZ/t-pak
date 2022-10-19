const express = require("express")
const router = express.Router()
const {create,getAllkmutnblocation,upload, uploadImage} = require('../controllers/kmutnblocationController')

//ประกาศขายหอพัก
router.post('/kmutnblocation/create',uploadImage,create)
//router.post('/kmutnblocation/upload',uploadImage,upload)
//การเรียกใช้งาน
router.get('/kmutnblocations',getAllkmutnblocation)

module.exports = router