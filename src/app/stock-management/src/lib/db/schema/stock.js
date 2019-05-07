const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    bought_at:{type:Date, default:Date.now()},
    currency:{type:String, enums:["ZMK","USD"], default:"ZMK"},
    bought_by:{type:String, required:true},
    price:{type:Number,required:true},
    status:{type:String, enum:["pending","active","rejected","depleted"], default:"pending"},
    original_balance:{type:Number,required:true},
    current_balance:{type:Number},
    consumed_units:{type:Number},
    allocated_units:[{type:Schema.Types.ObjectId, ref:"Bundles"}]
});

module.exports = StockSchema;