const http=require('http');


const server=http.createServer((req,res)=>{
    res.end
});


server.listen(8080,()=>{
    console.log("We are listning on port 8080");
})