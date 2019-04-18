const express = require("express");
const router = express();


router.get("/",(req,res,next)=>res.json({
    success:true,
    message: "SMS Gateway user management service",
    date:new Date(),
    internal:true,
    protected:false,
    maintainer:{
        name:"lee m. lwando",
        email:"leemlwando@gmail.com",
        company:"microtech cloud solutions",
        position:"cto"
    }
}));



module.exports = router;