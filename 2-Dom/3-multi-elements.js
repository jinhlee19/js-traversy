///////////////////////////
////// 3. Multiple Elements 

//////////////////////////////////////////
////// document.getElementsByClassName
// - more than 1 selector HTML Collection 이나 node list를 리턴한다.
// document.getElementById() -> document.getElementsByClassName()

const items = document.getElementsByClassName('collection-item');
console.log(items); // HTMLCollection with index
// global scope - select global collection-item

/*
- html 컬렉션으로 받게되면 모든 아이템은 인덱스: 값과
모든 프로퍼티 (innerText, innerhtml, class) 등 불러옴.
- 일부만 array 처럼 다룰수 있다 (기본 인덱스대로..)
*/

console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// querySelector and getElementsBy를 함께 사용. - ul 안에 있는 것만 포함시킨다. (scope)

console.log(listItems);

//////////////////////////////////////////
////// document.getElementsByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

//////////////////////////////////////////
////// Conver HTML Collection into array

// HTMLCollections are not array
lis = Array.from(lis); // so make lis to array **
lis.reverse(); // array method testing

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});
// 1) collection을 array로 변환 2) array test with reverse(); 
// 3) forEach로 '1:hello, 2:hello ...' 형태로 바꿔주기

console.log(lis); 

//////////////////////////////////////////
////// document.querySelectorAll

// document.querySelector() | document.querySelectorAll()

/*
- Node List counts not only elements, but text nodes.
- allows us to do for each and do some other
  array methods without having convert it.
*/

const itemss = document.querySelectorAll('ul.collection li.collection-item');

itemss.forEach(function (item, index) {
	item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
	li.style.background = '#ccc';
});

for (i = 0; i < liEven.length; i++) {
	liEven[i].style.background = 'orangered';
}

console.log(itemss);


