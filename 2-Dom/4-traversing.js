///////////////////////////
////// 4. Traversing the DOM

let val;

const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child'); 
const listItem = document.querySelector('li.collection-item'); // first-item anyways

val = listItem; // li
val = list; // ul

// Get child nodes
val = list.childNodes; // returns Nodelist 
// 이때, text node는 'List Item' 텍스트가 아닌 줄바꿈부분. 
val = list.children; // returns HTML Collection - Gets children element node.

/* childNodes returns nodelist children, while children returns HTMLCollection
DOM을 다루는데는 주로 children이 사용되고 childNode를 사용할 일이 적다고함..
*/

val = list.childNodes[0]; // #text - textNode.
val = list.childNodes[1].nodeType; 
// val = list.childNodes; 
val = list.childNodes[3].nodeType; //8
// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent= 'Hello';

// Children of children
val = list.children[3].children; //collection
val = list.children[3].children[0]; // 'a' tag selector
// Children 
list.children[3].children[0].id = 'test-link'; // 링크주기
val = list.children[3].children[0]; // 링크확인

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node & Element 
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;


// Get Next Sibling
val = listItem.nextSibling; // "#text" \n
val = listItem.nextElementSibling.nextElementSibling; // <!-- Node Type Check -->

// Get Prev Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

val = listItem.nextSibling.nextSibling.previousElementSibling;
console.log(val);

