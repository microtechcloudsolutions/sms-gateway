const _package = require("../../package");
const {Package} = require("../../db/model");

/**
 * @return {Package}
 */
exports.registerPackage = function(args,cb){
    let initialBalance;
    initialBalance = 0;

    this.validateUser({},(err,user)=>{
            if(err){
                return cb(error);
            }
            if(!user){
                return cb(null,{success:false,message:"no user"})
            }

            _package.generatePackageID((err,uuid)=>{

                if(err){
                    cb(err)
                    return
                }

                /**
                 * @TODO {Error Handling}
                 */
                Package.create({
                    product_id:uuid,
                    balance: args.initialBalance || initialBalance,
                    admin:[user.user]

                }).then(package=>{
                    if(!package){
                        cb(null,{success:false,message:"package not created"})
                        return;
                    }

                    cb(null,package);
                }).catch(err=>cb(err))
            })

    })
    
}


/**
 * VALID USER AGAINST USER MANAGEMENT DATABASE
 * @TODO {Connect to User Management Service}
 */

exports.validateUser = function(args,cb){
        cb(null,{user:1});
};