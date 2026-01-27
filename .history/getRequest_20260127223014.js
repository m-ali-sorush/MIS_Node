const http=require('http');
const options={
    hostname:'localhost:8080',
    port:8080,
    path:'/path',
    method:'GET'
}

const req=http.request(options,res=>{
    console.log(`status`);
})