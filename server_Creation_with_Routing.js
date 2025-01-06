const http = require('http');
const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.write('Hello Earth , Server Created currently running');
        res.end();
    }else{
        res.write('404 NotFound');
        res.end();
    }
}).listen(5000,()=>{
    console.log("Server is running at the port localhost:5000");
})