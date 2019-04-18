const client = require("../../config/redis");


exports.save_login_token = (args)=>{
    client.hmset(args.token,args.payload) //default 4hours
    client.expire(args.token,args.expire || 14400);
}

exports.get_login_token = (args,cb)=>{

    client.hgetall(args.token,function(err,payload){
            console.log(err,payload)
            if(err){
                return cb(err);
            }

            return cb(null,payload);
    })
}