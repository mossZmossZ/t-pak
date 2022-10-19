const userData = require('../models/User')


exports.register=(req,res)=>{
    //ข้อมูล username , password
    const ID = req.body.ID
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
    console.log({ID,password,confirmpassword})

    switch(true){
        case !ID:
            return res.status(400).json({error:"กรุณากรอก ID"})
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
    userData.create({ID,password,confirmpassword},(err,userdata)=>{
        if(err){
            res.status(400).json({error:"มีชื่อ username ซ้ำกัน"})
        }
        res.json(userdata)
    })
}

