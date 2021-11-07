// ((require)) to import any file / module
//if it a path on your pc start with "./"
//without adding "./" it will look for a global module
const http = require("http");
const fs = require("fs");



//createServer will excute the function for every incoming request

//Sending HTML response
const server = http.createServer((req , res) =>{

    const method = req.method;


    if(req.url === "/"){
        res.write('<html>');
        res.write('<head><title>ENTER A MESSAGE</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></body>');
        res.write('</html>');
        return res.end();
    }

    if(req.url === "/message" && method ==="POST"){
        fs.writeFileSync('message.txt','dummy');
        res.statusCode = 302;
        return res.end();
    }

    res.write('<html>');
    res.write('<head><title>HELLO NODE JS</title></head>');
    res.write('<body>HERE IS MY FIRST APP</body>');
    res.write('</html>');

});

server.listen(3000);