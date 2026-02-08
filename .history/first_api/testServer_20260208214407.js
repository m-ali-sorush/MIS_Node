const http=require('http');


const server=http.createServer((req,res)=>{
    res.end("server is running !")

    const parsedUrl=new URL(req.url, `http://${req.headers.host}`);

    console.log("PathName: "+ parsedUrl.);
    console.log("Request method: ",req.method);
    console.log("Request Url: ",req.url);
});


server.listen(8080,()=>{
    console.log("We are listning on port 8080");
})