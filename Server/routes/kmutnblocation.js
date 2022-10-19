const express = require("express")
const router = express.Router()
const {create,getAllkmutnblocation} = require('../controllers/kmutnblocationController')

//ประกาศขายหอพัก
router.post('/kmutnblocation/create',create)

//การเรียกใช้งาน
router.get('/kmutnblocations',getAllkmutnblocation)

module.exports = router