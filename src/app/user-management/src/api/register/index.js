const {User} = require("../../lib/db/models");

module.exports = (args)=>{
    return new Promise((resolve,reject)=>{

        if(!args || typeof args !== "object"){
            return reject({success: false, message:"please provide valid args"})
        }
        
        User.create(args,function(err,user){

            if(err){
                return reject(err);
            }

            if(!user){
                return reject({success:false, message: "Could not create user"})
            }

            resolve(user)
        })
    })
}