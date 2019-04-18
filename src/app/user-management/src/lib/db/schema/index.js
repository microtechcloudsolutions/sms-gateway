const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{type:String,required:true},
    password:{type:String, required:true},
    user_type:{type:String, enums:["organization", "personal"]},
    business_type:{type:String, enums:["client", "partner"]},
    provider_type:{type:Array, enums: ["sms-provider","payments-providers"]},
    user_roles:{type:String, enums:["admin","user"]},
    developer:{type:Boolean, default:false},
    api_keys:[],
    products:[],
    solutions:[],
    tickets:[],
    
});

module.exports = {UserSchema};