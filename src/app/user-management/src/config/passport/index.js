const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const {User} = require("../../lib/db/models");


let options = {};


exports.configure_jwt_middleware = (args)=>{
    let options;
    options = args;
    return passport.use(new LocalStrategy({
        usernameField:"email",
        passwordField:"password"
    },function(email,password,cb){
        return User.findOne().then(user=>cb(nu,user)).catch(err=>cb(err));
    }))
}


exports.configure_local_middleware = (args)=>{
    let options;
    options = args;
    return passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: options.secret || "secret"
    },function(jwt_payload, cb){
        return User.findOne(jwt_payload.id).then(user=>cb(null,user)).catch(err=>cb(err));
    }));
}