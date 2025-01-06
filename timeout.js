const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello"); 
    console.log("Hello sent");

    setTimeout(() => {
        res.write(" World"); 
        console.log("World sent");
        res.end(); 
    }, 5000);

    console.log("Request received");
});

server.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
});
