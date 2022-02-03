// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test() {
	var a = 4;
	let b = 5;
	const c = 6;
	console.log('Function Scope: ', a, b, c);
}

test(); // 1 2 3 
console.log('Global Scope: ', a, b, c); // 4 5 6

if (true) {
	//Block Scope
	var a = 4;
	let b = 5;
	const c = 6;
	console.log('If Scope: ', a, b, c); // If Scope:  4 5 6
}

console.log('Global Scope: ', a, b, c); // Global Scope:  4 2 3


for(var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

/*
결론: 
let and const has block level scope.
var has a function scope.
*/