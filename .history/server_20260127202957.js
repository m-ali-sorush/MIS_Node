
const http=require('http');
console.log("server listen on port : 8080");
http.createServer(function(req,res){
    console.log("responce ");
}).listen(8080);