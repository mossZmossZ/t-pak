const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt');
const user = require("../models/User")

exports.login=(req,res)=>{
    //ข้อมูล username , password
    const {ID,password} = req.body;
    const token = jwt.sign({ID},process.env.JWT_SECRET,{expiresIn:'1d'});

    user.findOne({ID})
    .then(userid => {
        if (!userid) {return res.status(404).json({error:"Not Found ID"}).end();}

        else if (userid){
            if (!password){return res.status(404).json({error:"pls enter password"}).end();}
            else if(password != userid["password"]){
                return res.status(404).json({error:"Invalid Password"})
            }
            else{
                return res.status(200).json({token,ID})
            }   
        }      
    })
    .catch(err => (next(err),res.json({error:"Error"})))
}


//ตรวจสอบ Token
exports.requireLogin=expressJWT({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth"
})