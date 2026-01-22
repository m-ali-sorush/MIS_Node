const { exit } = require("process");
const readLine=require("readline");

const rl=readLine.createInterface({
    "input":process.stdin,
    "output":process.stdout
})
showMenu();

function showMenu(){
    console.log();
    console.log("\n📌 Student Management System");
    console.log("1. Add Student to system");
    console.log("2. View Student records");
    console.log("3. Delete Student from system");
    console.log("4. Exit");

    rl.question("===== Choose an option =======\n",handleOptions)
}
const students={};
function handleOptions(input){
    switch(input){
        case "1":
            addStudent();
            break;
        case "4":
            console.log("===== GoodBye ====");
            rl.close()
            break;
        default :
            console.log("invalid option");
            showMenu();
    }
}

function addStudent(){
    rl.question("Enter student Name",(name)=>{
        rl.question("Enter studnt id",(id)=>{
            rl.question("Enter student mark",(mark)=>{
                const student={
                    id:Number(id),
                    name:name,
                    score:Number(mark)
                }
                console.log(`${name} added successfully in the CLI SYSTEM`);

            })
        })
    })
}
function viewStudents(){
    
}
