const http=require("http");

const server=http.createServer((req,res)=>{
      res.statusCode=200;
      res.setHeader("Content-type","text/plain");
      res.end("Hello fromo node js")
});


server.