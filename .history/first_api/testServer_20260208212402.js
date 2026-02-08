const http=require('http');


const server=http.createServer((req,res)=>{
    console.log("This area is for creating server");
});


server.listen(8080,()=>{
    console.log("We are listning on port 8080");
})