////// Build In Constructors - Available but not used. 원리만 이해하기.

////  1. PRIMITIVE VALUE vs. OBJECT
// String
const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1); // returns primitive value
console.log(name2); // returns object // > String {'Jeff'}
// primitive as the key, and jeff as the value. each charactor of strings.

// name2.foo ='bar'; // can add properties to it. just added

console.log(typeof name2);

if (name === 'jeff') {
	console.log('YES');
} else {
	console.log('NO');
}
// returns no.

// Number
const num1 = 5; // primitive value
const num2 = new Number(5); // object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool2); // true
console.log(typeof bool2); // > Boolean {true}


////// 2. NO DIFF using OBJ but returns string, object, or array.

// Function
const getSum1 = function (x, y) {
	return x + y;
};
const getSum2 = new Function('x', 'y', 'return x+y');
console.log(getSum1(1, 1)); // 2 
console.log(getSum2(1, 1)); // 2

// Object - no dif
const john1 = { name: 'John' };
const john2 = new Object({name:"John"});
console.log(john1); // {name: 'John'}
console.log(john2); // {name: 'John'}

// Arrays 
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1); // (4) [1, 2, 3, 4]
console.log(arr2); // (4) [1, 2, 3, 4]

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+')

console.log(re1);
console.log(re2);