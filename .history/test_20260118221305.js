#!/usr/bin/env node

console.log('this code run type my-test-command');
console.log("#################################");
const cow=require('cowsay');
console.log(cow.think({
    text: 'thinking how learning node js',
    e: "oO",
    T: 'UU',
    r:"text"
}));