const mongoose = require("mongoose");

mongoose.connect(`mongodb://mongodb:27017/${process.env.DB_NAME}`, {useNewUrlParser:true})

const conn = mongoose.connection;

conn.on("open",()=>console.log(`Database Successfully Started`));

conn.on("error",(err)=>(console.error(err)) && process.exit(1));

module.exports = conn;