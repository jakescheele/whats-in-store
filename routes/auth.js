var express = require("express");
var router=express.Router()
var db=require("../models");
var User=db.User;
// const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

module.exports=function(passport){
    router.post("/signup",function(req,res){
      console.log("signup")
        User.find({email:req.body.email}).then((err,data)=>{
            if(data){
              console.log("uh oh")
              console.log(data)
              console.log(err)
                res.json("server error or user found")
            }
            else{
              console.log("making user")
              var user=new User()
                User.create({
                    email:req.body.email,
                    password:user.hashPassword(req.body.password),
                    description:req.body.description,
                    shopName:req.body.shopName
                }).then((err,dat)=> {
                  console.log(dat);
                  res.json(dat)
                }).catch(err=>res.json(err))
            }
        })
      })
      router.post('/login',passport.authenticate('local'),
      function(req, res) {
        console.log(req.user)
        console.log("yoyo")
        res.json(req);
      });

    router.get("/logout",function(req,res){
        const old_user=req.user;
        req.logout();
        res.json({success:(req.user?"NO":"Yes"),user:req.user,OldUser:old_user})
    })

    return router;
}

