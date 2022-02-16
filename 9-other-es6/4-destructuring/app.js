// // Destructuring Assignment
// // 구조분해할당: 
// // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// //// ARRAY

// let a, b;
// [a, b] = [100, 200];
// // Rest pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];
// // ...rest 사용. 지정하지않은 값을 잡아준다. 'rest 패턴'
// console.log(rest);

// //// OBJECT
// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// console.log(a, b);
// console.log(rest);
// // Array Destructuring

// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// ---------------------------------------------//
// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);

// Object Destructuring

const person = {
	name: 'John Doe',
	age: 32,
	city: 'Miami',
	gender: 'Male',
	sayHello: function () {
		console.log('Hello');
	},
};

// // Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person;


console.log(name, age, city);
sayHello();
