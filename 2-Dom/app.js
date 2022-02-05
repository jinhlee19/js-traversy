/*
Storages
- local and session storage
- json.stringify json.parse
string으로 사용
local storage API - part of browser - window
- 내부에서 key: value pair로 저장 할 수 있다. 하지만 요점은 value = string 이어야한다는 점.
- what you set as a value has to be a string. 
*/

// // Set Local Storage Item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');


// // Set Session Storage Item
// sessionStorage.setItem('name', 'Beth')

// Remove from Storage
// localStorage.removeItem('name');

// // Get from Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // // clear local
// localStorage.clear();

console.log(typeof name);
console.log(typeof age);

document.querySelector('form').addEventListener('submit', function(e){
    console.log(task.value);
    const task=document.getElementById('task').value;
    localStorage.setItem('task',task);
    e.preventDefault();
});
 
/* 
위와 같이 만들면 value가 하나씩 밖에 저장이 되지 않는 문제 발생한다.
해결을 위해서 tasks라는 array를 만들고 string으로 저장시켜야한다. 
*/

document.querySelector('form').addEventListener('submit', function (e) {
	// 1-1. form 에서 들어오는 task를 tasks로 push한다. (64열과 함께)
    const task = document.getElementById('task').value;

	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
        // tasks local storage에 저장된 object - tasks의 parse해서 tasks array로 가져온다.
        /*
        string들을 사용하기 위해서는 JSON object로 parse 해줘야한다.
        이 예제는 array of string 이지만, 주로 array of JSON object로 저장해줘야함.
        tasks 라는 하나의 키 안에 tasks의 저장된 value들을 string array로 집어 넣어야한다. 
        - 이경우는 object로, 한 value(an array of strings)를 저장시켜야한다. 
          이때는 주로 an array of json object에 저장하게된다.
        - JSON.parse()는 텍스트를 자바스크립트 객체로 변환시킨다.
        */
	}
    // 1-2. (46열과 함께) 로컬 스토리지를 추가된 value와 함께 리셋한다.
    tasks.push(task); // 추가하는 부분.
	// 
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // tasks 안의 array를 json문자열로 변환해서 저장한다.
    
    alert('Task saved.')
	e.preventDefault();
});

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//     console.log(task);
// });