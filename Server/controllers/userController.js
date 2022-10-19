const userData = require('../models/User')


exports.register=(req,res)=>{
    //ข้อมูล username , password
    const ID = req.body.ID
    const username = req.body.username
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
    console.log({ID,username,password,confirmpassword})

    switch(true){
        case !ID:
            return res.status(400).json({error:"กรุณากรอก ID"})
            break;
        case !username:
            return res.status(400).json({error:"กรุณากรอก Username"}) 
            break;
        case !password:
            return res.status(400).json({error:"กรุณากรอก password"}) 
            break;
        case !confirmpassword:
            return res.status(400).json({error:"กรุณากรอก password"}) 
            break;
        case password != confirmpassword:
            return res.status(400).json({error:"Password is not match!"})
            break;
    }
    userData.create({ID,username,password,confirmpassword},(err,userdata)=>{
        if(err){
            res.status(400).json({error:"มีชื่อ ID ซ้ำกัน"})
        }
        res.json(userdata)
    })
}
