const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const {User} = require("../../lib/db/models");


let options = {};


exports.configure_local_middleware = (args)=>{
    let options;
    options = args;
    return passport.use(new LocalStrategy({
        usernameField:"email",
        passwordField:"password"
    },function(email,password,cb){
        let payload;
        return User.findOne({email:email}).then(user=>{
            
            if(!user){
                return cb(null,false,{message:"Incorrect username"});
            }

            /**
             * TODO verify password
             *  */

            payload = {email:user.email,created: new Date()}

            cb(null,{payload,secret:process.env.JWT_SIGNIN_TOKEN || "5cb712055f91c54cf7b547fa"})
            
        }).catch(err=>{
            console.log("err",err)
            cb(err)
        });
    }))
}


exports.configure_jwt_middleware = (args)=>{
    let options;
    options = args;
    return passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: options.secret || "secret"
    },function(jwt_payload, cb){
        return User.findOne(jwt_payload.id).then(user=>cb(null,user)).catch(err=>cb(err));
    }));
}


exports.configure_passport_middleware = ()=>{
    return passport.initialize();
}