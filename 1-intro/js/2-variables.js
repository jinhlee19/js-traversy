//// 2. Variables - var, let & const

// Variables - var, let, const
// let and const -> advantagous for block level scoping. 

// let, var can re-assign variables.
var name = 'John Doe';
console.log(name);
name = 'Steve';
console.log(name);

// can create a variable without value.
var greet;
console.log(greet); // undefined
// and then assign a value.
greeting = 'Hello';
console.log(greet); // -> Hello

// _, $ -> private variable or jquery use

// letters, numbers, 
// Cannot start with number 
var 1name ='John'; // error invalid token

// Multi word var Convention
var firstName = 'John'; // Camel case - js
var first_name = 'Sara'; // Underscore - php
var FirstName = 'Tom'; // Pascal case - OOP(Object Oriented Programming) or a constructor function 
var firstname;

//// LET 
let fName;
// let fName = 'Snow'; // Uncaught SyntaxError: Identifier 'fname' has already been declared
console.log(fName);
fName = 'Summer';
console.log(fName);



//// CONST
const lName = 'Snow';
console.log(lName);
name = ('Sara'); // Err - Uncaught TypeError: Assignment to constant variable.
// Have to assign a value
const greeting; // Err - Uncaught SyntaxError: Missing initializer in const declaration.

// ** const with arrays and objects and other types of data aren't primitive like strings and numbers. things can be changed but not assigned.

//// Objects Example
// cannot reassign 'person' but can change name from John to Sara.
const person = {
    name: 'John',
    age: 30
}
person.name = 'Sara';
person.age = 32;

console.log(person); 

//// Array Example 
// we can use push method to add on to an array but cannot change 'numbers'
const numbers = [1,2,3,4,5];
numbers.push(6);
// example below -> err - cannot reassign numbers
numbers = [1,2,3,4,5,6]; 
console.log(numbers);

// ** const only - unless for value changing, re-initializing it or using it in an iterator or a loop. **