// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
	// Add task event
	form.addEventListener('submit', addTask);
	// Remove task event
	// task item마다 x를 처리하기 위해 event delegation 사용.
	taskList.addEventListener('click', removeTask);
	// Clear task Event
	clearBtn.addEventListener('click', clearTasks);
	// Filter tasks event
	filter.addEventListener('keyup', filterTasks);
	// DOM Load Event
	document.addEventListener('DOMContentLoaded', getTasks);
}

// Get Tasks from LS
function getTasks() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach(function (getIt) {
		const li = document.createElement('li');
		// Add class
		li.className = 'collection-item';
		// Create text node and append to li
		li.appendChild(document.createTextNode(getIt));
		// Create new link element
		const link = document.createElement('a');
		// Add class
		link.className = 'delete-item secondary-content';
		// Add icon html
		link.innerHTML = '<i class="fa fa-remove"></i>';
		// Append the link to li
		li.appendChild(link);
		// Append li to ul
		taskList.appendChild(li);
	});
}

// Add Task
function addTask(e) {
	if (taskInput.value === '') {
		alert('Add a task');
	}
	// Create li element
	const li = document.createElement('li');
	// Add class
	li.className = 'collection-item';
	// Create text node and append to li
	li.appendChild(document.createTextNode(taskInput.value));
	// Create new link element
	const link = document.createElement('a');
	// Add class
	link.className = 'delete-item secondary-content';
	// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';
	// Append the link to li
	li.appendChild(link);
	// Append li to ul
	taskList.appendChild(li);

	// Store in LS
	storeTaskInLocalStorage(taskInput.value);

	// Clear input
	taskInput.value = '';
	e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(inputValue) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(inputValue);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		// console.log(e.target);
		if (confirm('Are You Sure?')) {
			e.target.parentElement.parentElement.remove();
			// Remove from LS
			removeTaskFromLocalStorage(e.target.parentElement.parentElement);
		}
	}
	/* 
	1) 정확하게 delete-item으로 되어있는 x버튼을 지정해주고, (if-1)
	2) 버튼이 눌렸을때(true일때), target 값을 받아올 수 있도록 해준다. (if-2) 
	3) 그 받은 target의 정확한 부모의 부모가 삭제되도록 해준다.
	if-1에서 정확히 지정을 하지 않으면 부모가 잘못 잡혀서 통으로 날아감.
	*/
}
// Remove from LS
function removeTaskFromLocalStorage(taskItem){
	console.log(taskItem);
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach(function(task, index){
		if(taskItem.textContent === task){
			tasks.splice(index, 1);
		}
	});
	localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
	// Option 1
	// taskList.innerHTML = '';
	// Option 2 - Better, Faster
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
		// CLEAR FROM LS
		clearTasksFromLocalScorage();
	}
}

// 
function clearTasksFromLocalScorage () {
	localStorage.clear();
}

// Filter
/* 
*** 
getElementby -> HTML Collection,git querySelector -> nodelist
HTML collection --> array로 변환해서 forEach문을 작성해야하지만
querySelectorAll --> nodelist를 생성하므로 forEach가 작동된다.

1) document.querySelectorAll('.collection-item') --> 결과: li들..
	NodeList [ li.collection-item, li.collection-item ], ...
2) 각 li들의 첫번째 node는 34열의 
	li.appendChild(document.createTextNode(taskInput.value));
	로 생성된 텍스트이다. 
3) 만약 이 값과 일치 값이 indexof() method와 없어서 -1이라는 값을 출력하면,
	-1와 일치되지 않기 때문에 출력, 그외엔 출력하지 않는다.
*** Rule of indexOf
The indexOf() method returns the position of the first occurrence of a value in a string.
The indexOf() method returns -1 if the value is not found.
The indexOf() method is case sensitive.
*/
function filterTasks(e) {
	const text = e.target.value.toLowerCase();
	console.log(text);
	document.querySelectorAll('.collection-item').forEach(function (fResult) {
		// 이해를 돕기위해 task 매개변수(parameter) 대신 임의의 fResult를 사용.
		const item = fResult.firstChild.textContent;
		// first node of collection-item is textNode
		if (item.toLowerCase().indexOf(text) != -1) {
			fResult.style.display = 'block';
		} else {
			fResult.style.display = 'none';
		}
	});
}
