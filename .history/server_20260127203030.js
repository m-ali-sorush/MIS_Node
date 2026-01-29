
const http=require('http');
console.log("server listen on port : 8080");
http.createServer(function(req,res){
    console.log("response on port 8080");
    res.writeHead(200,)
}).listen(8080);