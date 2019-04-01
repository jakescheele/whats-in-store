var router = require("express").Router();
var User=require("../models").User;
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

module.exports=function(passport){
    router.post("/auth/signup",function(req,res){
        var email = req.body.email,
        password =  User.hashPassword(req.body.password),
        shopName=req.body.shopName,
        name=req.body.description;
        User.find({email:email}).then((err,data)=>{
            if(err||data){
                res.json("server error or user found")
            }
            else{
                User.insertOne({
                    email:email,
                    password:password,
                    name:name,
                    shopName:shopName
                }).then(data=>res.json(data))
            }
        })
    })

    router.post("/auth/login",(req,res,next)=>{
        passport.authenticate('local',(err,user,info)=>{
            if(err){
                return next(err)
            }
            else if (user){
                req.login(user,(err)=>{
                    next(err)
                })
                res.json({success:req.user?"Yes":"No",user:req.user})
            }
            else{
                res.json("server error")
            }
        })
    })

    router.get("/auth/logout",function(req,res){
        const old_user=req.user;
        req.logout();
        res.json({success:(req.user?"NO":"Yes"),user:req.user,OldUser:old_user})
    })

    return router;
}


