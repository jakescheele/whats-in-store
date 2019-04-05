var express = require("express");
var router=express.Router()
var db=require("../models");
var User=db.User;
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

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
          db.Category.create({name: "Misc."})
          .then(dbCategory=>User.findOneAndUpdate({_id: dat._id},  {$push: { categories: dbCategory._id }}))
          .catch(err => res.json(422,err));
        }
      })
      
    });

    router.post('/login', passport.authenticate('local'),
    function(req, res) {
      console.log(req.user)
      res.json({shopName:req.user.shopName,email:req.user.email,description:req.user.description});
    });

    router.get("/logout",function(req,res){
      console.log("logout start")
      console.log(req.user)
        req.logout();
      console.log(req.user)
        res.json({success:(req.user?"No":"Yes")})
    })

    router.get("/test", function(req,res){
      console.log(req.user)
      if(req.user){
        res.json({shopName:req.user.shopName,email:req.user.email,description:req.user.description});
      }else{
        res.json("no user")
      }
    })

    return router;
}

