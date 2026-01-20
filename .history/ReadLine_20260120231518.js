const readLine=require("readline");
const rl=readLine.createInterface({
    "input":process.stdin,
    "output":process.stdout,
});


rl.question("What's your name ?",(answer)=>{
    console.log(`Wellcome ${answer} in your new system form node js`);
    rl.close()
})
rl.question("Enter the first Number",(num1)=>{
    rl.question("Enter the second Number",(num2)=>{
        console.log(`The sumation of these numbers are`);
    })
   
})