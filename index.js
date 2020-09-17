const http = require('http');
const app = require('./app')
const port = process.env.PORT || 8000

const server = http.createServer(app);

console.log("Listening at port 8000")
server.listen(port)