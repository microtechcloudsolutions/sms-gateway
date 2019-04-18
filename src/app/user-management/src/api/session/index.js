const cache = require("../../lib/cache");

module.exports  = (args,cb)=>{


    cache.session({token:args.token}).then(_session=>{
        return cb(null,_session);
    }).catch(err=>{
        return cb(err);
    })

}