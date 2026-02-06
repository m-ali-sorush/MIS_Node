const http=require("http");

const server=http.createServer((req,res)=>{
      res.statusCode=200;
      res.setHeader("Content-type","text/plain");
      res.end("Hello fromo node js")
});


server.listen(3000,()=>{
    console.log("we are listening on port 3000");
})