const express = require("express");
const passport = require("passport");
const router = express.Router();

const register = require("./register");
const login = require("./login");
const session = require("./session");

const redis = require("../lib/redis");

router.get("/",(req,res,next)=>res.json({success:true, message:"SMS-GATEWAY USER MANAGEMENT SERVICE",date:(new Date),internal: true, protected: false}))

router.get("/login",(req,res,next)=>res.json({success:true,message:"Login API"}))
router.get("/register",(req,res,next)=>res.json({success:true, message: "Registration API"}))


router.post("/register",(req,res,next)=>{
    console.log(req.body)

    register(req.body).then(user=>{
        res.json(user);
    }).catch(err=>res.json(err));
});

router.post("/login",passport.authenticate("local",{session:false}),(req,res,next)=>{
    login(req.user).then(login=>{
        
        redis.auth.save_login_token({token:login.token,payload:login.payload});
        login.payload = null;
        login.message = "login successfull";
        login.date = new Date();
        res.json(login)

    }).catch(err=>{
        console.log(err)
        res.json(err)
    });
});

router.get("/session",(req,res,next)=>{

        session({token:req.query.token},(err, payload)=>{
            res.json({err,payload})
        })
})


module.exports = router;