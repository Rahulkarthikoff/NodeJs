const http = require('http');
const server = http.createServer((req,res)=>{
    res.write('Hello Earth , Server Created currently running');
    res.end();
}).listen(5000,()=>{
    console.log("Server is running at the port localhost:5000");
})