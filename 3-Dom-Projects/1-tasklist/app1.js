// form taskList clearBtn filter taskInput 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit', addTask);
}

function addTask(e){
    if(taskInput===''){
        alert('nope');
        return null;
    }
    const li = document.createElement('li');
    console.log(li);
    li.className = 'collection-item';
    const task = document.createTextNode(taskInput.value);
    li.appendChild(task);
    const icon = document.createElement('a');
    icon.innerHTML = '<i class="fa fa-remove"></i>';
    icon.className = 'delete-tem secondary-content'
    li.appendChild(icon);
    taskList.appendChild(li);
    e.preventDefault();
}

