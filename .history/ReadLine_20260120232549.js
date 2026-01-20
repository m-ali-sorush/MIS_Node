const readLine=require("readline");
const rl=readLine.createInterface({
    "input":process.stdin,
    "output":process.stdout,
});


// rl.question("What's your name ?",(answer)=>{
//     console.log(`Wellcome ${answer} in your new system form node js`);
//     rl.close()
// })
rl.question("Enter the first Number",(num1)=>{
    num1=Number(num1);
    rl.question("Enter the second Number",(num2)=>{
        num2=Number(num2)
        console.log(`The sumation of these numbers are ${num1+num2}`);
        // rl.close();
    })
   
})
let Names=[];
rl.on("line",(input)=>{
    Names.push(input);
    console.log(`Enter The name of your friends`);
    console.log(`there are ${Names.length} person`);
    if(Names.length>=5){
        rl.close()
    }
})