//// Object Literal

const person = {
	fName: "Steve",
	lNAme: "Smith",
	age: 38,
	email: "steve@aol.com",
	hobbies: ["music", "sports"],
	address: {
		city: "Miami",
		state: "FL",
	},
	getBirthYear: function () {
		// ** we can access other property in the object.
		// * 'this' keyword to use property pertaining to the object.
		return 2022 - this.age;
	},
};

let val;
val = person;

// Get specific value

//syntax
val = person.firstName; // Steve
val = person["lastName"]; // Smith

val = person.age;
val = person.hobbies[1]; // sports
val = person.address.state; // FL
val = person.address["city"]; // Miami
val = person.getBirthYear(); // 1984

console.log(val);

const people = [
	{ name: "John", age: 30 },
	{ name: "Mike", age: 23 },
	{ name: "Nancy", age: 40 },
];

for (let i = 0; i < people.length; i++) {
	console.log(people[i].name);
}
