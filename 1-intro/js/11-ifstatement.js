//////////////////////////////////////////// 
//// 11. If Statement & Comparison Operator
/*
Syntax

if(something){
    do something
} else {
    do something
}
*/

const id = '100';

// EQUAL TO
if (id == 101) {
	console.log("Correct");
} else {
	console.log("Incorrect");
}

// NOT EQAUL TO
if (id != 101) {
	console.log("Correct");
} else {
	console.log("Incorrect");
}

// 위의 방식으로는 타입일치 여부를 알수 없기때문에 주로 사용할땐 === 사용.
// EQUAL TO VALUE & TYPE
if (id === 101) {
	console.log("Correct");
} else {
	console.log("Incorrect");
}

// NOT EQUAL TO VALUE & TYPE
if (id !== 101) {
	console.log("Correct");
} else {
	console.log("Incorrect");
}

if (id) {
	// again. it's template literal - use backticks(`)
	console.log(`The ID is ${id}`);
} else {
    console.log('NO ID')
}

// 이때, id가 없어지면 (7열의 id 삭제 시,) else로 넘어가지 않고 not defined error 발생.
// -> type of id!의 사용 (testing은 위의 전체 주석처리하고 할 것.)

// TEST IF UNDEFINED
if(typeof id !== 'undefined') {
	console.log(`The ID is ${id}`);
} else {
	console.log('NO ID');
}

/////////////////////////////////////////////
// GREATER OR LESS THAN
const id = 100;
if (id >= 200) {
	console.log("Correct");
} else {
	console.log("Incorrect");
}
// IF ELSE
const color = "yellow"; // red, blue, yellow로 바꿔보기.
if (color === "red") {
	console.log("Color is red");
} else if (color === "blue") {
	console.log("Color is blue");
} else {
	console.log("Color is not red or blue");
}

// LOGICAL OPERATOR

// AND &&
const name = "Steve";
const age = 4;
if (age > 0 && age < 12) {
	// a and b is both true,
	console.log(`${name}is a child`);
} else if (age >= 13 && age <= 19) {
	console.log(`${name} is a teenageer`);
} else {
	console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
	// if one of 2 conditions is true,
	console.log(`${name} cannot run in race`);
} else {
	console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? "CORRECT" : "INCORRECT");

// Without Braces
// js에서는 statement에서 {}가 없어도 되지만 비추x3.
if (id === 100) console.log("Correct");
else console.log("Incorrect");

