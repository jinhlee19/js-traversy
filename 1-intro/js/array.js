// Array and Array Method *** Review
// multiple value, can be mutated and iterated through, and can be used complex algorithms.

// Create Some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5]; // #1 'array literal'
const numbers2 = new Array(22, 45, 33, 76, 54); // #2 using 'array constructor'
const fruit = ["Apple", "Banana", "orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

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
