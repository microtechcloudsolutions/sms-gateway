const jsonwebtoken = require("jsonwebtoken");
const uuid = require("uuid/v4");


/**
 * generate unique id for the purhcased package
 */

 exports.generatePackageID = function(cb){
    let _uuid;

    _uuid = uuid();

    return cb(null,_uuid);
 }

 /**
  * check if package id exists
  */
 exports.verifyPackageID = function(){

 };

 /**
  * SET INITIAL BALANCE
  */
 exports.setInitialBalance = function(){
    
 };

 exports.addInitialUser = function(){

 };