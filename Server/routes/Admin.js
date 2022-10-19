const express = require("express")
const router = express.Router()
const {register} = require('../controllers/userController')
const {login} = require('../controllers/adminController')


router.post('/adminlogin',login)

module.exports = router