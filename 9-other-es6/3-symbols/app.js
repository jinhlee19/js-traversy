// primitive 데이터 타입으로 이전에 간단히 설명됐었다. 
// 모든 심볼은 unique하고 이점이 심볼을 object property identifier에 있어서 중요한 존재로 만들어준다.
// 
// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');
// 원하면 identifier를 symbol안에 넣을수 있다.

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(sym2)
console.log(typeof sym2); //

console.log(Symbol('123') === Symbol('123')); // false
// 같은 symbol은 없다. 각자 유니크
console.log(`Hello ${sym1.toString()}`); // Hello Symbol()


// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

// key를 변수로 쓸때는 .key가 아닌 [key1]
// normal property x -> variable
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
// for(let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));