const mongoose = require("mongoose");

// mongoose.connect(`mongodb://mongodb:27017/${process.env.DB_NAME}`, {useNewUrlParser:true})
mongoose.connect(`mongodb://127.0.0.1:27017/${"sms-stock-management"}`, {useNewUrlParser:true})
const conn = mongoose.connection;

conn.on("open",()=>console.log(`Database Successfully Started`));

conn.on("error",(err)=>(console.error(err)) && process.exit(1));

module.exports = conn;