const axios=require('axios');


// axios.get("https://jsonplaceholder.typicode.com/users")
// .then(res=>{
//     let id=1;
//     res.data.forEach(user=>{
//         console.log("  Name   , street   , city");
//         console.log(`${user.name} → ${user.address.street}, ${user.address.city}`);
//         id++;
        
//     })
   
//     // console.log(res.data);
// }).catch(err=>{
//     console.log(err.message);
// })


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

createUser();
