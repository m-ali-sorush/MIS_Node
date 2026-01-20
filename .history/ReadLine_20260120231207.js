const readLine=require("readline");
const rl=readLine.createInterface({
    "input":process.stdin,
    "output":process.stdout,
});


rl.question("What's your name ?",(answer)=>{
    console.log(`Wellcome ${answer} in your new system form node js`);
    rl.close()
})
rl.question("Enter the first Number",(answer1)=>{
    console.log("this is the first Number"+answer1);
    rl.close();
})
rl.question("Enter the second Nuber",(answer2)=>{
    console.log("this is the second NUmber",+answer2);
    rl.close();
});
console.log("this is the sumation of first and second number"+());