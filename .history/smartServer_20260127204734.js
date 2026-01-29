const fs=require('fs');
const http=require('http');
var mimeType={
    "html":"text/html",
    "jpeg":"image/jpeg",
    "jpg":"image/jpg",
    "png":"image/png",
    "svg":"image/svg+xml",
    "json":"application/json",
    "js":"text/javascript",
    "css":"text/css"
};

http.createServer()