// form taskList clearBtn filter taskInput
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
	form.addEventListener('submit', addTask);
	taskList.addEventListener('click', removeTask);
	clearBtn.addEventListener('click', clearTasks);
	filter.addEventListener('keyup', filterTasks);
}
// AddTask
function addTask(e) {
	if (taskInput === '') {
		alert('nope');
		return null;
	}
	const li = document.createElement('li');
	li.className = 'collection-item';
	const task = document.createTextNode(taskInput.value);
	li.appendChild(task);
	const icon = document.createElement('a');
	icon.innerHTML = '<i class="fa fa-remove"></i>';
	icon.className = 'delete-item secondary-content';
	li.appendChild(icon);
	taskList.appendChild(li);
    taskInput.value = '';
	e.preventDefault();
}
// removeTask
function removeTask(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are you sure?')) {
			e.target.parentElement.parentElement.remove();
		}
	}
}
// clearBtn
function clearTasks() {
	// taskList.innerHTML = '';
	while (taskList.firstChild) {
		taskList.firstChild.remove();
	}
}
// filter
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('collection-item').forEach(function(task){
        const item= task.firstChild.textContent; 
        if (item.toLowerCase().indexOf(text) != -1){
            take.style.display = 'block';
        }else {
            task.style.display = 'none';
        }
    });
}