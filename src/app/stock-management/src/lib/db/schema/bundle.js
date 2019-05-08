const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @bought_at timestamp | time when bundle is bought
 * @bought_by ObjectId  | user 
 */
const BundleSchema = new Schema({
    bought_at:{type:Date, default:Date.now()},
    currency:{type:String, enums:["ZMK","USD"]},
    bought_by:{type:Schema.Types.ObjectId},
    price:{type:Number,required:true},
    status:{type:String, enum:["pending","active","rejected","depleted"] ,default:"pending"},
    original_balance:{type:Number,required:true},
    current_balance:{type:Number},
    consumed_units:{type:Number}
});

module.exports = BundleSchema;