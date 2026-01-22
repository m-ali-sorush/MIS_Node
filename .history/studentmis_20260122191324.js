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
        case "2":
            viewStudents();
            break;
        case "3":
            deleteStudent();
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
    rl.question("Enter student Name > ",(name)=>{
        rl.question("Enter studnt id > ",(id)=>{
            if(students[id]){
                console.log("❌ Student with this ID already exists!");
                showMenu();
            }
            rl.question("Enter student mark > ",(mark)=>{
                students[id]={
                    id:Number(id),
                    name:name,
                    mark:Number(mark)
                }
                // students.push(student);
                console.log(`${name} added successfully in the CLI SYSTEM`);
                rl.question("Do you want add next student? (yes/no) ",(answer)=>{
                    if(answer.toLowerCase==="yes" || answer==="y"){
                        addStudent();
                    }else{
                        showMenu();
                    }
                })

            })
        })
    })
}
function viewStudents(){
    if(Object.keys(students).length===0){
        console.log("📭 No students available.");
        showMenu();
    }else {
        console.log("______________________________________");
        console.log("====== Students List =====");
        let count=1;
        let sum=0;
        for (const id in students){
            const student=students[id];
            console.log(`${count}. ID: ${student.id}, Name: ${student.name}, Score:${student.mark}`);
            count++;
            sum++;
        }
        console.log(`======= Total Student:  ==== `);
        console.log("______________________________________");       
        showMenu();
    }
}
function deleteStudent(){
    if(Object.keys(students).length===0){
        console.log("No student for delete");
        showMenu();
    }else{
        rl.question("Enter the student id ",(std_id)=>{
            let id=Number(std_id);
            if(!students[id]){
                console.log(`student with ${id} not found!!`);
                return showMenu();
            }
            const student=students[id];
            rl.question(`Are you sure to delete ${student.name} (${student.id}) :(yes/no)`,(answer)=>{
                if(answer.toLowerCase()==="yes" || answer.toLowerCase()==="y"){
                    delete students[id];
                    console.log(`🗑️ Student ${student.name} deleted successfully!`);
                }else{
                    console.log("deletion canceled!!");
                }
                return showMenu();
            })
        })
    }
}