const express = require("express");
const Router = express.Router();

const auth = require("../../lib/authentication");


/**
 * REGISTER PACKAGE
 */

 Router.get("/register-package",(req,res,next)=>{
        /**
         * @TODO {Define Args}
         */
     auth.registration.registerPackage({},(err,info)=>{

            if(err){
                return res.json({success:false,message:"error occoured",err})
            }
            
            res.json({success:true,message:"package registered",info})

            return;
     })
     
 })

/**
 * DELETE PACKAGE
 */

Router.get("/delete-package",(req,res,next)=>{
    res.json({success:true,message:"package deleted", packageID:1})
})


 /**
  * EDIT PACKAGE
  */

 Router.get("/edit-package",(req,res,next)=>{
    res.json({success:true,message:"package edited", packageID:1})
})

  /**
   * SUSPEND PACKAGE
   */

  Router.get("/suspended-package",(req,res,next)=>{
    res.json({success:true,message:"package suspended", packageID:1})
})











module.exports = Router;