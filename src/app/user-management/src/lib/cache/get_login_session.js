const redis = require("../redis");

module.exports = (args)=>{

    return new Promise((resolve,reject)=>{
        
        redis.auth.get_login_token(args,(err,payload)=>{
            if(err){
                return reject(err);
            }

            return resolve(payload);
        })
});
}