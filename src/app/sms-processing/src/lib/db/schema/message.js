const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    sent_by:{type:String,required:true},
    status:{type:String,enum:["pending","processing","failed","successfull"]},
    date_sent:{type:Date,default:Date.now()},
    message_type:{type:String,enum:["single","bulk"], required:true},
    message:{type:String,required:true}, //add max length
    sent_to:[],
    tags:[],
    priority:{type:String,enum:["high","moderate","low"],default:"low"}
});

module.exports = MessageSchema;