///////////////////////////
////// 6. Removing & Replacing Elements

////// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
console.log(newHeading);

// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));
// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

////// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove List Item;
lis[0].remove();

// Remove Child Element
list.removeChild(lis[3]);

////// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
console.log(firstLi.children[0]);
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[0]; // <a ...></a>
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href'); // #
val = link.getAttribute('href', 'http://google.com');
val = link.hasAttribute('href'); // true
val = link.hasAttribute('title');
link.setAttribute('Title', 'Google');
val = link.hasAttribute('title');
val = link.removeAttribute('title');
val = link;
console.log(val);

