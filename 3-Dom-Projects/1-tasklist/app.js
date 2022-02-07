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
	clearBtn.addEventListener('click',clearTasks);
	// Filter tasks event
	filter.addEventListener('keyup', filterTasks);
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
	// Clear input
	taskInput.value = '';
	e.preventDefault();
}
// Remove Task
function removeTask(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		// console.log(e.target);
		if(confirm('Are You Sure?')){
			e.target.parentElement.parentElement.remove();
		}
	}
}

// Clear Tasks
function clearTasks(){
	// Option 1
	// taskList.innerHTML = '';
	// Option 2 - Better, Faster
	while(taskList.firstChild){
		taskList.removeChild(taskList.firstChild);
	}
}

// Filter
function filterTasks(e){
	const text = e.target.value.toLowerCase();
	console.log(text);
	document.querySelectorAll('.collection-item').forEach(function(task){
	// *** getElementby -> HTML Collection,git querySelector -> nodelist
	// HTML collection --> array로 변환해서 forEach문을 작성해야하지만 
	// querySelectorAll --> nodelist를 생성하므로 forEach가 작동된다.
		const item = task.firstChild.textContent;
		if(item.toLowerCase().indexOf(text) != -1){
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
	

}