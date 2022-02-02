let val;

const today = new Date();
// val = today;
// val = today.toString(); 
// console.log(typeof val); // object

let bday= new Date('9-10-1981 11:24:00');
bday= new Date('Setember 10 1981');
bday= new Date('9/10/1981');

val = bday;
const month = new Date('1/1/2022'); // getMonth시, 0으로 나온다. 0 based
val = month.getMonth(); // 0
val = month.getDate(); // 1 
console.log(val);

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
