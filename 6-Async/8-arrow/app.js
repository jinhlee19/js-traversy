// 기본식
const sayHello = function () {
	console.log('Hello');
};
sayHello();

// 1. Arrow Function
const sayHello1 = () => {
	console.log('Hello1');
};
sayHello1();

// 2. One line function does not need braces
const sayHello2 = () => console.log('Hello2');
sayHello2();
// 3. One line returns
const sayHello3 = () => 'Hello3';
sayHello3(); // na
console.log(sayHello3()); // Hello3
// 4. Same as above
const sayHello4 = function () {
	return 'Hello4';
};
sayHello4(); // na
console.log(sayHello4()); // Hello4

// 5. Return object
const sayHello5 = () => ({ msg: 'Hello5' });
// 설명: Object Literal 그대로 넣으면 err => wrap it with ()
console.log(sayHello5());
// Single param does not need parenthesis
const sayHello6 = (name) => console.log(`Hello ${name}`);
sayHello6('John6');
//

// Multuiple params need parenthesis
const sayHello7 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
sayHello7('John7', 'Snow');

//// Callback 함수에서 화살표함수 사용?
const users = ['Nathan', 'John', 'William'];

const nameLengths = users.map(function (name) {
	return name.length;
});

console.log(nameLengths);

// Shorter
const nameLengths1 = users.map((name) => {
	return name.length;
});
console.log(nameLengths1);

// Shortest ***
const nameLengths2 = users.map((name) => name.length);
console.log(nameLengths2);
