const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * PACKAGE 
 */

const PackageSchema = new Schema({
    product_id:String,
    admin:[{type:String,unique:true}], //{user_id:String,role:string}
    purchases:[], //reference ID
    balance:Number //no expiry 
});

/**
 * PURCHASES
 */

 const PurchaseSchema = new Schema({
     purchasedAt:Date,
     units:Number,
     amount:Number,
     currency:String,
     reference_id:String
 });

/**
 * SMSs
 */

 const SMSSchema = new Schema({
     sender:String, //userID
     senderID:String,
     bulk:Boolean,
    //  contacts:[{type:Schema.Types.ObjectID, ref:"Contacts"}],
     message:String,
     sent_at:Date
 });

 /**
  * CONTACTS
  */

  const ContactsSchema = new Schema({
    //   owner:{type:Schema.Types.ObjectID, ref:"Users"},
      phone_number:String,
      prefix:String, // 260
      firstName:String,
      lastName:String,
      otherNames:String,
      groups:[]
  });


  module.exports = {PackageSchema,PurchaseSchema,SMSSchema,ContactsSchema};