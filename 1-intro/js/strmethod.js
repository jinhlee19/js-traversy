const fName = "John";
const lName = "Snow";
const age = 25;
let val;
const str = "hello there my name is Rafy";
const tags = "web design,web develeopment,programming";

//// Concatenation
val = fName + " " + lName;

//// Append
val = "Arya ";
val += "Stark";

val = "His name is " + fName + " and he is " + age;

//// Escaping
val = "That's awesome, I can't wait";
val = "That's awesome, I can't wait";

//// length - property
val = fName.length;

//// concat() - method
val = fName.concat(" ", lName);

//// change case
val = fName.toUpperCase();
val = fName.toLowerCase();

//// index, indexOf()
herName = "Arya Stark";
val = herName[0];
val = herName.indexOf("h");
val = herName.lastIndexOf("a");
// 0 으로 시작하므로 length -1 로 마지막 숫자를 찾는다. common formula you will see in JS
val = fName.charAt(fName.length - 1); // n (from 'John')

//// substring()
val = fName.substring(1, 3);

//// slice()
val = fName.slice(1, 3);

// start from back to last three
val = fName.slice(-3);

// split()
val = str.split(" ");
val = tags.split(",");

//// replace()
val = str.replace("Rafy", "Jack");

/// includes()
val = str.includes("my");

console.log(val);
