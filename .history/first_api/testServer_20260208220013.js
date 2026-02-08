const http=require('http');
const fs=require('fs');
const path=require('path')


const server=http.createServer((req,res)=>{
    res.end("server is running !")

    const parsedUrl=new URL(req.url, `http://${req.headers.host}`);

    console.log("PathName: "+ parsedUrl.pathname);
    console.log("Search: "+ parsedUrl.search);
    console.log("##########################################");
    console.log('ID:', parsedUrl.searchParams.get('id'));
    console.log('Name:', parsedUrl.searchParams.get('name'));

    // console.log("Request method: ",req.method);
    // console.log("Request Url: ",req.url);
    let filePath;
    if(parsedUrl.pathname==='/'){
        filePath=path.join(__dirname,'public','home.html');
    }else{
        res.statusCode=
    }


});


server.listen(8080,()=>{
    console.log("We are listning on port 8080");
})