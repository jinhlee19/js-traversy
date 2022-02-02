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