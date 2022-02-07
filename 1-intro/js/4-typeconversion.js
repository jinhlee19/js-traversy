//// 4. Type Conversion
// Use Case - Form 등에서 String(default)으로 변수를 받아서 계산하려면 parse해서 Number type으로 바꿔서 사용한다.

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
val = Number("5");
// decimal point == 2
console.log(val.toFixed(2)); // 5.00

val = Number(true); // 1, number, 1
val = Number(false); // 0, number, 0
val = Number(null); // 0, number, 0
val = Number("hello"); // NAN, number, NAN: actual value that returns not a number

val = parseInt("100.30"); // 100 (parse only intenger)
val = parseFloat("100.31"); // 100.31(parse with decimals)

// Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.log(val.toFixed(2));

//// Type Coercion - What js do 'String' + 'int'
const val1 = 4564;
const val2 = " text";
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
