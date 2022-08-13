// This is a comment
console.log('This is the print statement')

let lulli = 'Amey';
console.log(lulli)

const interest = 0.3; // constant value
// interest = 1;
console.log(interest);

// Variable types
let name = 'Name';
let age = 59;
let isApproved = true;
let fort = undefined;
let selectedColor = null; // to clear the value

// JavaScript is a Dynamic Language
// type of variable can change in runtime
name = 89;
console.log(typeof name);
console.log(typeof selectedColor);

// Objects in JS
let person = {
    firstName :'Amey',
    age : 20
};

console.log(person.age);
console.log(person.firstName);
person.firstName = 'newNAme';
console.log(person.firstName);

let selection = 'firstName'
person[selection] = 'this is also a name';
console.log(person);
