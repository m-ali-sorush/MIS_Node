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
            addTask();
            break;
        case "2":
            viewTask();
            break;
        case "3":
            deleteTask();
            break;
        case "4":
            console.log("GoodBye!");
            rl.close();
            break;
        default:
            console.log("❌ Invalid option");
            showMenu();
    }
}

function addTask(){
    rl.question("Enter Your Task",(task)=>{
        if(task.length<2){
            console.log("Please Enter a valid task it is too short");
            return;
        }
        todos.push(task);
        console.log("✅ Task added!");
        showMenu();
    })
}
function viewTask(){
    if(todos.length===0){
        console.log("📭 No tasks found");
    }

}
function deleteTask(){

}