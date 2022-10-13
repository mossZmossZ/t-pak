const express = require("express")
const router = express.Router()
const {create} = require('../controllers/blogController')
const {getAllblogs} = require('../controllers/blogController')
const {singleBlog} = require('../controllers/blogController')

router.post('/create',create)
router.get('/blogs',getAllblogs)
router.get('/blog/:slug',singleBlog)


module.exports = router