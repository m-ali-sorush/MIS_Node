const fs=require('fs');
const http=require('http');
const path=require('path');
const mimeTypes=require('mime-types');
const queryStringHandler=require('qs');
const { config } = require('yargs');
const controllers=require('./controllers/ControllerLoadder').controllers;



const server=http.createServer((req,res)=>{
    console.log(req.url);
    console.log("Listen on port 8080")
    req.parsedUrl=new URL(path.join(config.hostname,req.url ));
    let data = getRequestData(req);
    if (req.parsedUrl.pathname.search('/api')>=0){
        route=getRequestData(req)
    }

}).listen(8080);
