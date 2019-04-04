var express = require("express");
var router=express.Router()
var db=require("../models");
var User=db.User;
// const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

module.exports=function(passport){
    router.post("/signup",function(req,res){
        User.find({email:req.body.email}).then((data)=>{
              var user=new User()
                User.create({
                    email:req.body.email,
                    password:user.hashPassword(req.body.password),
                    description:req.body.description,
                    shopName:req.body.shopName
                }).then((data)=> {
                  console.log(data);
                  res.json(data)
                }).catch(err=>console.log(err))
        })
      })
      router.post('/login',passport.authenticate('local'),
      function(req, res) {
        console.log(req.user)
        res.json(req);
      });

    router.get("/logout",function(req,res){
        const old_user=req.user;
        req.logout();
        res.json({success:(req.user?"NO":"Yes"),user:req.user,OldUser:old_user})
    })

    return router;
}

