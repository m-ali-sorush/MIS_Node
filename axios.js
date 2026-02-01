const axios=require('axios');


axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=>{
    let id=1;
    res.data.forEach(user=>{
        console.log(id+" : "+user.name);
        id++;
    })
    // console.log(res.data);
}).catch(err=>{
    console.log(err.message);
})