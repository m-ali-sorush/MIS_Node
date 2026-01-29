const fs=require('fs');
const http=require('http');
var mimeTypes={
    "html":"text/html",
    "jpeg":"image/jpeg",
    "jpg":"image/jpg",
    "png":"image/png",
    "svg":"image/svg+xml",
    "json":"application/json",
    "js":"text/javascript",
    "css":"text/css"
};

http.createServer(function(req,res){
    console.log("listen on port 8080");
    console.log(req.url);
    let urlParts=req.url.split("?");
    if(urlParts[1]){
        console.log("there is data from query params");
        console.log(urlParts[1]);
       
    }
    fs.readFile(__dirname+urlParts[0], function(err,data){
        if(err){
            console.log("not found");
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        var mimeType=mimeTypes[urlParts[0].split('.').pop()];
        if(!mimeType){
            mimeType='text/plain'
        }
        res.writeHead(200, {"Content-Type":mimeType});
        res.write(data,"binary");
        res.end();
    })
}).listen(8080);