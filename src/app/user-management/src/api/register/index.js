const {User} = require("../../lib/db/models");

module.exports = (args)=>{
    return new Promise((resolve,reject)=>{

        if(!args || typeof args !== "object"){
            return reject({success: false, message:"please provide valid args"})
        }
        let user = args;
        args.phone = [{primary:true,number: args.phone.primary},{primary:false,number:args.phone.other[0]}]
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