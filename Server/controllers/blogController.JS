//ติดต่อกับฐานข้อมูล //ดำเนินการกับฐานข้อมูล
const slugify = require("slugify")
const Blogs = require("../models/blogs")
//บัณทึกข้อมูล
exports.create=(req,res)=>{
    const {title,content,author}=req.body
    const slug = slugify(title)

    //validate / ตรวจสอบความถูกต้องของช้อมูล
    switch(true){
        case !title:
            return res.status(400).json({error:"กรุณาป้อนชื่อบทความ"})
            break;
        case !content:
            return res.status(400).json({error:"กรุณาป้อนเนื้อหาบทความ"}) 
            break;
    }
    //บันทึกข้อมูล
    Blogs.create({title,content,author,slug},(err,blog)=>{
        if(err){
            res.status(400).json({error:err})
        }
        res.json(blog)
    })
}



