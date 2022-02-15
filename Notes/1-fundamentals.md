#### Javascript 기초 다지기 👊🏼

Modern JS Course by Brad Traversy

## 1.0. Adding .js File

---

```html
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>JS Sandbox</title>
</head>
<body>
    <h1>Javascript Sandbox</h1>
    <script src="js/app.js"></script>
</body>
</html>
```

## 1.1. Comments

---

```javascript
//// 1. Using The Console

// 1.1. Comments

// single line comments

/*
Multi-line comments
*/
```

## 1.2. Log to console

---

```javascript
alert('hello world');

console.log('hello world');
console.log(123);
console.log(true);
var greet = 'hello';
console.log(greet);
console.log([1, 2, 3, 4]);
//// Objects - object Literal
console.log({ a: 1, b: 2, c: 3, d: 4 });
console.table({ a: 1, b: 2 });

console.error('this is some error');
console.warn('this is a warning');
// console.clear();

//// Calculate from time to timeEnd
console.time('Hello');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.timeEnd('Hello'); // 실행 시간 계산 ms
```

## 1.3. Variables - var, let, const

---

- var 사용을 자제한다.
- let과 const는 블럭레벨의 스코핑에서 유용하다.
- var와 let은 값 재할당(reassign) 가능, 값 없이 변수 생성 가능. (const 불가)
- 숫자로 시작할 수 없음
- let 변수 재선언은 불가.
- **_const가 변수를 재선언 하는 경우나 막혀있지, array 또는 object 안의 구성을 바꾸는 건 가능하다. 특별한 경우가 아니고서는 const를 우선으로 사용한다._**

```javascript
// let, var 은 variable을 재할당(re-assign) 할 수 있다.
var name = 'John Doe';
console.log(name);
name = 'Steve';
console.log(name);

// 값 없이 변수 선언이 가능.
var greet;
console.log(greet); // undefined
// and then assign a value.
greeting = 'Hello';
console.log(greet); // -> Hello

// _, $ -> private variable 또는 jquery에서 사용

// letters, numbers
// 숫자로 시작할 수 없다.
var 1name ='John'; // error invalid token

// Multi word var Convention
var firstName = 'John'; // Camel case - js
var first_name = 'Sara'; // Underscore - php
var FirstName = 'Tom';
// Pascal case - OOP(Object Oriented Programming) or a constructor function
var firstname;


//// LET
let fName;
let fName = 'Snow';
// Uncaught SyntaxError: Identifier 'fname' has already been declared - 재선언 불가
console.log(fName);
fName = 'Summer';
console.log(fName);


//// CONST
const lName = 'Snow';
console.log(lName);
name = ('Sara');
// Err - Uncaught TypeError: Assignment to constant variable.
// Have to assign a value
const greeting; // Err - Uncaught SyntaxError: Missing initializer in const declaration.

/* const with arrays and objects and
other types of data aren't primitive like strings and numbers.
things can be changed but not assigned.*/

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
// we can use push method to add on to an array but cannot change name of the const, 'numbers'.
const numbers = [1,2,3,4,5];
numbers.push(6);
// example below -> err - cannot reassign numbers
numbers = [1,2,3,4,5,6];
console.log(numbers);

// ** const only - unless for value changing,
// re-initializing it or using it in an iterator or a loop. **
```

## 1.4. Data Types

---

### About JS

- Dyanmicall Typed Language
  Types are associated with values not variables.
  same variable can hold multiple types.
  we do not need to specify type.
  Most others are statically typed.
  There are supersets of JS and addons to allow static typing (TypeScript, Flow)

### Data Types

- Primitive Data Types:
  Stored directly in the location the variable accesses Stored on the stack.
  - String, Number, Boolean, Null, Undefined, Symbols(ES6)
- Reference Data Types:
  Accessed by reference
  Objects that are stored on the heap\*\*(dynamically allocated memory)
  A pointer to a location in memory
  - Arrays, Object Literals, Functions, Dates, Anything Else.. (object wrappers?)

```javascript
//// PRIMITIVE DATATYPE

// String
const name = 'John Doe';

// Number
const age = 45;
const ages = '45'; // string

// Boolean
const hasString = true;

// Null
const car = null;
// appears to be an 'object' but kinda bug.
// not object but primitive type. marked at note.md*

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
	state: 'MA',
};
console.log(typeof address); // object

// Date - new keyword explained later.
const today = new Date();
console.log(typeof today); // object
```

## 1.5. Type Conversion

---

```javascript
let val;

// Number to string
val = String(555); // '555', string, 3
val = String(4 + 4); // '8', string, 1

// Bool to String
val = String(true); // 'true', string, 4

// Date to String
val = String(new Date()); // 'Tue Feb 01 2022 04:54:53 GMT+0900 (한국 표준시)'

// Array to String
val = String([1, 2, 3, 4]); // 1,2,3,4, string, 7

// toString()
val = (5).toString(); // 5, string, 1
val = true.toString(); // true, string, 4

// String to number
val = Number('5');
// decimal point == 2
console.log(val.toFixed(2)); // 5.00

val = Number(true); // 1, number, 1
val = Number(false); // 0, number, 0
val = Number(null); // 0, number, 0
val = Number('hello'); // NAN, number, NAN: actual value that returns not a number

val = parseInt('100.30'); // 100 (parse only intenger)
val = parseFloat('100.31'); // 100.31(parse with decimals)

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));

//// Type Coercion - What js do 'String' + 'int'
const val1 = 4564;
const val2 = ' text';
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
```

## 1.6. Math

---

```javascript
// Use Case - Form 등에서 String(default)으로 변수를 받아서 계산하려면,
// parse해서 Number type으로 바꿔서 사용한다.
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math - 절대값, 랜덤, 뭐 그런거..
/* Math is an object, meaning that it has properties(attribute) 
 and methods(like function). */

val = Math.PI; // 3.141592653589793
val = Math.E; // 2.718281828459045
val = Math.round(2.4); // 2
val = Math.ceil(2.4); // 3
val = Math.floor(2.9); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8); // 64
val = Math.min(2, 3, -2); // -2
val = Math.max(2, 33, 4); // 33
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);
// * (max number), and then + 1

console.log(val);
```

## 1.7. String Method & Concatenation

---

```javascript
const fName = 'John';
const lName = 'Snow';
const age = 25;
let val;
const str = 'hello there my name is Rafy';
const tags = 'web design,web develeopment,programming';

//// Concatenation
val = fName + ' ' + lName;

//// Append
val = 'Arya ';
val += 'Stark';

val = 'His name is ' + fName + ' and he is ' + age;

//// Escaping
val = "That's awesome, I can't wait";
val = "That's awesome, I can't wait";

//// length - property
val = fName.length;

//// concat() - method
val = fName.concat(' ', lName);

//// change case
val = fName.toUpperCase();
val = fName.toLowerCase();

//// index, indexOf()
herName = 'Arya Stark';
val = herName[0];
val = herName.indexOf('h');
val = herName.lastIndexOf('a');
// 0 으로 시작하므로 length -1 로 마지막 숫자를 찾는다. common formula you will see in JS
val = fName.charAt(fName.length - 1); // n (from 'John')

//// substring()
val = fName.substring(1, 3);

//// slice()
val = fName.slice(1, 3);

// start from back to last three
val = fName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

//// replace()
val = str.replace('Rafy', 'Jack');

/// includes()
val = str.includes('my');

console.log(val);
```

## 1.8. Template Literal (ES6)

---

```javascript
const hisName = 'John';
const age = 30;
const job = 'Night watch';
const city = 'the Wall';

// // Without template string (es5) - old way
// html = '<ul><li>hisName: ' + hisName + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul>' +
//        '<li>hisName: ' + hisName + '</li>' +
//        '<li>Age: ' + age + '</li>' +
//        '<li>Job: ' + job + '</li>' +
//        '<li>City: ' + city + '</li>' +
//        '</ul>';

// With template strings (es6) - new
// ***** single quotes('') 말고 backticks(``) !!!!! *****

function hello() {
	return 'Hello!!';
}

html = ` 
    <ul>
        <li>Name: ${hisName}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
    </ul>
    `;

document.body.innerHTML = html;
```

## 1.9. Array and Array Method

---

```javascript
// Array and Array Method *** Review
// multiple value, can be mutated and iterated through, and can be used complex algorithms.

// Create Some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5]; // #1 'array literal'
const numbers2 = new Array(22, 45, 33, 76, 54); // #2 using 'array constructor'
const fruit = ['Apple', 'Banana', 'orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

console.log(mixed);

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers); // true
// useful when we dealing with a node list from the DOM

val = numbers[3]; // 23
val = numbers[0]; // 43 -start from 0

// Insert into array
numbers[2] = 100; // convert 33 to 100
//Find index of value
val = numbers.indexOf(36); // 5

// MUTATING ARRAYS

// 추가
// Add on to end 끝으로 추가
numbers.push(250);
// Add on the front ** 처음으로 추가
numbers.unshift(120);

// 삭제
// Take off from End 배열 마지막 삭제
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1, 3); // 1부터(포함) 3(제외)전까지 삭제 **
// Reverse
numbers.reverse();

// Concatenate Array
val = numbers.concat(numbers2); // (9) [5, 36, 44, 43, 22, 45, 33, 76, 54]

// // Sorting arrays
val = fruit.sort(); // 알파벳순
val = numbers.sort();

// Use the 'compare function' - 숫자를 오름차순 또는 내림차순으로 sort. (passing in a callback to the sort.)
val = numbers.sort(function (x, y) {
	return x - y;
});

val = numbers.sort(function (x, y) {
	return y - x;
});

// Find - finding first number over or under 50. - must comment out unrelated codes on this example.
function under50(num) {
	return num < 50;
}

function over50(num) {
	return num > 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
```

## 1.10. Object Literal

---

```javascript
//// Object Literal

const person = {
	fName: 'Steve',
	lNAme: 'Smith',
	age: 38,
	email: 'steve@aol.com',
	hobbies: ['music', 'sports'],
	address: {
		city: 'Miami',
		state: 'FL',
	},
	getBirthYear: function () {
		// ** we can access other property in the object.
		// * 'this' keyword to use property pertaining to the object.
		return 2022 - this.age;
	},
};

let val;
val = person;

// Get specific value

//syntax
val = person.firstName; // Steve
val = person['lastName']; // Smith

val = person.age;
val = person.hobbies[1]; // sports
val = person.address.state; // FL
val = person.address['city']; // Miami
val = person.getBirthYear(); // 1984

console.log(val);

const people = [
	{ name: 'John', age: 30 },
	{ name: 'Mike', age: 23 },
	{ name: 'Nancy', age: 40 },
];

for (let i = 0; i < people.length; i++) {
	console.log(people[i].name);
}
```

## 1.11. Date and Time

---

```javascript
let val;

const today = new Date();
// val = today;
// val = today.toString();
// console.log(typeof val); // object

let bday = new Date('9-10-1981 11:24:00');
bday = new Date('Setember 10 1981');
bday = new Date('9/10/1981');

val = bday;
const month = new Date('1/1/2022'); // getMonth시, 0으로 나온다. 0 based
val = month.getMonth(); // 0
val = month.getDate(); // 1
console.log(val);
```

```javascript
let val;

const today = new Date();
let birthday = new Date('11-27-1984 11:24:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1984');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // timestamp

birthday.setMonth(2); // march로 변경
birthday.setDate(12); // 12일로 변경.
birthday.setFullYear(1996);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
console.log(val);
```

(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
