const express = require("express");
const passport = require("passport");
const router = express.Router();

const register = require("./register");
const login = require("./login");

router.get("/",(req,res,next)=>res.json({success:true, message:"SMS-GATEWAY USER MANAGEMENT SERVICE",date:(new Date),internal: true, protected: false}))

router.get("/login",(req,res,next)=>res.json({success:true,message:"Login API"}))
router.get("/register",(req,res,next)=>res.json({success:true, message: "Registration API"}))


router.post("/register",(req,res,next)=>{
    console.log(req.body)
    // {
    //     "email":"leemlwando@gmail.com",
    //     "password":"1234"
    // }


    register(req.body).then(user=>{
        res.json(user);
    }).catch(err=>res.json(err));
});

router.post("/login",passport.authenticate("local",{session:false}),(req,res,next)=>{
            console.log(req.user)
        login(req.user).then(login=>{
            login.message = "login successfull";
            login.date = new Date();
            res.json(login)
        }).catch(err=>res.json(err));
});


module.exports = router;