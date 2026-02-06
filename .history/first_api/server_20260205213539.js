const fs=require('fs');
const http=require('http');
const path=require('path');
const mimeTypes=require('mime-types');
// const queryStringHandler=require('qs');
const controllers=require('./controllers/ControllerLoadder').controllers;
const server=http.createServer((req,res)=>{
    console.log(req.url);
    console.log("Listen on port 8080")

}).listen(8080);