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