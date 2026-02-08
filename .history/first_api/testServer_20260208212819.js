const http=require('http');


const server=http.createServer((req,res)=>{
    res.end("server is running !")
    console.log("Request ",req.method);
    console.log(req.url);
});


server.listen(8080,()=>{
    console.log("We are listning on port 8080");
})