var express = require("express");
var router=express.Router()
var db=require("../models");
var User=db.User;
// const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

module.exports=function(passport){
    router.post("/signup",function(req,res){
      console.log(req.body)
      console.log("started")
      let user=new User();
      req.body.password=user.hashPassword(req.body.password)
      User.create(req.body,(err,dat)=> {
        if(err&&err.code===11000){
          res.send("Email already taken")
        }
        else{
          console.log(dat);
          console.log("here")
          res.send("login succesful")
        }
      })
    });

    router.post('/login', passport.authenticate('local'),
    function(req, res) {
      console.log(req.user)
      res.json({shopName:req.user.shopName,email:req.user.email,description:req.user.description});
    });

    router.get("/logout",function(req,res){
        const old_user=req.user;
        req.logout();
        res.json({success:(req.user?"NO":"Yes"),user:req.user,OldUser:old_user})
    })

    return router;
}

