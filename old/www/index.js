const app = require("../app");
const http = require("http");


const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT,()=>`${process.env.APPNAME} has started on port ${PORT}`)