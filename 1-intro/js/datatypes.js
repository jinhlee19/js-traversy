//// 3. Data Types in JavaScript

//// PRIMITIVE DATATYPE

// String
const name = 'John Doe';
// Number 
const age = 45;
const ages = '45'; // string
// Boolean 
const hasString = true; 
// Null
const car = null; // appears to be an 'object' but kinda bug. not object but primitive type. marked at memo*
// Undefined
let test;
// Symbol
const sym = Symbol();

console.log(typeof sym);

//// REFERENCE TYPES - Objects - accessed from memory as a reference
// Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies); // obejct

// Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}
console.log(typeof address); // object

// Date - new keyword explained later.
const today = new Date();
console.log(typeof today); // object