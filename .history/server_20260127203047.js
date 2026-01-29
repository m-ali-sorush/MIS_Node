
const http=require('http');
console.log("server listen on port : 8080");
http.createServer(function(req,res){
    console.log("response on port 8080");
    res.writeHead(200,{'Content-ype'})
}).listen(8080);