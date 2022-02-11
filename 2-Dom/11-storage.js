/////////////////////////
//// 11. Local and Session Storage

/*
Storages
- local and session storage
- json.stringify json.parse
string으로 사용
*/

// Set Local Storage Item
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// Set Session Storage Item
sessionStorage.setItem('name', 'Beth')

Remove from Storage
localStorage.removeItem('name');

// Get from Storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// // clear local
localStorage.clear();

console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
    console.log(task.value);
    const task=document.getElementById('task').value;
    localStorage.setItem('task',task);
    e.preventDefault();
});

/* 여기까지는 그냥 생성. 이후 Replace가 반복되지 않게 
 craete an array of tasks and store as a string. */

document.querySelector('form').addEventListener('submit', function (e) {
	const task = document.getElementById('task').value;

	let tasks;
	if (localStorage.getItem('tasks') == null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
        /*
        tasks 라는 하나의 키 안에 tasks의 저장된 value들을 string array로 집어 넣어야한다. 
        - string들은 주로 JSON으로 넣어주거나 parse into an object 해줘야한다.
        - 이경우는 object로, 한 value(an array of strings)를 저장시켜야한다. 
          이때는 주로 an array of json object에 저장하게된다.
        - JSON.parse()는 텍스트를 자바스크립트 객체로 변환시킨다.
        */
	}

    tasks.push(task); // 추가하는 부분.
	localStorage.setItem('tasks', JSON.stringify(tasks));
    // tasks 안의 array를 json문자열로 변환한다.
    
    alert('Task saved.')
	e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    // console.log(task);
});