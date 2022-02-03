///////////////////////////
////// 9. Keyboard and Input Events


const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear Input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// // Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent);
// Blur
taskInput.addEventListener('blur', runEvent);

// Cut
taskInput.addEventListener('cut', runEvent);
// Paste
taskInput.addEventListener('paste', runEvent);
// Input 
taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);
function runEvent(e) {
	console.log(`Event Type: ${e.type}`);
	// form의 action이 redirect 하는 걸 방지해주고자 할 때 유용.
	// 폼에서 종종 사용.

	// Get Input Value
	console.log(taskInput.value);
	e.preventDefault();

	console.log(e.target.value);
	heading.innerText = e.target.value;
}
