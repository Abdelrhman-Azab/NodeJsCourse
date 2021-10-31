//require to import any file / module
//if it a path on your pc start with "./"
//without adding "./" it will look for a global module
const http = require("http");



//createServer will excute the function for every incoming request
const server = http.createServer((req , res) =>{
    console.log(req);
    console.log(res);

});

server.listen(3000);