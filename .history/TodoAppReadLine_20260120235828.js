const readline=require("readline");


const rl=readline.createInterface({
    "input":process.stdin,
    "output":process.stdout
})
let todos=[];
function showMenu(){
    console.log("\n📌 TO-DO MENU");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Delete Task");
    console.log("4. Exit");

    rl.question("Choose an option: ", handleInput);
}
function handleInput(input){
    switch(input){
        case "1":
            add
    }
}