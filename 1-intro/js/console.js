//// 1. Using The Console

// 1.1. Comments

// single line comments

/*
Multi-line comments
*/

// alert('hello world');

//// 1.2. Log to console

console.log('hello world');
console.log(123);
console.log(true);
var greet = 'hello';
console.log(greet);
console.log([1,2,3,4]);
//// Objects - object Literal
console.log({a:1, b:2, c:3, d:4});
console.table({a:1, b:2});

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
console.timeEnd('Hello'); 