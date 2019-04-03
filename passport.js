var LocalStrategy = require('passport-local').Strategy;
var db= require("./models");
var User=db.User;

module.exports=(passport)=>{
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
    // passport.serializeUser(serializeUser);
    // passport.deserializeUser(deserializeUser);
    
    passport.use(new LocalStrategy({
        usernameField:"email",
        passwordField:"password"
        },
        function(email, password, done) {
        User.findOne({email:email})
        .then(function(data){
            console.log("hi")
            if(data){
                console.log(data)
                var valid=data.comparePassword(password,data.password)
                if(valid){
                  console.log("valid")
                  done(null,data)
                }
                else{
                  console.log("not valid")
                  done(null,false)
                }
            }
            else{
              done(null,false)
            }
        })
        }
      ));
    
}


