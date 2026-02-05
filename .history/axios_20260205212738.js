const axios=require('axios');


async function getData(){
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(res.data);
    }catch(err){
        console.log(err.message);
    }
}

getData();
axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=>{
    let id=1;
    res.data.forEach(user=>{
        console.log("  Name   , street   , city");
        console.log(`${user.name} → ${user.address.street}, ${user.address.city}`);
        console.log("User Latitude Address : "+user.address.geo.lat);
        id++;
        
    })
   
    // console.log(res.data);
}).catch(err=>{
    console.log(err.message);
})


async function createUser() {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "Hello",
        body: "This is Axios",
        userId: 1
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

// createUser();
>>>>>>> bf4c826e8ac3b18a4828ea19e6a48d1b7f7f4c87
