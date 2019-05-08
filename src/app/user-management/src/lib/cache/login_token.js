const redis = require("../redis");
exports.cache_login_token = (args)=>{

    return redis.auth.save_login_token({payload:args.payload,token:args.token, expire:11400});
}