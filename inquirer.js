// const inquirer=require('inquirer')
// import inquirer, { Answers } from 'inquirer'; // if using ESM
// const inquirer = require('inquirer'); // if using CommonJS
import inquirer from 'inquirer';

// const question = [
//   {
//     type: 'input',
//     name: 'name',
//     message: 'What is your name?'
//   }
// ];

// inquirer.prompt(question).then(answers => {
//   console.log('Hello,', answers.name);
// });
    // const question=[
//     {
//         type:'input',
//         name:"name",
//         message: 'what is your name ?'
//     }
// ];
// inquirer.prompt(question).then(answers=>{
//     console.log(answers);
//     console.log(answers.type);
//     console.log(answers.name);
//     console.log(answers.message);

// });


//numbers 
const age=[
    {
        type:'number',
        name: 'age',
        message: 'Enter your age ?',
        validate: input=> input>0 || 'age must be greather 0'
    }
];
inquirer.prompt(age).then(answers=>{
    console.log(typeof answers.message);
    console.log(answers);
})