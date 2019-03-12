const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/notification_system",{useNewUrlParser:true});

const db = mongoose.connection;


db.once("open",()=>console.log(`NOTIFICATION SYSTEN DATABASE STARTED`));

db.on("error",(err)=>console.error(err) && process.exit(1));



module.exports = db;