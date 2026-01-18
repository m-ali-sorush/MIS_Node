console.log("Start");

for (let i = 0; i < 3 ; i++) {
    console.log("lets one do something");
}

console.log("End");


console.log("########################");
console.log("Start");

setTimeout(() => {
    console.log("Task finished");
}, 2000);

console.log("End");


// const fs = require("fs");
// fs.readFile("file.txt", "utf8", (err, data) => {
//     console.log(data);
// });

// console.log("Done");


const cow=require('cowsay')
console.log(cow.say({
    text:'Hello Node Js',
    e:"oO"
}));