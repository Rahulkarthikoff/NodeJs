const http = require('http')
var fs = require('fs');

try {  
    var data = fs.readFileSync('file.txt', 'utf8');
    console.log(data.toString());    
} catch(e) {
    console.log('Error:', e.stack);
}
const server = http.createServer((req,res)=>{
        res.write(data);
}).listen(5000,()=>{
    console.log('localhost:5000')
})