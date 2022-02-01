//// 4. Type Conversion
// Use Case - Form 등에서 String(default)으로 변수를 받아서 계산하려면 parse해서 Number type으로 바꿔서 사용한다.
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
// Math is an object, meaning that it has properties(attribute) and methods(like function).

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
