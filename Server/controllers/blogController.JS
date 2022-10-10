//ติดต่อกับฐานข้อมูล
const slugify = require("slugify")
//บัณทึกข้อมูล
exports.create=(req,res)=>{
    const {title,content,author}=req.body
    const slug = slugify(req.body.slug)
    res.json({
        data:{title,content,author,slug}
    })
}

