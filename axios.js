const axios=require('axios');


axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=>{
    let id=1;
    res.data.forEach(user=>{
        // console.log(id+" : "+user.name);
        // console.log("Username : "+user.username);
        // console.log("Street : "+user.address.street);
        console.log("  Name   , street   , city");
        console.log(`${user.name} → ${user.address.street}, ${user.address.city}`);
        id++;
        
    })
   
    // console.log(res.data);
}).catch(err=>{
    console.log(err.message);
})