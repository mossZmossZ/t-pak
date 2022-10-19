const express = require("express")
const router = express.Router()
const {register} = require('../controllers/userController')
const {login} = require('../controllers/authController')


router.post('/login',login)
router.post('/register',register)
module.exports = router