// ////////////////////////////////////////////////////
// ////// 14. General Loops

// ////////////////////////////////////////////////////
// ////// FOR LOOP
// ////// When u know how many times u will run

// for (let i = 0; i < 12; i++) {
// 	// console.log('number' + i);
// 	if (i === 2) {
// 		console.log('2 is my favorite number');
// 		continue; // keep going with next iteration.
// 	}
// 	if (i === 7) {
// 		console.log('stop the loop');
// 		break;
// 	}
// 	console.log('Number ' + i);
// }

// ////////////////////////////////////////////////////
// ////// WHILE LOOP
// ////// generally, when its not clear how many. not always, tho.

// ///// 1) While

// let j = 0;

// while (j < 10) {
// 	console.log('Number ' + j);
// 	j++;
// }

// ///// 2) Do While
// // While과의 차이는 (조건까지 가기 전에 실행되므로) 무조건 한번은 실행한다.

// let k = 0;
// do {
// 	console.log('Number ' + k);
// 	k++;
// } while (k < 10);

// ////////////////////////////////////////////////////
// ////// LOOPS IN ARRAY ***
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// for (let i = 0; i < cars.length; i++) {
// 	console.log(cars[i]);
// }
// // While ver.
// let m = 0;
// while (m < cars.length) {
// 	console.log(cars[m]);
// 	m++;
// }

// ////////////////////////////////////////////////////
// ////// FOR EACH METHOD
// // Anonymous Function - like self calling function.
// // For each is Better option than for or while
cars.forEach(function (car) {
	console.log(car); // Ford, Chevy, Honda, Toyota
});

// ////////////////////////////////////////////////////
// ////// 3 things you can place?! *** 
cars.forEach(function (car, index, array) {
    // array key(index): array value로 정렬
	console.log(`${index}:${car}`);  // 0:ford 1:Chevy ...
    console.log(array); // > (4)
});

// ////////////////////////////////////////////////////
// ////// FOR IN LOOP
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for (let x in user){
//     console.log(x); // key들을 돌려줌.
//     console.log('${x}:${user[x]}')
// }

// ////////////////////////////////////////////////////
// ////// MAP
// const users = [
// 	{ id: 1, name: 'John' },
// 	{ id: 2, name: 'Sara' },
// 	{ id: 3, name: 'Karen' },
// 	{ id: 4, name: 'Steve' },
// ];
// // set another variable IDs and 
// // take this array of objects and create an array of the IDs
// const ids = users.map(function (user) {
// 	// return user.id;
//     return user.name;
// });

// console.log(ids);