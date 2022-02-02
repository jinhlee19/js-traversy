////////////////////////////////////////////////////
////// 13. Function Declarations & Expression

/* blocks of code that can be defined and then 
called at a later time or in some cases defined 
and called at the same time.

types of function and ways of writing functions in js
- function declarations,
- function expressions.
- iife - Immediately Invoked Function Expression
- property method

*/
////////////////////////////////////////////////////
////// 1) FUNCTION DECLARATIONS
// 자주 쓰이지 않고 보통은 로깅할 목적으로 종종 쓰인다. 보통은 return하는 함수 사용.
function greet() {
	// function scope.
	console.log('hello');
}
greet();

function greet1() {
	return 'Hello';
}
console.log(greet1());

// FUNCTION with parameter and argument
// ** 매개변수 param와 전달인자 arg의 차이 구분 확인
function hisName(first, last) {
	// 이때는 parameter = 매개변수
	return 'Hello, ' + first + ' ' + last;
}
console.log(hisName('John', 'Doe')); // 이때는 argument = 전달인자

//// Placing Default Value Before ES6

// function greeting(fName, lName) {
//     if(typeof fName ==='undefined'){fName = 'John'}
//     if(typeof lName === 'undefined'){lName = 'Doe'}
// 	return 'Hello' + fName + ' ' + lName;
// }
// console.log(greet()); // giving default value as John Doe or give custom arg
// //

// ES6
function greeting(fName = 'John', lName = 'Snow') {
	return 'Hello, ' + fName + ' ' + lName;
}
console.log(greeting());

////////////////////////////////////////////////////
////// 2) FUNCTION EXPRESSIONS

const square = function (x = 3) {
	return x * x; 
};
console.log(square()); //default
console.log(square(8)); // 8 as arg

////////////////////////////////////////////////////
////// 3) IMMIDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs
/*
- a funtion that declare and run at the sametime
*/ 

// 1 Syntax
(function(){
    console.log('IIFE Ran..');
})();

// 2 Example
(function(name){
    console.log('hello ' + name);
})('Brad');
/* 모듈 패턴과 같은 디자인 패턴에 따라 유용하게 쓰여진다.
private method와 private properties 사용되는 프로젝트에서 주로 사용될 예정이라함..
*/

////////////////////////////////////////////////////
////// 4) PROPERTY METHODS ***** Review
/*
when the function is put inside of an object, its called method.

*/
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

//also can define functions for this object outside of this.
todo.delete = function(){
    console.log('delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();