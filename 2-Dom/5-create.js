///////////////////////////
////// 5. Creating Elements ***

////// New List Item

// Create Element
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Add id 
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create Text Node and Append ***
// 생성된 li 태그 사이에 task list item 생성 
li.appendChild(document.createTextNode('Hello World')); 

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

////// Delete Icon
// Create new link element ***
const link = document.createElement('a');
link.className = 'delete-item secondary-content';

// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);